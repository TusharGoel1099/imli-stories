import { Link } from "@tanstack/react-router";
import { formatINR, type Product } from "@/lib/products";

export function ProductCard({ product, tone = "light" }: { product: Product; tone?: "light" | "onPrimary" }) {
  const text = tone === "onPrimary" ? "text-primary-foreground" : "text-foreground";
  const sub = tone === "onPrimary" ? "text-primary-foreground/80" : "text-muted-foreground";

  return (
    <Link
      to="/product/$slug"
      params={{ slug: product.slug }}
      className="group block"
    >
      <div className="overflow-hidden rounded-2xl bg-card">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={900}
          height={1100}
          className="aspect-[9/11] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className={`mt-3 text-sm leading-snug font-semibold ${text}`}>{product.name}</h3>
      <p className={`mt-1 flex items-center gap-2 text-sm ${sub}`}>
        <span className="font-semibold">{formatINR(product.price)}</span>
        {product.compareAt && <span className="line-through opacity-70">{formatINR(product.compareAt)}</span>}
      </p>
    </Link>
  );
}
