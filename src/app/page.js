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
import { motion } from "framer-motion"; // Import motion
import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Music,
  Ship,
  Sun,
  Mic2,
  PartyPopper,
} from "lucide-react";

// Placeholder data - this would typically come from an API or CMS
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
      "Experience the ultimate Desi summer festival in Hounslow! Live performances, delicious food, cultural activities, and more. Don't miss out on the biggest celebration of the year. Full details and tickets on Eventbrite.",
    link: "https://www.eventbrite.co.uk/e/hounslow-desi-mela-2025-londons-biggest-desi-summer-festival-tickets-1291588278309?aff=ebdsoporgprofile",
  },
];

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

// Testimonials data
const testimonials = [
  {
    quote:
      "BollyGroove's Desi Mela was the highlight of our summer! The music, food, and energy were absolutely incredible. My friends and I danced all night and made memories we'll never forget. Can't wait for the next event!",
    name: "Priya S.",
    event: "Guest at Hounslow Desi Mela 2024",
  },
  {
    quote:
      "The Diwali Boat Party was a magical experience! The lights, music, and festive vibes made it truly unforgettable. Thank you, BollyGroove, for an amazing night on the Thames.",
    name: "Amit P.",
    event: "Diwali Boat Party, 2023",
  },
  {
    quote:
      "The Qawwali Night was a soulful and mesmerizing experience. The music and atmosphere transported us to another world. Thank you, BollyGroove, for an unforgettable evening!",
    name: "Sonal R.",
    event: "Qawwali Night, 2023",
  },
  {
    quote:
      "We loved the Holi party! The colors, the food, and the performances were all top-notch. My kids are still talking about it!",
    name: "Ravi K.",
    event: "Holi Event, 2024",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Can also add motion here if desired */}
      <section
        className="relative h-[calc(100vh-80px)] min-h-[600px] bg-primary text-primary-foreground flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(0,0,0,0.05) 0px, rgba(0,0,0,0.05) 2px, transparent 2px, transparent 10px)",
        }}
      >
        {/* Large Background Video (insta-video.mp4) */}
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-75"
          src="/insta-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/logo.png"
        />

        {/* Insta Videos Background (3-video collage) */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-10">
          {/* Video 1 (Left-ish, slightly rotated) */}
          <video
            className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[30%] h-[70%] object-cover opacity-85 transform -rotate-3 shadow-2xl border-2 border-secondary/50 rounded-lg"
            src="/insta-video-3.mp4"
            autoPlay
            loop
            muted
            playsInline
            poster="/logo.png"
          />
          {/* Video 2 (Center, more prominent) */}
          <video
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35%] h-[80%] object-cover opacity-95 shadow-2xl border-2 border-secondary rounded-lg z-10"
            src="/insta-video-4.mp4"
            autoPlay
            loop
            muted
            playsInline
            poster="/logo.png"
          />
          {/* Video 3 (Right-ish, slightly rotated) */}
          <video
            className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-[30%] h-[70%] object-cover opacity-85 transform rotate-3 shadow-2xl border-2 border-secondary/50 rounded-lg"
            src="/insta-video-2.mp4"
            autoPlay
            loop
            muted
            playsInline
            poster="/logo.png"
          />
        </div>

        {/* Overlays removed as per request */}

        <motion.div
          className="relative z-20 text-center p-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl accent-primary mb-6 drop-shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Experience the Magic of Bollywood
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 accent-secondary drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Dance your desi way out
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Button
              size="lg"
              asChild
              className="bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6 font-bold"
            >
              <Link href="/events">View Upcoming Events</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Event Types Section */}
      <motion.section
        className="py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            className="text-4xl accent-primary text-center mb-12 font-bold"
            variants={sectionVariants}
          >
            Event Types We Host
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <motion.div
              className="flex flex-col items-center bg-[#F3E8FF] rounded-3xl p-8 shadow-lg hover:scale-105 transition-transform duration-200 border-2 border-secondary rotate-[-2deg]"
              whileHover={{ scale: 1.07, rotate: -1 }}
            >
              <Music className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold accent-primary mb-2">
                Club Nights
              </h3>
              <p className="text-gray-700 text-center">
                High-energy Bollywood club nights with top DJs, dance floors,
                and unforgettable vibes.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center bg-[#FFF7E0] rounded-3xl p-8 shadow-lg hover:scale-105 transition-transform duration-200 border-2 border-secondary rotate-[2deg]"
              whileHover={{ scale: 1.07, rotate: 1 }}
            >
              <Ship className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold accent-primary mb-2">
                Boat Parties
              </h3>
              <p className="text-gray-700 text-center">
                Unique Bollywood boat parties on the Thames and beyond—music,
                dancing, and stunning views.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center bg-[#E0FFF7] rounded-3xl p-8 shadow-lg hover:scale-105 transition-transform duration-200 border-2 border-secondary rotate-[-1deg]"
              whileHover={{ scale: 1.07, rotate: 0 }}
            >
              <Sun className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold accent-primary mb-2">
                Seasonal Events
              </h3>
              <p className="text-gray-700 text-center">
                Celebrate Holi, Diwali, New Year&apos;s, and more with our
                vibrant, themed Bollywood events.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center bg-[#FFE0F7] rounded-3xl p-8 shadow-lg hover:scale-105 transition-transform duration-200 border-2 border-secondary rotate-[1deg]"
              whileHover={{ scale: 1.07, rotate: 2 }}
            >
              <Mic2 className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold accent-primary mb-2">
                Qawwali Nights
              </h3>
              <p className="text-gray-700 text-center">
                Soulful Qawwali and Sufi nights featuring live performances and
                immersive cultural experiences.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center bg-[#E8F5E9] rounded-3xl p-8 shadow-lg hover:scale-105 transition-transform duration-200 border-2 border-secondary rotate-[-1.5deg]"
              whileHover={{ scale: 1.07, rotate: -0.5 }}
            >
              <PartyPopper className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold accent-primary mb-2">
                Festivals & Melas
              </h3>
              <p className="text-gray-700 text-center">
                Grand celebrations of cultural festivals and community melas,
                full of music, dance, food, and fun for all ages.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Upcoming Events Section */}
      <motion.section
        className="py-16 bg-secondary"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 2px, transparent 2px, transparent 10px)",
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl accent-primary text-center mb-12"
            variants={sectionVariants}
          >
            <span className="text-primary">Our</span> Events Coming Up
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {upcomingEvents.map((event) => (
              <motion.div key={event.id} variants={cardVariants}>
                <Card className="overflow-hidden shadow-lg py-0 hover:shadow-xl transition-shadow duration-300 h-full flex flex-col bg-white border-primary">
                  <CardHeader className="p-0">
                    <div className="relative w-full h-full min-h-[550px]">
                      <Image
                        src={event.imageUrl}
                        alt={event.title}
                        fill
                        className="object-cover w-full h-full"
                        sizes="(min-width: 1024px) 500px, 100vw"
                        priority
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
                    <CardDescription className="text-primary mb-4">
                      <span className="font-medium">Date:</span> {event.date}
                    </CardDescription>
                    <p className="text-gray-700 text-sm mb-4 flex-grow">
                      {event.description}
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground mt-auto"
                    >
                      <Link href={event.link}>View Details</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.5 }}
          >
            <Button
              size="lg"
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Link href="/events">See More Events →</Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* About Us Snippet Section - Updated */}
      <motion.section
        className="py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Adjusted amount due to potentially taller section
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          {/* Part 1: General Intro with Image */}
          <div className="flex flex-col md:flex-row items-center gap-10 mb-12 md:mb-16">
            <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
              <Image
                src="/photo-about.jpg"
                alt="A vibrant BollyGroove event mela"
                width={700}
                height={475}
                className="shadow-lg w-full max-w-md h-auto object-cover rounded-lg [clip-path:polygon(0_0,calc(100%-50px)_0,100%_50px,100%_100%,50px_100%,0_calc(100%-50px))]"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-4xl font-bold text-primary mb-6">
                About BollyGroove
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                BollyGroove specialises in creating fun-fuelled, colourful
                Bollywood parties and events. We bring the vibrant energy,
                dazzling colors, and infectious rhythms of Bollywood to life,
                ensuring every occasion is unique and unforgettable.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                No event is too big or small for us—let us help you dance your
                desi way out!
              </p>
            </div>
          </div>

          {/* Part 2: Explaining Further About Events */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            <div className="w-full md:w-1/2 text-left">
              <h3 className="text-3xl font-bold text-primary mb-4">
                Crafting Unforgettable Experiences
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                We create vibrant Bollywood events—club nights, boat parties,
                festivals, and private celebrations—filled with music, colour,
                and unforgettable energy.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-base text-gray-700 dark:text-gray-300 mb-6">
                <li>Club Nights & Boat Parties</li>
                <li>Festivals & Melas</li>
                <li>Qawwali, Sufi & Seasonal Events</li>
                <li>Private & Corporate Parties</li>
              </ul>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-primary text-primary hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src="https://fatsoma.imgix.net/W1siZiIsInB1YmxpYy8yMDI1LzUvMTMvNy80Ny8xNC82MTIvSU1HXzAxNTIuanBlZyJdXQ?w=768&h=432&fit=fillmax&fill=blur&auto=format%2Ccompress"
                alt="BollyGroove Event Atmosphere"
                width={700}
                height={475}
                className="shadow-lg w-full max-w-md h-auto object-cover rounded-lg [clip-path:polygon(0_0,calc(100%-50px)_0,100%_50px,100%_100%,50px_100%,0_calc(100%-50px))]"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Gallery Section */}
      <motion.section
        className="py-20 bg-gradient-to-br from-primary/10 via-secondary/20 to-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Gallery</h2>
          <p className="text-xl md:text-2xl text-primary font-semibold text-center mb-10">
            A glimpse into our vibrant events and unforgettable moments.
          </p>
          {/* Responsive horizontal scroll on mobile, masonry grid on desktop */}
          <div className="flex md:grid md:grid-cols-5 gap-6 md:gap-8 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x md:snap-none">
            {[
              "/photo-1.jpg",
              "/photo-2.jpg",
              "/photo-3.jpg",
              "/photo-4.jpg",
              "/photo-5.jpg",
            ].map((src, i) => (
              <motion.div
                key={src}
                whileHover={{ scale: 1.08, rotate: i % 2 === 0 ? 2 : -2 }}
                className={`min-w-[70vw] md:min-w-0 md:w-full h-56 md:h-72 overflow-hidden rounded-[2.5rem] border-4 border-secondary shadow-xl bg-white snap-center transition-all duration-300 ${
                  i % 2 === 0 ? "md:mt-0" : "md:mt-8"
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <img
                  src={src}
                  alt={`BollyGroove event ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
          {/* Centered Instagram Button */}
          <div className="flex justify-center items-center mt-8">
            <a
              href="https://www.instagram.com/bolly_groove01"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 text-white font-bold text-lg shadow-lg hover:scale-105 hover:from-pink-600 hover:to-yellow-500 transition-all duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <rect
                  width="20"
                  height="20"
                  x="2"
                  y="2"
                  rx="6"
                  fill="url(#ig-gradient)"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="5"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                />
                <circle cx="17" cy="7" r="1.5" fill="white" />
                <defs>
                  <linearGradient
                    id="ig-gradient"
                    x1="2"
                    y1="2"
                    x2="22"
                    y2="22"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#f58529" />
                    <stop offset="0.5" stopColor="#dd2a7b" />
                    <stop offset="1" stopColor="#fdcB52" />
                  </linearGradient>
                </defs>
              </svg>
              Follow us on Instagram
            </a>
          </div>
        </div>
      </motion.section>

      {/* Testimonial Section */}
      <motion.section
        className="py-16 bg-secondary/60"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4 flex flex-col items-center">
          <motion.h2
            className="text-4xl accent-primary text-center mb-10 font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            What Our Guests Say
          </motion.h2>
          <TestimonialCarousel />
        </div>
      </motion.section>
    </>
  );
}

// Testimonial Carousel Component
function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearTimeout(timer);
  }, [index]);

  const goTo = (i) => setIndex((i + testimonials.length) % testimonials.length);

  return (
    <div className="flex items-center w-full justify-center">
      <button
        aria-label="Previous testimonial"
        onClick={() => goTo(index - 1)}
        className="p-2 rounded-full border border-primary text-primary bg-white hover:bg-primary hover:text-primary-foreground transition-all duration-200 mr-4"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <motion.div
        key={index}
        className="max-w-2xl bg-white rounded-xl shadow-lg p-8 text-center border border-primary"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xl italic text-gray-800 mb-6">
          &quot;{testimonials[index].quote}&quot;
        </p>
        <div className="flex flex-col items-center">
          <span className="font-bold accent-primary text-lg">
            {testimonials[index].name}
          </span>
          <span className="text-sm text-primary mt-1">
            {testimonials[index].event}
          </span>
        </div>
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full border-2 border-primary transition-all duration-200 ${
                i === index ? "bg-primary" : "bg-secondary"
              }`}
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </motion.div>
      <button
        aria-label="Next testimonial"
        onClick={() => goTo(index + 1)}
        className="p-2 rounded-full border border-primary text-primary bg-white hover:bg-primary hover:text-primary-foreground transition-all duration-200 ml-4"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
