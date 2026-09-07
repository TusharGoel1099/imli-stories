import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { useCart } from "@/lib/cart";
import { formatINR, getProduct, products } from "@/lib/products";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Product not found | Ritu Fashion Store" }, { name: "robots", content: "noindex" }] };
    }
    const { product } = loaderData;
    return {
      meta: [
        { title: `${product.name} | Ritu Fashion Store` },
        { name: "description", content: product.description },
        { property: "og:title", content: `${product.name} | Ritu Fashion Store` },
        { property: "og:description", content: product.description },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { add } = useCart();
  const [size, setSize] = useState(product.sizes[0]!);
  const [added, setAdded] = useState(false);

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 4);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid gap-10 md:grid-cols-2">
        <img
          src={product.image}
          alt={product.name}
          width={900}
          height={1100}
          className="w-full rounded-3xl object-cover"
        />

        <div>
          <h1 className="font-display text-3xl leading-tight font-extrabold sm:text-4xl">{product.name}</h1>
          <p className="mt-3 flex items-center gap-3 text-xl">
            <span className="font-bold">{formatINR(product.price)}</span>
            {product.compareAt && (
              <span className="text-base text-muted-foreground line-through">{formatINR(product.compareAt)}</span>
            )}
          </p>
          <p className="mt-5 text-muted-foreground">{product.description}</p>

          <div className="mt-7">
            <p className="text-sm font-bold tracking-wide uppercase">Size</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSize(s)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold ${
                    size === s
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border hover:bg-accent"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => {
                add(product.slug, size);
                setAdded(true);
                setTimeout(() => setAdded(false), 1800);
              }}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
            >
              {added ? <Check className="h-4 w-4" /> : <ShoppingBag className="h-4 w-4" />}
              {added ? "Added to cart" : "Add to cart"}
            </button>
            <Link
              to="/cart"
              className="inline-flex items-center rounded-full border border-border px-8 py-3.5 text-sm font-bold hover:bg-accent"
            >
              View cart
            </Link>
          </div>

          <ul className="mt-9 space-y-2 border-t border-border pt-6 text-sm text-muted-foreground">
            {product.details.map((d) => (
              <li key={d} className="flex gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section className="mt-20">
        <h2 className="font-display text-2xl font-extrabold">You may also like</h2>
        <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {related.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
