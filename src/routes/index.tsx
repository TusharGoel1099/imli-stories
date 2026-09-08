import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, Heart, Leaf, MapPin, MessageCircle, Phone, Star, Truck } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { ProductCard } from "@/components/ProductCard";
import { categories, products } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ritu Fashion Store | Soft Cotton Kidswear in Gurgaon" },
      {
        name: "description",
        content:
          "Handpicked cotton dresses, co-ord sets and festive kurtas for kids. Shop Ritu Fashion Store, Sadar Bazaar Gurgaon, with free shipping on prepaid orders.",
      },
      { property: "og:title", content: "Ritu Fashion Store | Soft Cotton Kidswear" },
      {
        property: "og:description",
        content: "Cotton dresses, co-ords and festive sets for little ones, from Gurgaon.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const bestsellers = products.filter((p) => p.bestseller);

  return (
    <div>
      <section className="relative">
        <img
          src={hero}
          alt="Two children wearing matching green floral cotton outfits"
          width={1600}
          height={1008}
          className="h-[62vh] min-h-[380px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/40 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-4">
            <span className="inline-block rounded-full bg-primary px-4 py-1.5 text-xs font-bold tracking-widest text-primary-foreground uppercase">
              New Collection
            </span>
            <h1 className="mt-4 max-w-xl font-display text-4xl leading-tight font-extrabold text-foreground sm:text-6xl">
              Festive ready with Ritu Fashion
            </h1>
            <p className="mt-4 max-w-md text-base text-foreground/80">
              Breathable cotton, hand-finished detailing and prints little ones actually want to wear.
            </p>
            <Link
              to="/shop"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
            >
              Shop Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-secondary">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-3">
          {[
            { icon: Leaf, title: "Pure cotton", copy: "Soft, breathable fabric for sensitive skin" },
            { icon: Truck, title: "Free prepaid shipping", copy: "Dispatched within 24 hours across India" },
            { icon: Heart, title: "Loved in Gurgaon", copy: "A family-run store in Sadar Bazaar" },
          ].map(({ icon: Icon, title, copy }) => (
            <div key={title} className="flex items-start gap-3">
              <Icon className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
              <div className="min-w-0">
                <p className="font-semibold">{title}</p>
                <p className="text-sm text-muted-foreground">{copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-display text-3xl font-extrabold text-primary-foreground sm:text-4xl">Bestsellers</h2>
          <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {bestsellers.map((p) => (
              <ProductCard key={p.slug} product={p} tone="onPrimary" />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">Collections</h2>
          <div className="mt-8 grid grid-cols-2 gap-5 lg:grid-cols-4">
            {categories.map((c) => (
              <Link key={c.slug} to="/shop" search={{ category: c.slug }} className="group">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={c.image}
                    alt={c.label}
                    loading="lazy"
                    width={900}
                    height={1100}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="mt-3 flex items-center gap-2 font-display text-lg font-bold">
                  {c.label} <ArrowRight className="h-4 w-4 text-primary" />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-display text-3xl font-extrabold">Catch us on the 'Gram</h2>
          <p className="mt-3 text-muted-foreground">
            New drops, behind-the-scenes and lots of tiny outfits. Follow along @ritufashionstore.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {products.slice(0, 4).map((p) => (
              <img
                key={p.slug}
                src={p.image}
                alt={p.name}
                loading="lazy"
                width={900}
                height={1100}
                className="aspect-square w-full rounded-xl object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden py-16">
        <h2 className="px-4 text-center font-display text-3xl font-extrabold sm:text-4xl">What Our Customers Say</h2>
        <div className="mt-10 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max animate-[marquee-ltr_45s_linear_infinite] gap-6 hover:[animation-play-state:paused]">
            {[...reviews, ...reviews].map((r, i) => (
              <figure
                key={`${r.name}-${i}`}
                className="w-80 shrink-0 rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent font-display text-lg font-bold text-primary">
                    {r.name[0]}
                  </span>
                  <div className="min-w-0">
                    <figcaption className="truncate font-semibold">{r.name}</figcaption>
                    <p className="text-xs text-muted-foreground">{r.when}</p>
                  </div>
                </div>
                <div className="mt-3 flex gap-0.5" aria-label={`${r.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }, (_, s) => (
                    <Star
                      key={s}
                      className={`h-4 w-4 ${s < r.rating ? "fill-amber-400 text-amber-400" : "text-border"}`}
                    />
                  ))}
                </div>
                <blockquote className="mt-3 text-sm text-muted-foreground">"{r.text}"</blockquote>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-extrabold text-primary-foreground sm:text-4xl">
              Questions while you shop? Just reach out
            </h2>
            <p className="mt-3 text-primary-foreground/85">
              Need help with sizing, an order, or a custom festive outfit? Call or WhatsApp us any time — and if you're
              in Gurgaon, drop by our family store in Sadar Bazar and see the fabrics in person.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl bg-card p-6">
              <Phone className="h-6 w-6 text-primary" />
              <p className="mt-3 font-semibold">Call or WhatsApp</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Quick answers on products, sizes and delivery while you shop online.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="tel:+919873564717"
                  className="rounded-full border border-border px-5 py-2.5 text-sm font-bold hover:border-primary"
                >
                  +91 98735 64717
                </a>
                <a
                  href="https://wa.me/919873564717"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground"
                >
                  <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                </a>
              </div>
            </div>
            <div className="rounded-2xl bg-card p-6">
              <MapPin className="h-6 w-6 text-primary" />
              <p className="mt-3 font-semibold">Visit our store in Gurgaon</p>
              <p className="mt-1 text-sm text-muted-foreground">
                157/13, Sadar Bazar Rd, near Subzi Mandi Road, Holi Ground, Roshan Pura, Gurugram, Haryana 122007
              </p>
              <p className="mt-3 flex items-center gap-1.5 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 text-primary" /> Open Mon – Sun, 10:00 AM – 9:00 PM
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=157%2F13%20Sadar%20Bazar%20Rd%20Roshan%20Pura%20Gurugram%20Haryana%20122007"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-bold hover:border-primary"
              >
                Get directions <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const reviews = [
  {
    name: "Indresh Girohtra",
    when: "6 years ago",
    rating: 4,
    text: "Goods available is very good and staff behavior is nice with costomer.",
  },
  {
    name: "Tamanna Yadav",
    when: "6 years ago",
    rating: 5,
    text: "Best prize with best quality clothes provided. With latest collection.",
  },
  {
    name: "Anjali Gupta",
    when: "3 weeks ago",
    rating: 4,
    text: "We bought party wear for my son's birthday. The fabric is soft and the fit was perfect.",
  },
  {
    name: "Pooja Sharma",
    when: "2 months ago",
    rating: 5,
    text: "Ordered a cotton co-ord set on WhatsApp and it arrived in two days. Lovely quality for the price.",
  },
  {
    name: "Rahul Verma",
    when: "1 month ago",
    rating: 5,
    text: "A proper family store — they helped us pick matching festive outfits for both kids.",
  },
];
