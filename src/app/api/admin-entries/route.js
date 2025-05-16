import { createClient } from "contentful-management";

export async function GET() {
  if (
    !process.env.CONTENTFUL_SPACE_ID ||
    !process.env.CONTENTFUL_MANAGEMENT_TOKEN ||
    !process.env.CONTENTFUL_ENVIRONMENT ||
    !process.env.CONTENTFUL_CONTACT_FORM_CONTENT_TYPE_ID
  ) {
    return Response.json(
      { entries: [], error: "Contentful environment variables are not set." },
      { status: 500 }
    );
  }

  const client = createClient({
    accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
  });

  try {
    const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID);
    const environment = await space.getEnvironment(
      process.env.CONTENTFUL_ENVIRONMENT
    );
    const entries = await environment.getEntries({
      content_type: process.env.CONTENTFUL_CONTACT_FORM_CONTENT_TYPE_ID,
      order: "-sys.createdAt",
    });

    const formatted = entries.items.map((entry) => ({
      name: entry.fields.name?.["en-US"] || "",
      email: entry.fields.email?.["en-US"] || "",
      phone: entry.fields.phone?.["en-US"] || "",
      message: entry.fields.message?.["en-US"] || "",
      date: entry.sys.createdAt
        ? new Date(entry.sys.createdAt).toLocaleDateString()
        : "",
    }));

    return Response.json({ entries: formatted });
  } catch (error) {
    console.error("Error fetching Contentful entries:", error);
    return Response.json(
      { entries: [], error: "Failed to fetch entries." },
      { status: 500 }
    );
  }
}
