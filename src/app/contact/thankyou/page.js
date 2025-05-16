"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.2,
    },
  },
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-secondary px-4 py-20">
      <motion.div
        className="bg-white rounded-xl shadow-xl p-10 max-w-lg w-full text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-4xl font-bold accent-primary mb-4"
          variants={contentVariants}
        >
          Thank You
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700 mb-8"
          variants={contentVariants}
        >
          Your message has been received. We appreciate your interest in
          BollyGroove and will get back to you as soon as possible.
        </motion.p>
        <motion.div variants={contentVariants}>
          <Link
            href="/"
            className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded font-bold hover:bg-secondary hover:text-primary transition-all duration-200"
          >
            Back to Home
          </Link>
          <Link
            href="/events"
            className="inline-block ml-4 border border-primary text-primary px-6 py-3 rounded font-bold hover:bg-primary hover:text-primary-foreground transition-all duration-200"
          >
            View Events
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
