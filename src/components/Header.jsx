"use client"; // Add this for useState and Framer Motion

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion"; // Import motion and AnimatePresence
import Image from "next/image";

// Define menu item variants for animation
const menuItemVariants = {
  closed: {
    opacity: 0,
    y: -10,
  },
  open: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.2, duration: 0.3 },
  },
};

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { href: "/events", label: "Our Events" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="BollyGroove Logo"
              width={120}
              height={40}
              style={{ maxHeight: 100, width: "auto" }}
              priority
            />
          </Link>
        </div>
        <nav className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="accent-primary hover:text-secondary/80 hover:scale-110 font-heading transition-all duration-200 text-lg"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 z-40"
          >
            <nav className="flex flex-col items-center py-4 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  custom={index}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={menuItemVariants} // Use defined variants
                >
                  <Link
                    href={link.href}
                    className="block py-2 px-4 text-gray-700 hover:text-primary hover:bg-primary/10 transition-colors w-full text-center"
                    onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
