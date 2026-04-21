import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";

export const Navbar = () => (
  <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
    <div className="container flex h-16 items-center justify-between">
      <Logo />
      <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
        <a href="#features" className="story-link hover:text-foreground transition-smooth">Features</a>
        <a href="#how" className="story-link hover:text-foreground transition-smooth">How it works</a>
        <a href="#pricing" className="story-link hover:text-foreground transition-smooth">Pricing</a>
      </nav>
      <div className="flex items-center gap-2">
        <Button asChild variant="ghost" size="sm"><Link to="/login">Log in</Link></Button>
        <Button asChild size="sm" className="bg-gradient-primary shadow-elegant hover:shadow-glow transition-smooth hover:scale-105">
          <Link to="/signup">Start free</Link>
        </Button>
      </div>
    </div>
  </header>
);