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
import { pastEventsData } from "@/data/pastEventsData";
function parseDate(dateStr) {
  // Expects DD/MM/YYYY
  const [day, month, year] = dateStr.split("/").map(Number);
  return new Date(year, month - 1, day);
}

// Animation variants (can be moved to a shared file if used across many pages)
const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function PastEventsPage() {
  return (
    <>
      <head>
        <title>Past Events | BollyGroove</title>
        <meta
          name="description"
          content="Browse our gallery of past Bollywood events and parties hosted by BollyGroove."
        />
      </head>
      <div className="mx-auto px-4 py-12 bg-secondary">
        <motion.h1
          className="text-4xl accent-primary text-center mb-12"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          Our Past Events
        </motion.h1>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={cardContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {pastEventsData.map((event) => (
            <motion.div key={event.id} variants={cardVariants}>
              <Card className="overflow-hidden shadow-lg p-0 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full bg-white border-primary">
                <CardHeader className="p-0">
                  <div className="relative h-60 w-full">
                    <Image
                      src={event.imageUrl}
                      alt={`Past event: ${event.title}`}
                      layout="fill"
                      objectFit="cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <p className="absolute bottom-4 left-4 text-white text-sm font-semibold bg-black/50 px-2 py-1 rounded">
                      {new Date(parseDate(event.date)).toLocaleDateString(
                        "en-GB",
                        {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        }
                      )}
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <CardTitle className="text-2xl accent-primary mb-2">
                    {event.title}
                  </CardTitle>
                  <CardDescription className="text-secondary mb-1">
                    <span className="font-bold text-primary">
                      Venue: {event.venue}
                    </span>
                  </CardDescription>
                  <p className="text-gray-700 text-sm mb-4 flex-grow">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        {pastEventsData.length === 0 && (
          <p className="text-center text-xl text-gray-600 mt-12">
            No past event information available at the moment.
          </p>
        )}
      </div>
    </>
  );
}
