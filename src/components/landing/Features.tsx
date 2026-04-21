import { LayoutDashboard, Smartphone, Send, Wand2, ToggleRight, Layers } from "lucide-react";

const features = [
  { icon: LayoutDashboard, title: "Central menu dashboard", body: "Add, edit, and organize every dish, price, and category from one elegant interface." },
  { icon: Smartphone, title: "Multi-platform preview", body: "See your menu rendered exactly how it'll appear on Swiggy, Zomato, QR menus, and your website." },
  { icon: Send, title: "One-click publish", body: "Push updates everywhere instantly. No more juggling tabs or back-office portals." },
  { icon: Wand2, title: "AI menu assistant", body: "Generate mouth-watering descriptions in seconds. Improve copy with one click." },
  { icon: ToggleRight, title: "Live availability toggles", body: "86 a dish? Flip a switch — it disappears from every channel in real time." },
  { icon: Layers, title: "Multi-branch ready", body: "Manage one location or fifty. Variants, pricing, and availability per branch." },
];

export const Features = () => (
  <section id="features" className="container py-20">
    <div className="text-center max-w-2xl mx-auto">
      <p className="text-sm font-medium text-primary uppercase tracking-wider">Features</p>
      <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight text-balance">
        Everything you need. Nothing you don't.
      </h2>
    </div>
    <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {features.map(({ icon: Icon, title, body }, i) => (
        <div
          key={title}
          style={{ animationDelay: `${i * 80}ms` }}
          className="group rounded-2xl border border-border bg-card p-6 shadow-soft hover-lift hover:border-primary/30 animate-slide-up"
        >
          <div className="h-11 w-11 rounded-xl bg-gradient-primary grid place-items-center mb-4 shadow-elegant transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
            <Icon className="h-5 w-5 text-primary-foreground" />
          </div>
          <h3 className="font-display font-semibold text-lg">{title}</h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
        </div>
      ))}
    </div>
  </section>
);