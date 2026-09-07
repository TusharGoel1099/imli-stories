import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { products } from "./products";

export type CartLine = { slug: string; size: string; qty: number };

type CartValue = {
  lines: CartLine[];
  add: (slug: string, size: string, qty?: number) => void;
  remove: (slug: string, size: string) => void;
  setQty: (slug: string, size: string, qty: number) => void;
  clear: () => void;
  count: number;
  subtotal: number;
};

const CartContext = createContext<CartValue | null>(null);
const KEY = "rfs-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setLines(JSON.parse(raw));
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(lines));
    } catch {
      /* ignore */
    }
  }, [lines]);

  const value = useMemo<CartValue>(() => {
    const subtotal = lines.reduce((sum, l) => {
      const p = products.find((x) => x.slug === l.slug);
      return sum + (p ? p.price * l.qty : 0);
    }, 0);

    return {
      lines,
      count: lines.reduce((n, l) => n + l.qty, 0),
      subtotal,
      add: (slug, size, qty = 1) =>
        setLines((prev) => {
          const i = prev.findIndex((l) => l.slug === slug && l.size === size);
          if (i === -1) return [...prev, { slug, size, qty }];
          const next = [...prev];
          next[i] = { ...next[i], qty: next[i].qty + qty };
          return next;
        }),
      remove: (slug, size) =>
        setLines((prev) => prev.filter((l) => !(l.slug === slug && l.size === size))),
      setQty: (slug, size, qty) =>
        setLines((prev) =>
          qty <= 0
            ? prev.filter((l) => !(l.slug === slug && l.size === size))
            : prev.map((l) => (l.slug === slug && l.size === size ? { ...l, qty } : l)),
        ),
      clear: () => setLines([]),
    };
  }, [lines]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
