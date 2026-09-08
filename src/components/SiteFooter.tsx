import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-20 bg-secondary">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="font-display text-xl font-bold text-foreground">Ritu Fashion Store</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Soft cotton clothing for little ones, made and loved in Gurgaon since day one.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold tracking-wide uppercase">Shop</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/shop" className="hover:text-primary">All Products</Link></li>
            <li><Link to="/shop" search={{ category: "girls" }} className="hover:text-primary">Girls</Link></li>
            <li><Link to="/shop" search={{ category: "boys" }} className="hover:text-primary">Boys</Link></li>
            <li><Link to="/shop" search={{ category: "festive" }} className="hover:text-primary">Festive</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold tracking-wide uppercase">Help</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            <li><Link to="/cart" className="hover:text-primary">Your Cart</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold tracking-wide uppercase">Visit Us</h3>
          <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              157/13, Sadar Bazar Rd, Roshan Pura, Gurugram, Haryana 122007
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href="tel:+919873564717" className="hover:text-primary">+91 98735 64717</a>
            </li>
            <li className="flex gap-2">
              <Instagram className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              @ritufashionstore
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Ritu Fashion Store. All rights reserved.
      </div>
    </footer>
  );
}
