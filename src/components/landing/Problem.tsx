import { AlertTriangle, Clock, TrendingDown } from "lucide-react";

const pains = [
  { icon: Clock, title: "Hours wasted weekly", body: "Updating the same menu across Swiggy, Zomato, your website, and printed QRs eats your evenings." },
  { icon: AlertTriangle, title: "Pricing inconsistencies", body: "A ₹10 mismatch between platforms quietly damages trust — and triggers refund requests." },
  { icon: TrendingDown, title: "Lost revenue from outdated items", body: "Customers order what's no longer available, get cancelled, and don't come back." },
];

export const Problem = () => (
  <section className="container py-20">
    <div className="max-w-2xl">
      <p className="text-sm font-medium text-primary uppercase tracking-wider">The problem</p>
      <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight text-balance">
        Your menu lives in too many places.
      </h2>
      <p className="mt-4 text-muted-foreground text-lg">
        Every platform has its own dashboard, its own quirks, its own update window. You shouldn't have to be a data-entry clerk to run a restaurant.
      </p>
    </div>
    <div className="mt-12 grid md:grid-cols-3 gap-6">
      {pains.map(({ icon: Icon, title, body }, i) => (
        <div
          key={title}
          style={{ animationDelay: `${i * 100}ms` }}
          className="group rounded-2xl border border-border bg-card p-6 shadow-soft hover-lift animate-slide-up"
        >
          <div className="h-11 w-11 rounded-xl bg-primary/10 grid place-items-center mb-4 transition-transform duration-300 group-hover:scale-110">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <h3 className="font-display font-semibold text-lg">{title}</h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
        </div>
      ))}
    </div>
  </section>
);