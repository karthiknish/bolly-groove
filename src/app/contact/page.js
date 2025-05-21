import ContactPageClient from "@/components/client/ContactPageClient";

export const metadata = {
  title: "Contact BollyGroove - Get In Touch",
  description:
    "Contact BollyGroove for event bookings, enquiries, collaborations, or just to say hello! We'd love to hear from you. Reach out via our contact form, email, or social media.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact BollyGroove - Let's Talk!",
    description:
      "Get in touch with the BollyGroove team. We're here to help with your Bollywood event needs and enquiries.",
    images: [
      {
        url: "/og-image-contact.jpg", // Replace with your actual contact page OG image
        width: 1200,
        height: 630,
        alt: "Contact BollyGroove",
      },
    ],
  },
  twitter: {
    title: "Contact BollyGroove - Let's Talk!",
    description:
      "Get in touch with the BollyGroove team. We're here to help with your Bollywood event needs and enquiries.",
    images: ["/og-image-contact.jpg"], // Replace with your actual contact page OG image
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
