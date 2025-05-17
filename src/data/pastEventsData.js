function parseDate(dateStr) {
  // Expects DD/MM/YYYY
  const [day, month, year] = dateStr.split("/").map(Number);
  return new Date(year, month - 1, day);
}

export const pastEventsData = [
  {
    id: 219,
    title: `Balam Pichkari Pre-Holi 2024 Bollywood Boat Party`,
    venue: `London Thames Boat (see Eventbrite for details)`,
    date: `02/03/2024`,
    imageUrl: `https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F704885029%2F1818146595273%2F1%2Foriginal.20240225-204959?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C150%2C1586%2C793&s=4abb7ae3a631cc5bc7d5952d4aef2028`,
    description: `A colourful Bollywood boat party on the Thames to kick off Holi 2024 celebrations with music and dance.`,
  },
  {
    id: 218,
    title: `Pre Christmas Bollywood Boat Party 2023`,
    venue: `London Thames Boat (see Eventbrite for details)`,
    date: `16/12/2023`,
    imageUrl: `https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F647159899%2F1818146595273%2F1%2Foriginal.20231123-115527?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C275%2C1414%2C707&s=a2c1af6947f113505174287302a40aec`,
    description: `A festive Bollywood boat party on the Thames to celebrate the Christmas season in 2023.`,
  },
  {
    id: 217,
    title: `Diwali Bollywood Boat Party 2023`,
    venue: `London Thames Boat (see Eventbrite for details)`,
    date: `11/11/2023`,
    imageUrl: `https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F629098529%2F1818146595273%2F1%2Foriginal.20231026-142354?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C509%2C1200%2C600&s=7cc923d02c50efb84a3c37797fc55f87`,
    description: `A sparkling Bollywood boat party on the Thames to celebrate Diwali 2023 with music and dance.`,
  },
  {
    id: 216,
    title: `Pre Diwali Bollywood Boat Party 2023`,
    venue: `London Thames Boat (see Eventbrite for details)`,
    date: `28/10/2023`,
    imageUrl: `https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F614210119%2F1818146595273%2F1%2Foriginal.20231005-191959?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C162%2C3916%2C1958&s=2977e0d83968cc8feb705d8416370061`,
    description: `A festive Bollywood boat party on the Thames to celebrate the spirit of Diwali in 2023.`,
  },
  {
    id: 214,
    title: `Republic Day Bollywood Boat Party 2024`,
    venue: `London Thames Boat (see Eventbrite for details)`,
    date: `26/01/2024`,
    imageUrl: `https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F674832359%2F1818146595273%2F1%2Foriginal.20240115-161139?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C77%2C906%2C453&s=f17d7f01a4c6c18b2ef4ee1fad288f86`,
    description: `A lively Bollywood boat party on the Thames to celebrate Republic Day 2024 in style.`,
  },
  {
    id: 213,
    title: `2024 New Years Eve Bollywood Party`,
    venue: `London (see Eventbrite for details)`,
    date: `31/12/2024`,
    imageUrl: `https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F663673049%2F1818146595273%2F1%2Foriginal.20231227-143757?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C13%2C1130%2C565&s=9008c26ab41b9cfa0a2109df7273fb6b`,
    description: `A spectacular Bollywood party to welcome the new year 2025 in style.`,
  },
  {
    id: 212,
    title: `Hounslow Mela 2024 – Londons Biggest South Asian Outdoor Music Festival`,
    venue: `Cranford Community College, Hounslow`,
    date: `15/06/2024`, // Plausible date for summer mela
    imageUrl: `https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F742169339%2F1818146595273%2F1%2Foriginal.20240412-145142?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C1600%2C800&s=36ad8ea55181c98baf53acc217bb1214`,
    description: `A vibrant outdoor festival celebrating South Asian music and culture in Hounslow.`,
  },
  {
    id: 211,
    title: `Valentines Day Bollywood Boat Party 2024`,
    venue: `London Thames Boat (see Eventbrite for details)`,
    date: `14/02/2024`, // Actual Valentine's Day 2024
    imageUrl: `https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F673899029%2F1818146595273%2F1%2Foriginal.20240113-164024?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C1586%2C793&s=311d3ff7d456e9fb5bd37bff05d3403e`,
    description: `A romantic Bollywood boat party on the Thames for Valentines Day 2024.`,
  },
  {
    id: 210,
    title: `Bollywood Folk Pop Fusion Maham Suhail and Anurag Kumar Live in Concert`,
    venue: `London Concert Venue`,
    date: `05/07/2024`, // Plausible event date
    imageUrl: `https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F802171879%2F1818146595273%2F1%2Foriginal.20240705-112908?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C1130%2C565&s=d9e1bb1b5784aa2d15cf08856783d2cc`,
    description: `A unique evening of Bollywood folk and pop fusion with Maham Suhail and Anurag Kumar live in concert.`,
  },
  {
    id: 209,
    title: `Bollywood London Sunset Summer Boat Party 2024`,
    venue: `London Thames Boat`,
    date: `20/07/2024`, // Plausible event date
    imageUrl: `https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F811113469%2F1818146595273%2F1%2Foriginal.20240719-203002?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C10%2C904%2C452&s=2f2d964f75b0d58d6f1e4d44c1dcae39`,
    description: `Experience a magical summer evening on the Thames with Bollywood music, dancing, and stunning views.`,
  },
  {
    id: 208,
    title: "Desi Saturday Bollywood vs Bhangra Night",
    venue: "(Venue details as per original event)",
    date: "10/02/2024", // Plausible event date
    imageUrl:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F690511729%2F1818146595273%2F1%2Foriginal.20240205-212245?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C157%2C1080%2C540&s=58c96dae2f74255ca85731dc40a54c0d",
    description:
      "Desi Saturday Bollywood vs Bhangra Night. A high-energy night of music and dance.",
  },
  {
    id: 207,
    title:
      "Ghazal Night with Shad Ghulam Ali & Gulfam Sabri Live in Concert in Feltham",
    venue: "Feltham (Venue details as per original event)",
    date: "06/08/2024", // Plausible event date from image timestamp
    imageUrl:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F821898069%2F1818146595273%2F1%2Foriginal.20240806-223202?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C283%2C904%2C452&s=4b5c43c7a178704c18131e428feac78c",
    description:
      "A soulful Ghazal night with Shad Ghulam Ali & Gulfam Sabri live in concert.",
  },
  {
    id: 206,
    title:
      "Qawwali Night with Parminder Singh Lakhanpal & Satwinder Singh in Concert",
    venue: "(Venue details as per original event)",
    date: "24/08/2024", // Plausible event date from image timestamp
    imageUrl:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F833648589%2F1818146595273%2F1%2Foriginal.20240824-194204?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C344%2C1414%2C707&s=3520e407a0f87bf50159923bafda5780",
    description:
      "A soulful Qawwali night with Parminder Singh Lakhanpal & Satwinder Singh in concert.",
  },
  {
    id: 205,
    title:
      "LONDON'S BIGGEST EVER & MOST LUXURY DIWALI BOLLYWOOD BOAT PARTY 2024",
    venue: "Luxury Thames Boat, London (see Eventbrite for details)",
    date: "19/10/2024", // Plausible Diwali 2024 date
    imageUrl:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F874189019%2F1818146595273%2F1%2Foriginal.20241014-180542?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=5a3497cab5f30aac93bedeb61141372a",
    description:
      "London's most luxurious Diwali Bollywood Boat Party 2024. A night of music, dance, and celebration on the Thames.",
  },
  {
    id: 204,
    title: "BALAM PICHKARI PRE-HOLI 2025 BOLLYWOOD BOAT PARTY",
    venue: "(Venue details as per original event)",
    date: "22/02/2025", // Example past date in 2025
    imageUrl:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F959531633%2F1818146595273%2F1%2Foriginal.20250212-231641?crop=focalpoint&fit=crop&w=940&auto=format%2Ccompress&q=75&sharp=10&fp-x=4.92424242424e-05&fp-y=4.48443579767e-05&s=49ca250b564713a81f19b8dbb71ac28d",
    description:
      "A Bollywood boat party to kick off the Holi 2025 celebrations. Sales for this event have ended.",
  },
  {
    id: 203,
    title: "BALAM PICHKARI HOLI 2025 | RANG BARSE IN FELTHAM OUTDOOR FEST",
    venue: "Feltham (Venue details as per original event)",
    date: "02/03/2025", // Example past date in 2025
    imageUrl:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F963375473%2F1818146595273%2F1%2Foriginal.20250218-155037?crop=focalpoint&fit=crop&w=940&auto=format%2Ccompress&q=75&sharp=10&fp-x=4.96212121212e-05&fp-y=8.65448504983e-05&s=4f6cfb73a7efd34f0dfbc3fc1ad59722",
    description:
      "A vibrant outdoor Holi festival in Feltham, featuring music, colors, and celebration. Sales for this event have ended.",
  },
  {
    id: 202,
    title:
      "DESI BOLLYWOOD VS BHANGRA VS TOLLYWOOD NIGHT - EVERY FRIDAY IN HOUNSLOW",
    venue: "Hounslow (Venue details as per original event)",
    date: "05/04/2025", // Example past date in 2025
    imageUrl:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1006063663%2F1818146595273%2F1%2Foriginal.20250410-174810?crop=focalpoint&fit=crop&w=940&auto=format%2Ccompress&q=75&sharp=10&fp-x=0.0049053030303&fp-y=0.00214980544747&s=eaca753eca7e950c9f564b6cd0e5e8b8",
    description:
      "A weekly Friday night celebration of Desi Bollywood, Bhangra, and Tollywood music in Hounslow. This event is now cancelled.",
  },
  {
    id: 201,
    title: "MERE PIYA GHAR TOUR - LIVERPOOL'S BIGGEST EVER QAWWALI NIGHT 2025",
    venue: "Liverpool (Venue details as per original event)",
    date: "10/02/2025", // Example past date in 2025
    imageUrl:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1012446293%2F1818146595273%2F1%2Foriginal.20250419-113741?h=230&w=460&auto=format%2Ccompress&q=75&sharp=10&s=0cb35ea5c408ca60bc68771a51149c69",
    description:
      "An unforgettable evening celebrating the soulful tradition of Qawwali in Liverpool. Sales for this event have ended.",
  },
].sort((a, b) => parseDate(b.date) - parseDate(a.date));
 