import { Sparkles, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { menuStore, generateAIDescription, useMenu } from "@/lib/menuStore";
import { toast } from "sonner";

export const AIAssistant = () => {
  const items = useMenu();

  const enhanceAll = () => {
    items.forEach((i) => menuStore.update(i.id, { description: generateAIDescription(i.name, i.category) }));
    toast.success(`Enhanced ${items.length} descriptions with AI ✨`);
  };

  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
      <div className="flex items-center gap-2">
        <div className="h-9 w-9 rounded-lg bg-gradient-primary grid place-items-center shadow-elegant">
          <Sparkles className="h-4 w-4 text-primary-foreground" />
        </div>
        <div>
          <h3 className="font-display font-semibold">AI Assistant</h3>
          <p className="text-xs text-muted-foreground">Make every dish sound delicious</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
        Auto-rewrite all your menu descriptions with appetizing, on-brand copy in one click.
      </p>
      <Button onClick={enhanceAll} className="w-full mt-4 bg-gradient-primary shadow-elegant hover:shadow-glow transition-smooth">
        <Wand2 className="h-4 w-4 mr-2" /> Enhance all descriptions
      </Button>
    </div>
  );
};