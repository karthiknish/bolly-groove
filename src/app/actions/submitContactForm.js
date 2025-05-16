"use server";

import { createClient } from "contentful-management";

export async function submitContactForm(formData) {
  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  };

  // Basic validation (can be expanded)
  if (
    !rawFormData.name ||
    !rawFormData.email ||
    !rawFormData.phone ||
    !rawFormData.message
  ) {
    return { success: false, message: "Please fill out all fields." };
  }

  if (
    !process.env.CONTENTFUL_SPACE_ID ||
    !process.env.CONTENTFUL_MANAGEMENT_TOKEN ||
    !process.env.CONTENTFUL_ENVIRONMENT ||
    !process.env.CONTENTFUL_CONTACT_FORM_CONTENT_TYPE_ID
  ) {
    console.error("Contentful environment variables are not set.");
    return {
      success: false,
      message: "Server configuration error. Please try again later.",
    };
  }

  const client = createClient({
    accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
  });

  try {
    const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID);
    const environment = await space.getEnvironment(
      process.env.CONTENTFUL_ENVIRONMENT
    );

    // Ensure the entry fields match your Contentful content type field IDs
    // The locale 'en-US' is common; adjust if your default locale is different.
    await environment.createEntry(
      process.env.CONTENTFUL_CONTACT_FORM_CONTENT_TYPE_ID,
      {
        fields: {
          name: {
            "en-US": rawFormData.name,
          },
          email: {
            "en-US": rawFormData.email,
          },
          phone: {
            "en-US": rawFormData.phone,
          },
          message: {
            "en-US": rawFormData.message,
          },
          // submissionDate: { // Optional: if you have a date field
          //   'en-US': new Date().toISOString(),
          // },
        },
      }
    );

    return {
      success: true,
      message: "Thank you for your message! We will get back to you soon.",
    };
  } catch (error) {
    console.error("Contentful submission error:", error);
    // Log more detailed error if possible, e.g., error.response.data
    let errorMessage = "Could not submit your message. Please try again later.";
    if (error.response && error.response.data && error.response.data.message) {
      errorMessage = `Error: ${error.response.data.message}`;
    }
    return { success: false, message: errorMessage };
  }
}
