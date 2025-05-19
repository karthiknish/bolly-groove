"use client"; // For form handling, though basic for now

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitContactForm } from "../actions/submitContactForm";
import {
  Instagram,
  Facebook,
  Mail,
  Phone,
  MapPin,
  User,
  MessageCircle,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState({ type: "", text: "" });
  const formRef = useRef(null);
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
      formRef.current?.reset();
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
      <motion.div
        className="container mx-auto px-4 py-12"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <motion.h1
          className="text-4xl font-bold text-center mb-12 text-primary flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <MessageCircle className="w-8 h-8 text-primary" />
          Contact BollyGroove
        </motion.h1>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            className="bg-card p-8 rounded-lg shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            custom={0}
          >
            <motion.h2
              className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={1}
            >
              <Mail className="w-6 h-6 text-primary" />
              Send us a Message
            </motion.h2>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={2}
              >
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center gap-1"
                >
                  <User className="w-4 h-4 text-primary" />
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
              </motion.div>
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={3}
              >
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center gap-1"
                >
                  <Mail className="w-4 h-4 text-primary" />
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
              </motion.div>
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={4}
              >
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center gap-1"
                >
                  <Phone className="w-4 h-4 text-primary" />
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
              </motion.div>
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={5}
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center gap-1"
                >
                  <MessageCircle className="w-4 h-4 text-primary" />
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
              </motion.div>

              {formMessage.text && (
                <motion.p
                  className={`text-sm ${
                    formMessage.type === "success"
                      ? "text-green-600"
                      : "text-red-600"
                  } flex items-center gap-2`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  {formMessage.type === "success" ? (
                    <span role="img" aria-label="Success">
                      ✅
                    </span>
                  ) : (
                    <span role="img" aria-label="Error">
                      ⚠️
                    </span>
                  )}
                  {formMessage.text}
                </motion.p>
              )}

              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={6}
              >
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 mr-2 text-primary-foreground"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Mail className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            className="bg-card p-8 rounded-lg shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            custom={1}
          >
            <motion.h2
              className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={2}
            >
              <MapPin className="w-6 h-6 text-primary" />
              Our Details
            </motion.h2>
            <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
              <motion.p
                className="flex items-center gap-2"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={3}
              >
                <strong>BollyGroove Events</strong>
              </motion.p>
              <motion.p
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={4}
              >
                Have questions, want to book an event, or just want to say hi?
                We would love to hear from you!
              </motion.p>
              <motion.p
                className="flex items-center gap-2"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={5}
              >
                <Phone className="w-5 h-5 text-primary" />
                <span className="font-semibold">Phone:</span>
                <a
                  href="tel:07769406432"
                  className="text-primary hover:underline ml-1"
                >
                  07769 406432
                </a>
                /
                <a
                  href="tel:07380856052"
                  className="text-primary hover:underline ml-1"
                >
                  07380 856052
                </a>
              </motion.p>
              <motion.p
                className="flex items-center gap-2"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={6}
              >
                <Mail className="w-5 h-5 text-primary" />
                <span className="font-semibold">Email:</span>
                <a
                  href="mailto:support@bollygroove.co.uk"
                  className="text-primary hover:underline ml-1"
                >
                  support@bollygroove.co.uk
                </a>
              </motion.p>

              <motion.div
                className="pt-4"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={8}
              >
                <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center gap-2">
                  <span>Follow Us</span>
                  <span className="animate-bounce">
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                      <path
                        d="M12 4v16m0 0l-6-6m6 6l6-6"
                        stroke="#f59e42"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </h3>
                <div className="flex space-x-4">
                  <motion.a
                    href="https://www.facebook.com/bollygrooveevents"
                    aria-label="Facebook"
                    className="text-primary hover:text-secondary/80 hover:scale-110 transition-all duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: -8 }}
                  >
                    <Facebook className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="https://www.instagram.com/bolly_groove01/?hl=en-gb"
                    aria-label="Instagram"
                    className="text-primary hover:text-secondary/80 hover:scale-110 transition-all duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 8 }}
                  >
                    <Instagram className="w-6 h-6" />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}