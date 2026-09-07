import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/lib/cart";
import { formatINR, getProduct } from "@/lib/products";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Cart | Ritu Fashion Store" },
      { name: "description", content: "Review the kidswear in your bag and place your order with Ritu Fashion Store." },
      { property: "og:title", content: "Your Cart | Ritu Fashion Store" },
      { property: "og:description", content: "Review your bag at Ritu Fashion Store." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { lines, setQty, remove, subtotal, clear } = useCart();

  if (lines.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center">
        <h1 className="font-display text-3xl font-extrabold">Your bag is empty</h1>
        <p className="mt-3 text-muted-foreground">Little outfits are waiting to be discovered.</p>
        <Link
          to="/shop"
          className="mt-8 inline-block rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground"
        >
          Start shopping
        </Link>
      </div>
    );
  }

  const shipping = subtotal >= 1499 ? 0 : 99;

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="font-display text-4xl font-extrabold">Your bag</h1>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_320px]">
        <ul className="space-y-6">
          {lines.map((line) => {
            const p = getProduct(line.slug);
            if (!p) return null;
            return (
              <li key={`${line.slug}-${line.size}`} className="flex gap-4 border-b border-border pb-6">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  width={900}
                  height={1100}
                  className="h-28 w-24 shrink-0 rounded-xl object-cover"
                />
                <div className="min-w-0 flex-1">
                  <Link to="/product/$slug" params={{ slug: p.slug }} className="font-semibold hover:text-primary">
                    {p.name}
                  </Link>
                  <p className="mt-1 text-sm text-muted-foreground">Size {line.size}</p>
                  <p className="mt-1 text-sm font-semibold">{formatINR(p.price)}</p>

                  <div className="mt-3 flex items-center gap-3">
                    <div className="flex items-center rounded-full border border-border">
                      <button
                        type="button"
                        aria-label="Decrease quantity"
                        onClick={() => setQty(line.slug, line.size, line.qty - 1)}
                        className="grid h-9 w-9 place-items-center"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center text-sm font-semibold">{line.qty}</span>
                      <button
                        type="button"
                        aria-label="Increase quantity"
                        onClick={() => setQty(line.slug, line.size, line.qty + 1)}
                        className="grid h-9 w-9 place-items-center"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => remove(line.slug, line.size)}
                      className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" /> Remove
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <aside className="h-fit rounded-2xl bg-secondary p-6">
          <h2 className="font-display text-xl font-bold">Order summary</h2>
          <dl className="mt-5 space-y-3 text-sm">
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Subtotal</dt>
              <dd className="font-semibold">{formatINR(subtotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Shipping</dt>
              <dd className="font-semibold">{shipping === 0 ? "Free" : formatINR(shipping)}</dd>
            </div>
            <div className="flex justify-between border-t border-border pt-3 text-base">
              <dt className="font-bold">Total</dt>
              <dd className="font-bold">{formatINR(subtotal + shipping)}</dd>
            </div>
          </dl>
          <a
            href={`https://wa.me/919873804717?text=${encodeURIComponent(
              `Hi Ritu Fashion Store! I'd like to order: ${lines
                .map((l) => `${getProduct(l.slug)?.name} (${l.size}) x${l.qty}`)
                .join(", ")}. Total ${formatINR(subtotal + shipping)}.`,
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 block rounded-full bg-primary px-6 py-3.5 text-center text-sm font-bold text-primary-foreground"
          >
            Order on WhatsApp
          </a>
          <button
            type="button"
            onClick={clear}
            className="mt-3 w-full text-center text-xs text-muted-foreground hover:text-destructive"
          >
            Clear bag
          </button>
        </aside>
      </div>
    </div>
  );
}
