import { createFileRoute, Link } from "@tanstack/react-router";
import { ProductCard } from "@/components/ProductCard";
import { products, type Category } from "@/lib/products";

type Search = { category?: Category | "all" };

const filters: { value: Category | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "girls", label: "Girls" },
  { value: "boys", label: "Boys" },
  { value: "co-ords", label: "Co-ords" },
  { value: "festive", label: "Festive" },
  { value: "mom-me", label: "Mom & Me" },
];

export const Route = createFileRoute("/shop")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    category: (search["category"] as Search["category"]) ?? "all",
  }),
  head: () => ({
    meta: [
      { title: "Shop Kids Clothing | Ritu Fashion Store" },
      {
        name: "description",
        content:
          "Browse cotton dresses, co-ord sets, boys kurta sets and festive wear for kids at Ritu Fashion Store.",
      },
      { property: "og:title", content: "Shop Kids Clothing | Ritu Fashion Store" },
      { property: "og:description", content: "Cotton dresses, co-ords and festive sets for kids." },
    ],
  }),
  component: Shop,
});

function Shop() {
  const { category = "all" } = Route.useSearch();
  const list = category === "all" ? products : products.filter((p) => p.category === category);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-4xl font-extrabold">Shop</h1>
      <p className="mt-2 text-muted-foreground">Everyday cotton and festive favourites for ages 1 to 7.</p>

      <div className="mt-7 flex flex-wrap gap-2">
        {filters.map((f) => (
          <Link
            key={f.value}
            to="/shop"
            search={{ category: f.value }}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
              category === f.value
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border text-foreground hover:bg-accent"
            }`}
          >
            {f.label}
          </Link>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
        {list.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>

      {list.length === 0 && (
        <p className="mt-16 text-center text-muted-foreground">Nothing here yet — new styles land every week.</p>
      )}
    </div>
  );
}
