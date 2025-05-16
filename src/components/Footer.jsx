import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold accent-primary mb-4 font-heading">
            BollyGroove
          </h3>
          <p className="text-sm">
            Delivering joy in the form of Bollywood parties. Our service offers
            a range of services, including entertainment, decor, catering and
            more. Creative, reliable, and utterly professional.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold accent-primary mb-4 font-heading">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/events"
                className="text-secondary hover:text-secondary/80 hover:scale-110 transition-all duration-200 font-heading"
              >
                Our Events
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-secondary hover:text-secondary/80 hover:scale-110 transition-all duration-200 font-heading"
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="text-secondary hover:text-secondary/80 hover:scale-110 transition-all duration-200 font-heading"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="text-secondary hover:text-secondary/80 hover:scale-110 transition-all duration-200 font-heading"
              >
                Privacy & Cookies
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold accent-primary mb-4 font-heading">
            Contact Us
          </h3>
          <p className="text-sm">Feltham, Middlesex</p>
          <p className="text-sm">
            <a
              href="tel:07811186139"
              className="text-secondary hover:text-secondary/80 hover:scale-110 transition-all duration-200 font-heading"
            >
              07811 186 139
            </a>
          </p>
          <p className="text-sm">
            <a
              href="mailto:bollygroove.events.productions@gmail.com"
              className="text-secondary hover:text-secondary/80 hover:scale-110 transition-all duration-200 font-heading"
            >
              bollygroove.events.productions@gmail.com
            </a>
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.facebook.com/bollygrooveevents"
              aria-label="Facebook"
              className="text-secondary hover:text-secondary/80 hover:scale-110 transition-all duration-200 font-heading"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/bolly_groove01/?hl=en-gb"
              aria-label="Instagram"
              className="text-secondary hover:text-secondary/80 hover:scale-110 transition-all duration-200 font-heading"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 pt-8 border-t border-primary/30">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} BollyGroove. All rights reserved.
        </p>
        <p className="text-xs mt-1">Designed with WordPress (Inspired by)</p>
      </div>
    </footer>
  );
}
