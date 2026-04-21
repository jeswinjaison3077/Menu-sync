import { Link } from "react-router-dom";
import logoImg from "@/assets/logo.jpg";

export const Logo = ({ to = "/" }: { to?: string }) => (
  <Link to={to} className="flex items-center gap-2 group">
    <img
      src={logoImg}
      alt="MenuSync AI logo"
      className="h-9 w-9 rounded-xl object-cover shadow-soft transition-smooth group-hover:scale-105"
    />
    <span className="font-display font-bold text-lg tracking-tight">
      MenuSync<span className="text-primary"> AI</span>
    </span>
  </Link>
);