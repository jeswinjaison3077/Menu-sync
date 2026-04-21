import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Logo } from "@/components/Logo";
import { menuStore, useMenu, MenuItem } from "@/lib/menuStore";
import { MenuItemDialog } from "@/components/dashboard/MenuItemDialog";
import { PlatformPreviews } from "@/components/dashboard/PlatformPreviews";
import { AIAssistant } from "@/components/dashboard/AIAssistant";
import { Plus, Pencil, Trash2, Send, LayoutGrid, Eye, Sparkles, LogOut } from "lucide-react";
import { toast } from "sonner";

type Tab = "menu" | "previews";

const Dashboard = () => {
  const items = useMenu();
  const [tab, setTab] = useState<Tab>("menu");
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<MenuItem | null>(null);

  const stats = useMemo(() => ({
    total: items.length,
    live: items.filter(i => i.available).length,
    cats: new Set(items.map(i => i.category)).size,
  }), [items]);

  const onPublish = () => {
    toast.success("Published to all platforms! 🚀", { description: `${stats.live} items now live across Swiggy, Zomato, QR, and your website.` });
  };

  const onEdit = (i: MenuItem) => { setEditing(i); setOpen(true); };
  const onAdd = () => { setEditing(null); setOpen(true); };
  const onDelete = (i: MenuItem) => { menuStore.remove(i.id); toast.success(`${i.name} removed`); };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="hidden md:flex w-60 shrink-0 border-r border-border bg-card flex-col p-4">
        <Logo />
        <nav className="mt-8 space-y-1">
          <button onClick={() => setTab("menu")} className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-smooth ${tab === "menu" ? "bg-secondary text-foreground" : "text-muted-foreground hover:bg-secondary/60"}`}>
            <LayoutGrid className="h-4 w-4" /> Menu
          </button>
          <button onClick={() => setTab("previews")} className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-smooth ${tab === "previews" ? "bg-secondary text-foreground" : "text-muted-foreground hover:bg-secondary/60"}`}>
            <Eye className="h-4 w-4" /> Previews
          </button>
          <div className="px-3 py-2 text-sm text-muted-foreground flex items-center gap-2">
            <Sparkles className="h-4 w-4" /> AI Assistant
          </div>
        </nav>
        <div className="mt-auto">
          <Button asChild variant="ghost" size="sm" className="w-full justify-start text-muted-foreground">
            <Link to="/"><LogOut className="h-4 w-4 mr-2" /> Log out</Link>
          </Button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 min-w-0">
        <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-xl border-b border-border">
          <div className="flex items-center justify-between px-6 py-4 gap-4">
            <div>
              <h1 className="font-display text-2xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-sm text-muted-foreground hidden sm:block">Your menu, synced everywhere.</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={onAdd}>
                <Plus className="h-4 w-4 mr-1" /> Add item
              </Button>
              <Button onClick={onPublish} className="bg-gradient-primary shadow-elegant hover:shadow-glow transition-smooth">
                <Send className="h-4 w-4 mr-2" /> Publish
              </Button>
            </div>
          </div>
          <div className="px-6 pb-3 md:hidden flex gap-2">
            <Button variant={tab === "menu" ? "default" : "outline"} size="sm" onClick={() => setTab("menu")}>Menu</Button>
            <Button variant={tab === "previews" ? "default" : "outline"} size="sm" onClick={() => setTab("previews")}>Previews</Button>
          </div>
        </header>

        <main className="p-6 space-y-6">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "Total items", value: stats.total },
              { label: "Live now", value: stats.live },
              { label: "Categories", value: stats.cats },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl border border-border bg-card p-4 shadow-soft">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</p>
                <p className="font-display text-3xl font-bold mt-1">{s.value}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              {tab === "menu" ? (
                <div className="rounded-2xl border border-border bg-card shadow-soft overflow-hidden">
                  <div className="p-5 border-b border-border flex items-center justify-between">
                    <h2 className="font-display text-lg font-semibold">Menu items</h2>
                    <span className="text-xs text-muted-foreground">{items.length} items</span>
                  </div>
                  <div className="divide-y divide-border">
                    {items.map((i) => (
                      <div key={i.id} className="p-5 flex items-start gap-4 hover:bg-secondary/40 transition-smooth">
                        <div className="h-12 w-12 rounded-xl bg-gradient-warm border border-border grid place-items-center text-xl shrink-0">🍽️</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-semibold">{i.name}</h3>
                            <Badge variant="secondary" className="text-[10px]">{i.category}</Badge>
                            {!i.available && <Badge variant="outline" className="text-[10px] text-muted-foreground">Hidden</Badge>}
                          </div>
                          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{i.description}</p>
                          <p className="text-sm font-semibold text-primary mt-2">₹{i.price.toFixed(0)}</p>
                        </div>
                        <div className="flex items-center gap-1 shrink-0">
                          <Switch checked={i.available} onCheckedChange={(v) => menuStore.update(i.id, { available: v })} />
                          <Button size="icon" variant="ghost" onClick={() => onEdit(i)}><Pencil className="h-4 w-4" /></Button>
                          <Button size="icon" variant="ghost" onClick={() => onDelete(i)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
                        </div>
                      </div>
                    ))}
                    {items.length === 0 && (
                      <div className="p-12 text-center text-muted-foreground">
                        <p>No items yet. Add your first dish to get started.</p>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <PlatformPreviews items={items} />
              )}
            </div>

            <div className="space-y-6">
              <AIAssistant />
              {tab === "menu" && (
                <div className="rounded-2xl border border-border bg-gradient-warm p-5 shadow-soft">
                  <h3 className="font-display font-semibold">Live preview</h3>
                  <p className="text-xs text-muted-foreground mt-1 mb-4">A peek at how your QR menu looks right now.</p>
                  <div className="rounded-xl bg-card border border-border p-4 max-h-72 overflow-y-auto">
                    {items.filter(i => i.available).slice(0, 4).map((i) => (
                      <div key={i.id} className="pb-3 mb-3 border-b border-dashed border-border last:border-0 last:mb-0 last:pb-0">
                        <div className="flex justify-between items-baseline gap-2">
                          <h4 className="font-display font-semibold text-sm">{i.name}</h4>
                          <span className="font-display font-bold text-sm text-primary">₹{i.price.toFixed(0)}</span>
                        </div>
                        <p className="text-[11px] text-muted-foreground italic mt-1 line-clamp-2">{i.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>

      <MenuItemDialog open={open} onOpenChange={setOpen} item={editing} />
    </div>
  );
};

export default Dashboard;