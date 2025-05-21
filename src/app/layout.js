import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://bollygroove.co.uk"),
  title: {
    default: "BollyGroove - Dance Your Desi Way Out!",
    template: `%s | BollyGroove`,
  },
  description:
    "Experience the magic of Bollywood with BollyGroove! Join our electrifying events, dance to the latest desi beats, and celebrate Indian culture in the UK. Book your tickets now!",
  keywords: [
    "Bollywood events",
    "Indian parties London",
    "Desi nights UK",
    "Bhangra",
    "Bollywood dance",
    "Indian culture",
    "BollyGroove",
  ],
  openGraph: {
    title: "BollyGroove - Dance Your Desi Way Out!",
    description:
      "Experience the magic of Bollywood with BollyGroove! Join our electrifying events, dance to the latest desi beats, and celebrate Indian culture in the UK.",
    url: "https://bollygroove.co.uk",
    siteName: "BollyGroove",
    images: [
      {
        url: "/logo.png", // Path to your OG image
        width: 1200,
        height: 630,
        alt: "BollyGroove Logo",
      },
    ],
    locale: "en_UK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BollyGroove - Dance Your Desi Way Out!",
    description:
      "Experience the magic of Bollywood with BollyGroove! Join our electrifying events, dance to the latest desi beats, and celebrate Indian culture in the UK.",
    // siteId: '@yourTwitterHandle', // Optional: Your Twitter ID
    // creator: '@creatorTwitterHandle', // Optional: Creator's Twitter ID
    images: ["/logo.png"], // Must be an absolute URL or a path starting with /
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://bollygroove.co.uk",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico", // or '/favicon-16x16.png'
    apple: "/apple-touch-icon.png", // Create this image
    // other: {
    //   rel: 'apple-touch-icon-precomposed',
    //   url: '/apple-touch-icon-precomposed.png', // Create this image
    // },
  },
  // themeColor: '#A301F8', // Your primary color
  // colorScheme: 'light dark', // Or 'light', 'dark'
  // manifest: '/site.webmanifest', // Create this manifest file
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased flex flex-col min-h-screen font-sans">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
