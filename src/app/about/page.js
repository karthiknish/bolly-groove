"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Music, Briefcase, Gift, Ship, Sun, Users, Star } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function AboutPage() {
  return (
    <>
      <head>
        <title>About BollyGroove</title>
        <meta
          name="description"
          content="Learn more about BollyGroove and our mission to spread Bollywood joy."
        />
      </head>
      <div className="min-h-screen bg-secondary">
        {/* Hero Section with vibrant image and overlay */}
        <motion.section
          className="relative h-[350px] md:h-[450px] flex items-center justify-center bg-primary"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <Image
            src="https://cdn2.fatsoma.com/media/W1siZiIsInB1YmxpYy8yMDIzLzEvMy8xLzM3LzMvNTgvOTZFRDNBNUQtRjI1QS00M0U3LTk0QkEtQkZGQzJBMzYzNUJFLmpwZWciXV0"
            alt="BollyGroove Holi Party"
            layout="fill"
            objectFit="cover"
            className="opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/60" />
          <div className="relative z-10 text-center">
            <motion.h1
              className="text-5xl md:text-6xl accent-primary font-bold drop-shadow-lg mb-4"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              About BollyGroove
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl accent-secondary font-semibold drop-shadow-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Spreading Bollywood joy, one party at a time!
            </motion.p>
          </div>
        </motion.section>

        {/* Main Content Section with image and text */}
        <motion.section
          className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          {/* Left: Image */}
          <motion.div
            className="w-full h-72 md:h-[400px] relative rounded-xl overflow-hidden shadow-lg"
            variants={fadeInUp}
          >
            <Image
              src="https://static.designmynight.com/uploads/2024/01/London-Ki-Holi-2024-1.png"
              alt="London Ki Holi Event"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
              priority={false}
            />
          </motion.div>
          {/* Right: About Content */}
          <motion.div
            className="space-y-6 text-lg text-gray-800"
            variants={fadeInUp}
          >
            <p>
              Welcome to{" "}
              <span className="accent-primary font-bold">BollyGroove</span>,
              your ultimate destination for unforgettable Bollywood experiences!
              We are passionate about bringing the vibrant energy, dazzling
              colors, and infectious rhythms of Bollywood to life through
              meticulously planned events.
            </p>
            <p>
              Founded with a love for Indian cinema and music, BollyGroove
              specialises in creating fun-fuelled, colourful Bollywood parties
              and events for all occasions. Whether it's a high-energy club
              night, a themed corporate event, a unique boat party, or a festive
              seasonal celebration, we pour our hearts into making every event
              special.
            </p>
            <h2 className="text-2xl accent-primary font-bold pt-4">
              Our Mission
            </h2>
            <p>
              Our mission is simple: to spread joy and create lasting memories
              through the magic of Bollywood. We believe in the power of music
              and dance to connect people, and we strive to create inclusive,
              welcoming environments where everyone can let loose and dance
              their desi way out!
            </p>
            <h2 className="text-2xl accent-primary font-bold pt-4">
              What We Do
            </h2>
            <ul className="list-none space-y-3 pl-0">
              <li className="flex items-center gap-3">
                <Music className="w-6 h-6 text-primary" />
                Themed Bollywood Club Nights
              </li>
              <li className="flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-primary" />
                Corporate Event Planning & Entertainment
              </li>
              <li className="flex items-center gap-3">
                <Gift className="w-6 h-6 text-primary" />
                Private Parties (Birthdays, Anniversaries)
              </li>
              <li className="flex items-center gap-3">
                <Ship className="w-6 h-6 text-primary" />
                Bollywood Boat Parties
              </li>
              <li className="flex items-center gap-3">
                <Sun className="w-6 h-6 text-primary" />
                Seasonal Events (Holi, Diwali, New Year's)
              </li>
              <li className="flex items-center gap-3">
                <Users className="w-6 h-6 text-primary" />
                DJ Services & Dance Performers
              </li>
              <li className="flex items-center gap-3">
                <Star className="w-6 h-6 text-primary" />
                Unique Experiences & Custom Themes
              </li>
            </ul>
            <p>
              At BollyGroove, we handle everything from venue selection and
              decor to entertainment and coordination, ensuring a seamless and
              stress-free experience for our clients. Our team is creative,
              reliable, and utterly professional, dedicated to exceeding your
              expectations.
            </p>
            <p>
              <span className="accent-secondary font-semibold">
                Join us at our next event and experience the BollyGroove
                difference!
              </span>
            </p>
          </motion.div>
        </motion.section>

        {/* Third Visual Section with new image */}
        <motion.section
          className="container mx-auto px-4 pb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <motion.div
            className="w-full h-64 md:h-96 relative rounded-xl overflow-hidden shadow-2xl mx-auto"
            variants={fadeInUp}
          >
            <Image
              src="https://londonboatparty.co.uk/wp-content/uploads/2020/04/make-1st-image.jpg"
              alt="Pearl of London Event"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
              priority={false}
            />
          </motion.div>
        </motion.section>

        {/* Fourth Visual Section with new image */}
        <motion.section
          className="container mx-auto px-4 pb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <motion.div
            className="w-full h-64 md:h-96 relative rounded-xl overflow-hidden shadow-2xl mx-auto"
            variants={fadeInUp}
          >
            <Image
              src="https://cdn-az.allevents.in/events4/banners/68eeecfa7dfc584bae8ef5b205f2cd948e37ba43c43176503248fea43d751f29-rimg-w1200-h678-dc171415-gmir?v=1747123708"
              alt="BollyGroove Event Banner"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
              priority={false}
            />
          </motion.div>
        </motion.section>
      </div>
    </>
  );
}
