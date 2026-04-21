import { MenuItem } from "@/lib/menuStore";
import { Star, QrCode, Globe } from "lucide-react";

const fmt = (n: number) => `₹${n.toFixed(0)}`;

const SwiggyPreview = ({ items }: { items: MenuItem[] }) => (
  <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-soft">
    <div className="bg-[hsl(15_90%_55%)] text-white p-4 flex items-center justify-between">
      <span className="font-bold text-lg">swiggy</span>
      <span className="text-xs opacity-90">Delivery in 28 min</span>
    </div>
    <div className="p-4 space-y-3 max-h-80 overflow-y-auto">
      {items.filter(i => i.available).slice(0, 5).map((i) => (
        <div key={i.id} className="flex gap-3 pb-3 border-b border-border last:border-0">
          <div className="flex-1">
            <div className="text-xs text-green-700 font-semibold">● VEG</div>
            <h4 className="font-semibold text-sm mt-0.5">{i.name}</h4>
            <p className="text-xs text-foreground/70 font-medium mt-1">{fmt(i.price)}</p>
            <p className="text-[11px] text-muted-foreground mt-1 line-clamp-2">{i.description}</p>
          </div>
          <div className="w-16 h-16 rounded-lg bg-secondary grid place-items-center text-2xl">🍽️</div>
        </div>
      ))}
    </div>
  </div>
);

const ZomatoPreview = ({ items }: { items: MenuItem[] }) => (
  <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-soft">
    <div className="bg-[hsl(348_83%_47%)] text-white p-4 flex items-center justify-between">
      <span className="font-bold text-lg">zomato</span>
      <span className="text-xs flex items-center gap-1"><Star className="h-3 w-3 fill-white" /> 4.3</span>
    </div>
    <div className="p-4 space-y-3 max-h-80 overflow-y-auto">
      {items.filter(i => i.available).slice(0, 5).map((i) => (
        <div key={i.id} className="flex justify-between gap-3 pb-3 border-b border-border last:border-0">
          <div className="flex-1">
            <h4 className="font-semibold text-sm">{i.name}</h4>
            <p className="text-sm font-medium mt-1">{fmt(i.price)}</p>
            <p className="text-[11px] text-muted-foreground mt-1 line-clamp-2">{i.description}</p>
          </div>
          <button className="self-start text-xs font-semibold border border-[hsl(348_83%_47%)] text-[hsl(348_83%_47%)] rounded px-3 py-1 bg-card">ADD</button>
        </div>
      ))}
    </div>
  </div>
);

const QRPreview = ({ items }: { items: MenuItem[] }) => (
  <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-soft">
    <div className="bg-foreground text-background p-4 flex items-center justify-between">
      <span className="font-display font-bold text-lg">Your Menu</span>
      <QrCode className="h-5 w-5" />
    </div>
    <div className="p-4 space-y-3 max-h-80 overflow-y-auto">
      {items.filter(i => i.available).slice(0, 5).map((i) => (
        <div key={i.id} className="pb-3 border-b border-dashed border-border last:border-0">
          <div className="flex justify-between items-baseline gap-2">
            <h4 className="font-display font-semibold text-sm">{i.name}</h4>
            <span className="font-display font-bold text-sm text-primary">{fmt(i.price)}</span>
          </div>
          <p className="text-[11px] text-muted-foreground italic mt-1">{i.description}</p>
        </div>
      ))}
    </div>
  </div>
);

const WebsitePreview = ({ items }: { items: MenuItem[] }) => (
  <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-soft">
    <div className="bg-gradient-primary text-primary-foreground p-4 flex items-center gap-2">
      <Globe className="h-4 w-4" />
      <span className="font-display font-bold text-lg">yourrestaurant.com</span>
    </div>
    <div className="p-4 grid grid-cols-2 gap-3 max-h-80 overflow-y-auto">
      {items.filter(i => i.available).slice(0, 4).map((i) => (
        <div key={i.id} className="rounded-lg border border-border p-3 bg-background">
          <h4 className="font-display font-semibold text-sm">{i.name}</h4>
          <p className="text-[11px] text-muted-foreground mt-1 line-clamp-2">{i.description}</p>
          <p className="text-sm font-bold text-primary mt-2">{fmt(i.price)}</p>
        </div>
      ))}
    </div>
  </div>
);

export const PlatformPreviews = ({ items }: { items: MenuItem[] }) => (
  <div className="grid sm:grid-cols-2 gap-4">
    <SwiggyPreview items={items} />
    <ZomatoPreview items={items} />
    <QRPreview items={items} />
    <WebsitePreview items={items} />
  </div>
);