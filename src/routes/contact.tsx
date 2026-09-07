import { createFileRoute } from "@tanstack/react-router";
import { Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Ritu Fashion Store, Gurgaon" },
      {
        name: "description",
        content: "Call, WhatsApp or visit Ritu Fashion Store in Sadar Bazaar, Gurgaon for kidswear orders and sizing help.",
      },
      { property: "og:title", content: "Contact Ritu Fashion Store" },
      { property: "og:description", content: "Call, WhatsApp or visit our Gurgaon store." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto max-w-5xl px-4 py-14">
      <h1 className="font-display text-4xl font-extrabold">Get in touch</h1>
      <p className="mt-3 text-muted-foreground">Sizing questions, bulk orders or a custom festive set — we're happy to help.</p>

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <div className="space-y-5">
          {[
            { icon: Phone, title: "Call us", body: "+91 98738 04717", href: "tel:+919873804717" },
            { icon: MessageCircle, title: "WhatsApp", body: "Chat with our team", href: "https://wa.me/919873804717" },
            { icon: MapPin, title: "Visit the store", body: "Sadar Bazaar, Gurgaon, Haryana 122001" },
            { icon: Instagram, title: "Instagram", body: "@ritufashionstore" },
          ].map(({ icon: Icon, title, body, href }) => (
            <div key={title} className="flex gap-3 rounded-2xl bg-secondary p-5">
              <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div className="min-w-0">
                <p className="font-semibold">{title}</p>
                {href ? (
                  <a href={href} className="text-sm text-muted-foreground hover:text-primary">
                    {body}
                  </a>
                ) : (
                  <p className="text-sm text-muted-foreground">{body}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="rounded-2xl border border-border p-6"
        >
          <h2 className="font-display text-xl font-bold">Send a message</h2>
          <div className="mt-5 space-y-4">
            <input required placeholder="Your name" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" />
            <input required type="tel" placeholder="Phone number" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" />
            <textarea required rows={4} placeholder="How can we help?" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" />
          </div>
          <button type="submit" className="mt-5 w-full rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground">
            {sent ? "Thanks! We'll call you back" : "Send message"}
          </button>
          <p className="mt-3 text-xs text-muted-foreground">
            This form is for display only right now — for a faster reply, call or WhatsApp us.
          </p>
        </form>
      </div>
    </div>
  );
}
