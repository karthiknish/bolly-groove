"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { motion } from "framer-motion";

// Placeholder data - this would typically come from an API or CMS
// In a real app, you might fetch this or pass it from a shared location
const upcomingEvents = [
  {
    id: 1,
    title: "Hounslow Desi Mela 2025 - London's Biggest Desi Summer Festival",
    venue: "Hounslow",
    date: "21/06/2025", // Example plausible date
    imageUrl:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1013292603%2F1818146595273%2F1%2Foriginal.20250421-165718?crop=focalpoint&fit=crop&w=940&auto=format%2Ccompress&q=75&sharp=10&fp-x=0.498106060606&fp-y=0.0321011673152&s=2493861cb06b9e49cb7b6a5c86cb0527",
    description:
      "Join us for Hounslow Desi Mela 2025, London's biggest Desi summer festival! Enjoy music, dance, food, and vibrant celebrations.",
    longDescription:
      "Experience the ultimate Desi summer festival in Hounslow! Live performances, delicious food, cultural activities, and more. Don't miss out on the biggest celebration of the year.",
    link: "https://www.eventbrite.co.uk/e/hounslow-desi-mela-2025-londons-biggest-desi-summer-festival-tickets-1291588278309?aff=ebdsoporgprofile",
  },
];

// Animation variants (can be moved to a shared file if used across many pages)
const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger the animation of each card
      delayChildren: 0.3, // Optional: delay before children start animating
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function EventsPage() {
  return (
    <>
      <head>
        <title>Events | BollyGroove</title>
        <meta
          name="description"
          content="See all upcoming Bollywood events, parties, and festivals by BollyGroove."
        />
      </head>
      <motion.section
        className="py-16 bg-secondary"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-4xl accent-primary text-center mb-12"
            variants={sectionVariants}
          >
            <span className="text-primary">Upcoming</span> Events
          </motion.h1>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={cardContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {upcomingEvents.map((event) => (
              <motion.div key={event.id} variants={cardVariants}>
                <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full bg-white border-primary">
                  <CardHeader className="p-0">
                    <div className="relative h-60 w-full">
                      <Image
                        src={event.imageUrl}
                        alt={event.title}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <CardTitle className="text-2xl accent-primary mb-2">
                      {event.title}
                    </CardTitle>
                    <CardDescription className="text-primary mb-1">
                      <span className="font-medium">Venue:</span> {event.venue}
                    </CardDescription>
                    <CardDescription className="text-primary mb-3">
                      <span className="font-medium">Date:</span> {event.date}
                    </CardDescription>
                    <p className="text-gray-700 text-sm mb-4 flex-grow">
                      {event.description}
                    </p>
                    <Button
                      asChild
                      className="mt-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
                    >
                      <Link href={`${event.link}`}>View Details</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          {upcomingEvents.length === 0 && (
            <p className="text-center text-xl text-gray-600 mt-12">
              No upcoming events right now. Check back soon!
            </p>
          )}
          <div className="flex justify-center mt-10">
            <Button
              asChild
              variant="primary"
              className="bg-primary hover:bg-primary/80 text-primary-foreground hover:scale-105 transition-all duration-200"
            >
              <Link href="/past-events">View Past Events</Link>
            </Button>
          </div>
        </div>
      </motion.section>
    </>
  );
}
