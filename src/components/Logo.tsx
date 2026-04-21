import { UtensilsCrossed } from "lucide-react";
import { Link } from "react-router-dom";

export const Logo = ({ to = "/" }: { to?: string }) => (
  <Link to={to} className="flex items-center gap-2 group">
    <div className="h-9 w-9 rounded-xl bg-gradient-primary grid place-items-center shadow-elegant transition-smooth group-hover:scale-105">
      <UtensilsCrossed className="h-5 w-5 text-primary-foreground" />
    </div>
    <span className="font-display font-bold text-lg tracking-tight">
      MenuSync<span className="text-primary"> AI</span>
    </span>
  </Link>
);