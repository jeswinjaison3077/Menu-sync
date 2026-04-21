import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const tiers = [
  { name: "Starter", price: "₹0", period: "/mo", desc: "For single-location cafés trying things out.", features: ["1 location", "Up to 30 menu items", "2 platform previews", "Basic AI assistant"], cta: "Start free", highlight: false },
  { name: "Growth", price: "₹1,499", period: "/mo", desc: "For busy restaurants on multiple platforms.", features: ["Up to 3 locations", "Unlimited menu items", "All platform previews", "Advanced AI assistant", "Live availability sync"], cta: "Start 14-day trial", highlight: true },
  { name: "Scale", price: "Custom", period: "", desc: "For chains and cloud-kitchen operators.", features: ["Unlimited locations", "Branch-level pricing", "API & POS integrations", "Priority support", "Dedicated success manager"], cta: "Talk to sales", highlight: false },
];

export const Pricing = () => (
  <section id="pricing" className="container py-20">
    <div className="text-center max-w-2xl mx-auto">
      <p className="text-sm font-medium text-primary uppercase tracking-wider">Pricing</p>
      <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight text-balance">
        Simple plans. No hidden fees.
      </h2>
    </div>
    <div className="mt-14 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {tiers.map((t, i) => (
        <div
          key={t.name}
          style={{ animationDelay: `${i * 120}ms` }}
          className={`rounded-2xl border p-8 flex flex-col animate-slide-up transition-smooth hover:-translate-y-1 ${t.highlight ? "border-primary bg-card shadow-elegant scale-[1.02] hover:shadow-glow" : "border-border bg-card shadow-soft hover:shadow-elegant"}`}
        >
          {t.highlight && <span className="self-start mb-4 inline-flex rounded-full bg-gradient-primary px-3 py-1 text-xs font-medium text-primary-foreground">Most popular</span>}
          <h3 className="font-display font-semibold text-xl">{t.name}</h3>
          <p className="text-sm text-muted-foreground mt-1">{t.desc}</p>
          <div className="mt-6 flex items-baseline gap-1">
            <span className="font-display text-4xl font-bold">{t.price}</span>
            <span className="text-muted-foreground text-sm">{t.period}</span>
          </div>
          <ul className="mt-6 space-y-3 flex-1">
            {t.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" /> {f}
              </li>
            ))}
          </ul>
          <Button asChild className={`mt-8 ${t.highlight ? "bg-gradient-primary shadow-elegant hover:shadow-glow" : ""}`} variant={t.highlight ? "default" : "outline"}>
            <Link to="/signup">{t.cta}</Link>
          </Button>
        </div>
      ))}
    </div>
  </section>
);