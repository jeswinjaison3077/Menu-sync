import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Wand2 } from "lucide-react";
import { MenuItem, generateAIDescription, menuStore } from "@/lib/menuStore";
import { toast } from "sonner";

const CATS = ["Starters", "Mains", "Desserts", "Drinks", "Sides"];

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  item?: MenuItem | null;
};

const empty: Omit<MenuItem, "id"> = { name: "", description: "", price: 0, category: "Mains", available: true };

export const MenuItemDialog = ({ open, onOpenChange, item }: Props) => {
  const [form, setForm] = useState<Omit<MenuItem, "id">>(empty);

  useEffect(() => {
    if (item) setForm({ name: item.name, description: item.description, price: item.price, category: item.category, available: item.available });
    else setForm(empty);
  }, [item, open]);

  const onAI = () => {
    if (!form.name) return toast.error("Add a dish name first");
    setForm((f) => ({ ...f, description: generateAIDescription(form.name, form.category) }));
    toast.success("AI description generated ✨");
  };

  const onSave = () => {
    if (!form.name.trim()) return toast.error("Name is required");
    if (item) menuStore.update(item.id, form);
    else menuStore.add(form);
    toast.success(item ? "Item updated" : "Item added");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">{item ? "Edit item" : "Add menu item"}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Name</Label>
            <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Truffle Mushroom Pasta" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Description</Label>
              <Button type="button" size="sm" variant="ghost" onClick={onAI} className="h-7 text-primary hover:text-primary">
                <Wand2 className="h-3.5 w-3.5 mr-1" /> AI generate
              </Button>
            </div>
            <Textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3} placeholder="Describe your dish..." />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Price</Label>
              <Input type="number" step="0.01" value={form.price} onChange={(e) => setForm({ ...form, price: parseFloat(e.target.value) || 0 })} />
            </div>
            <div className="space-y-2">
              <Label>Category</Label>
              <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                {CATS.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
          </div>
          <div className="flex items-center justify-between rounded-lg border border-border p-3">
            <div>
              <Label>Available</Label>
              <p className="text-xs text-muted-foreground">Show on all platforms</p>
            </div>
            <Switch checked={form.available} onCheckedChange={(v) => setForm({ ...form, available: v })} />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button onClick={onSave} className="bg-gradient-primary shadow-elegant hover:shadow-glow">
            {item ? "Save changes" : "Add item"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};