import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Ritu Fashion Store, Gurgaon" },
      {
        name: "description",
        content:
          "Ritu Fashion Store is a family-run kidswear label in Sadar Bazaar, Gurgaon, making soft cotton clothing for children.",
      },
      { property: "og:title", content: "About Ritu Fashion Store" },
      { property: "og:description", content: "A family-run kidswear label in Sadar Bazaar, Gurgaon." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <img
        src={hero}
        alt="Children in matching cotton outfits"
        width={1600}
        height={1008}
        className="h-[38vh] min-h-[240px] w-full object-cover"
      />

      <div className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="font-display text-4xl font-extrabold">Our story</h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Ritu Fashion Store began as a small counter in Sadar Bazaar, Gurgaon, with one simple idea: children's
          clothes should feel as good as they look. Today we still choose every fabric by hand, favouring soft cotton
          that survives playgrounds, birthday cake and a hundred washes.
        </p>
        <p className="mt-4 text-lg text-muted-foreground">
          Every piece is cut for real movement — deep armholes, gentle elastic, no scratchy tags. Our prints are
          drawn to be a little playful, so festive dressing never feels like a chore for a four-year-old.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            { t: "Fabric first", d: "Breathable cottons picked for Indian summers and sensitive skin." },
            { t: "Made nearby", d: "Stitched by a small team of tailors we have worked with for years." },
            { t: "Fair prices", d: "Direct from our store to your door, without the middle mark-up." },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl bg-secondary p-6">
              <h2 className="font-display text-lg font-bold">{c.t}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border p-6">
          <h2 className="font-display text-xl font-bold">Come say hello</h2>
          <p className="mt-2 text-muted-foreground">
            157/13, Sadar Bazar Rd, Roshan Pura, Gurugram, Haryana 122007 · Open Monday to Sunday, 10am to 9pm.
          </p>
          <Link
            to="/contact"
            className="mt-5 inline-block rounded-full bg-primary px-7 py-3 text-sm font-bold text-primary-foreground"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}
