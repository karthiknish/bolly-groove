"use client"; // For form handling, though basic for now

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitContactForm } from "../actions/submitContactForm"; // Corrected path assuming actions is sibling to contact dir
import { Instagram, Facebook } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState({ type: "", text: "" });
  const formRef = useRef(null); // Ref to reset the form
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFormMessage({ type: "", text: "" });

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.trim();
    const email = formData.get("email")?.trim();
    const phone = formData.get("phone")?.trim();
    const message = formData.get("message")?.trim();

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setIsSubmitting(false);
      setFormMessage({
        type: "error",
        text: "Please enter a valid email address.",
      });
      return;
    }
    // Phone validation (simple: 7-15 digits, can be improved)
    const phoneRegex = /^[0-9\-\+\s\(\)]{7,15}$/;
    if (!phoneRegex.test(phone)) {
      setIsSubmitting(false);
      setFormMessage({
        type: "error",
        text: "Please enter a valid phone number.",
      });
      return;
    }
    if (!name || !email || !phone || !message) {
      setIsSubmitting(false);
      setFormMessage({ type: "error", text: "Please fill out all fields." });
      return;
    }

    // Add a dummy subject for server compatibility
    formData.set("subject", "Contact Form Submission");

    const result = await submitContactForm(formData);

    setIsSubmitting(false);
    if (result.success) {
      formRef.current?.reset(); // Reset form on success
      router.push("/contact/thankyou");
    } else {
      setFormMessage({
        type: "error",
        text: result.message || "An unknown error occurred.",
      });
    }
  };

  return (
    <>
      <head>
        <title>Contact | BollyGroove</title>
        <meta
          name="description"
          content="Contact BollyGroove for event bookings, questions, or to say hello!"
        />
      </head>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-primary">
          Contact BollyGroove
        </h1>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Send us a Message
            </h2>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Full Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your Name"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Email Address
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Phone Number
                </label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="Your phone number"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Your message here..."
                  disabled={isSubmitting}
                />
              </div>

              {formMessage.text && (
                <p
                  className={`text-sm ${
                    formMessage.type === "success"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {formMessage.text}
                </p>
              )}

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Our Details
            </h2>
            <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
              <p>
                <strong>BollyGroove Events</strong>
              </p>
              <p>
                Have questions, want to book an event, or just want to say hi?
                We would love to hear from you!
              </p>
              <p>
                <span className="font-semibold">Phone:</span> (Removed - Please
                use form)
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:support@bollygroove.co.uk"
                  className="text-primary hover:underline"
                >
                  support@bollygroove.co.uk
                </a>
              </p>
              <p>
                <span className="font-semibold">Location:</span> Feltham,
                Middlesex (Meetings by appointment only)
              </p>
              <div className="pt-4">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/bollygrooveevents"
                    aria-label="Facebook"
                    className="text-primary hover:text-secondary/80 hover:scale-110 transition-all duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.instagram.com/bolly_groove01/?hl=en-gb"
                    aria-label="Instagram"
                    className="text-primary hover:text-secondary/80 hover:scale-110 transition-all duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
 