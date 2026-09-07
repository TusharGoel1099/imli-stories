import { Link } from "@tanstack/react-router";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/cart";

const nav = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-primary px-4 py-2 text-center text-xs font-semibold tracking-wide text-primary-foreground sm:text-sm">
        FREE SHIPPING ON PREPAID ORDERS | CALL US 98738 04717
      </div>

      <div className="border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto grid max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-4">
          <Link to="/" className="flex min-w-0 items-center gap-2">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/15 font-display text-lg font-bold text-primary">
              R
            </span>
            <span className="min-w-0">
              <span className="block truncate font-display text-lg leading-tight font-bold text-foreground">
                Ritu Fashion
              </span>
              <span className="block text-[10px] tracking-[0.25em] text-muted-foreground">STORE</span>
            </span>
          </Link>

          <nav className="hidden items-center justify-center gap-7 md:flex">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-sm font-semibold tracking-wide text-foreground/80 uppercase transition-colors hover:text-primary"
                activeProps={{ className: "text-primary underline underline-offset-8" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <Link
              to="/shop"
              aria-label="Search products"
              className="grid h-10 w-10 place-items-center rounded-full text-foreground/70 hover:bg-accent"
            >
              <Search className="h-5 w-5" />
            </Link>
            <Link
              to="/cart"
              aria-label="Cart"
              className="relative grid h-10 w-10 place-items-center rounded-full text-foreground/70 hover:bg-accent"
            >
              <ShoppingBag className="h-5 w-5" />
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 grid h-5 min-w-5 place-items-center rounded-full bg-primary px-1 text-[11px] font-bold text-primary-foreground">
                  {count}
                </span>
              )}
            </Link>
            <button
              type="button"
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-full text-foreground/70 hover:bg-accent md:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="flex flex-col border-t border-border bg-background px-4 py-2 md:hidden">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-semibold tracking-wide text-foreground uppercase"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
