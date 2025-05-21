import AboutPageClient from "@/components/client/AboutPageClient";

export const metadata = {
  title: "About BollyGroove - Our Story & Mission",
  description:
    "Learn about BollyGroove, our passion for Bollywood, and our mission to create unforgettable desi events and parties in the UK. Meet the team behind the magic!",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About BollyGroove - Spreading Bollywood Joy",
    description:
      "Discover the story behind BollyGroove and our commitment to delivering the best Bollywood entertainment experiences in London and the UK.",
    images: [
      {
        url: "/og-image-about.jpg", // Replace with your actual about page OG image
        width: 1200,
        height: 630,
        alt: "About BollyGroove",
      },
    ],
  },
  twitter: {
    title: "About BollyGroove - Spreading Bollywood Joy",
    description:
      "Discover the story behind BollyGroove and our commitment to delivering the best Bollywood entertainment experiences in London and the UK.",
    images: ["/og-image-about.jpg"], // Replace with your actual about page OG image
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
