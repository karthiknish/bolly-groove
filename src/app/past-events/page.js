import PastEventsPageClient from "@/components/client/PastEventsPageClient";

export const metadata = {
  title: "Past Bollywood Events Archive - BollyGroove",
  description:
    "Explore BollyGroove's archive of memorable past Bollywood events, club nights, boat parties, and cultural celebrations. See what you've missed!",
  alternates: {
    canonical: "/past-events",
  },
  openGraph: {
    title: "BollyGroove Past Events Archive",
    description:
      "Relive the excitement of BollyGroove's past Bollywood events. Browse our gallery of unforgettable nights.",
    images: [
      {
        url: "/og-image-past-events.jpg", // Replace with your actual past events OG image
        width: 1200,
        height: 630,
        alt: "BollyGroove Past Events",
      },
    ],
  },
  twitter: {
    title: "BollyGroove Past Events Archive",
    description:
      "Relive the excitement of BollyGroove's past Bollywood events. Browse our gallery of unforgettable nights.",
    images: ["/og-image-past-events.jpg"], // Replace with your actual past events OG image
  },
};

export default function PastEventsPage() {
  return <PastEventsPageClient />;
}
