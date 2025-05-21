import HomePageClient from "@/components/client/HomePageClient";

export const metadata = {
  title: "BollyGroove - UK's Premier Bollywood Events",
  description:
    "Join BollyGroove for the most electrifying Bollywood events, club nights, boat parties, and cultural celebrations in London and across the UK. Dance your desi way out!",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BollyGroove - UK's Premier Bollywood Events",
    description:
      "Join BollyGroove for the most electrifying Bollywood events, club nights, boat parties, and cultural celebrations in London and across the UK. Dance your desi way out!",
    images: [
      {
        url: "/og-image-home.jpg", // Replace with your actual homepage OG image
        width: 1200,
        height: 630,
        alt: "BollyGroove Bollywood Events",
      },
    ],
  },
  twitter: {
    title: "BollyGroove - UK's Premier Bollywood Events",
    description:
      "Join BollyGroove for the most electrifying Bollywood events, club nights, boat parties, and cultural celebrations in London and across the UK. Dance your desi way out!",
    images: ["/og-image-home.jpg"], // Replace with your actual homepage OG image
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
