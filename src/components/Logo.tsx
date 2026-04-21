import { Link } from "react-router-dom";
import logoImg from "@/assets/logo-icon.png";

export const Logo = ({ to = "/" }: { to?: string }) => (
  <Link to={to} className="flex items-center gap-2.5 group">
    <img
      src={logoImg}
      alt="MenuSync AI logo"
      className="h-12 w-12 object-contain transition-smooth group-hover:scale-105 drop-shadow-md"
    />
    <span className="font-display font-bold text-lg tracking-tight">
      MenuSync<span className="text-primary"> AI</span>
    </span>
  </Link>
);