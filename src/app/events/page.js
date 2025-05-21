import EventsPageClient from "@/components/client/EventsPageClient";

export const metadata = {
  title: "Upcoming Bollywood Events - London & UK",
  description:
    "Discover the latest and greatest upcoming Bollywood events, parties, and cultural nights hosted by BollyGroove in London and across the UK. Book your tickets now!",
  alternates: {
    canonical: "/events",
  },
  openGraph: {
    title: "Upcoming BollyGroove Events",
    description:
      "Don't miss out on the hottest Bollywood events! See BollyGroove's schedule for upcoming parties, club nights, and cultural festivals.",
    images: [
      {
        url: "/og-image-events.jpg", // Replace with your actual events OG image
        width: 1200,
        height: 630,
        alt: "BollyGroove Upcoming Events",
      },
    ],
  },
  twitter: {
    title: "Upcoming BollyGroove Events",
    description:
      "Don't miss out on the hottest Bollywood events! See BollyGroove's schedule for upcoming parties, club nights, and cultural festivals.",
    images: ["/og-image-events.jpg"], // Replace with your actual events OG image
  },
};

export default function EventsPage() {
  return <EventsPageClient />;
}
