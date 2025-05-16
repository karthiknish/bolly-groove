# BollyGroove

A modern, vibrant Bollywood events website built with Next.js, Tailwind CSS, shadcn/ui, and Framer Motion.

## Features

- **Brand Colors:** Uses #A301F8 (primary) and #FEE89F (secondary) throughout, with lively hover and scale animations on all links and buttons.
- **Modern Fonts:** Poppins for headings, Inter for body text.
- **Animated UI:** Framer Motion powers smooth, energetic animations on all main pages.
- **Responsive Design:** Fully mobile-friendly and accessible.
- **Events & Past Events:** View upcoming and past events, with vibrant cards and images.
- **About Page:** Redesigned with bold images, motion, and a Bollywood party vibe.
- **Contact Page:** Contact form (Contentful-powered), animated social icons, and details.
- **Social Links:** Instagram and Facebook icons in footer and contact page.
- **No Blog:** The Blog page and navigation link have been removed.
- **Admin Page:** `/admin` route for viewing submitted contact form entries (see below).

## Admin Page

- **URL:** `/admin`
- **Login:**
  - Username: `admin`
  - Password: `Admin1!`
- **Function:** View all contact form submissions (requires Contentful setup).

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
3. **Environment Variables:**
   - Set up Contentful environment variables in `.env.local` for contact form and admin page.

## Customization
- **Colors:** Edit `tailwind.config.js` and `globals.css` for brand color changes.
- **Fonts:** Google Fonts CDN in `layout.js`.
- **Events Data:** Update `src/data/pastEventsData.js` for past events.

## Credits
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

---

For any issues or feature requests, please open an issue or contact the maintainer.
