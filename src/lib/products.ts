import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";
import p7 from "@/assets/p7.jpg";

export type Category = "girls" | "boys" | "co-ords" | "festive" | "mom-me";

export type Product = {
  slug: string;
  name: string;
  price: number;
  compareAt?: number;
  image: string;
  category: Category;
  bestseller?: boolean;
  description: string;
  details: string[];
  sizes: string[];
};

export const categories: { slug: Category; label: string; image: string }[] = [
  { slug: "girls", label: "Girls", image: p2 },
  { slug: "boys", label: "Boys", image: p6 },
  { slug: "co-ords", label: "Co-ords", image: p4 },
  { slug: "festive", label: "Festive", image: p7 },
];

const baseDetails = [
  "100% breathable soft cotton",
  "Hand-finished detailing",
  "Gentle machine wash, cold",
  "Made in India",
];

export const products: Product[] = [
  {
    slug: "striped-racerback-cotton-dress",
    name: "Girls Racerback Cotton Dress - Green Stripes",
    price: 1499,
    compareAt: 1799,
    image: p1,
    category: "girls",
    bestseller: true,
    description:
      "A breezy racerback dress in soft green stripes with delicate lace at the yoke. Light enough for summer play, pretty enough for a birthday party.",
    details: baseDetails,
    sizes: ["1-2Y", "2-3Y", "3-4Y", "4-5Y", "5-6Y"],
  },
  {
    slug: "meadow-floral-button-dress",
    name: "Girls Cotton Button-Down Dress - Meadow Floral",
    price: 1599,
    image: p2,
    category: "girls",
    bestseller: true,
    description:
      "A tiered floral dress with wooden buttons and scalloped edges, cut in a soft mint cotton that only gets softer with every wash.",
    details: baseDetails,
    sizes: ["1-2Y", "2-3Y", "3-4Y", "4-5Y"],
  },
  {
    slug: "leaf-print-boys-kurta-set",
    name: "Boys Cotton Kurta Set - Leaf Print",
    price: 2199,
    image: p3,
    category: "festive",
    bestseller: true,
    description:
      "Hand block leaf print kurta with a crisp white pyjama. Festive-ready, but comfy enough that he will not want to change out of it.",
    details: baseDetails,
    sizes: ["1-2Y", "2-3Y", "3-4Y", "4-5Y", "5-6Y"],
  },
  {
    slug: "polka-co-ord-set",
    name: "Girls Cotton Co-ord Set - Sage Polka",
    price: 1899,
    compareAt: 2199,
    image: p4,
    category: "co-ords",
    bestseller: true,
    description:
      "A smocked top and wide-leg pants in sage polka cotton. Two pieces that work together, and just as happily apart.",
    details: baseDetails,
    sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y"],
  },
  {
    slug: "mom-and-me-floral-set",
    name: "Mom & Me Matching Floral Cotton Set",
    price: 3499,
    image: p5,
    category: "mom-me",
    description:
      "Twinning done gently - a flowing floral kurta for mum and a flutter-sleeve dress for her little one, in the same soft green print.",
    details: baseDetails,
    sizes: ["Kid 1-2Y + S", "Kid 2-3Y + M", "Kid 3-4Y + L", "Kid 4-5Y + XL"],
  },
  {
    slug: "checked-shirt-shorts-set",
    name: "Boys Checked Shirt & Shorts Set",
    price: 1399,
    image: p6,
    category: "boys",
    bestseller: true,
    description:
      "A soft green checked shirt with easy white shorts. The everyday set for school fairs, family lunches and park afternoons.",
    details: baseDetails,
    sizes: ["1-2Y", "2-3Y", "3-4Y", "4-5Y", "5-6Y"],
  },
  {
    slug: "pistachio-anarkali-set",
    name: "Girls Festive Anarkali Set - Pistachio",
    price: 2699,
    image: p7,
    category: "festive",
    description:
      "An embroidered pistachio anarkali with matching pants. Made for pujas, weddings and every twirl in between.",
    details: baseDetails,
    sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y", "6-7Y"],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const formatINR = (n: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);
