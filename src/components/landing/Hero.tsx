import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-illustration.png";

export const Hero = () => (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-mesh pointer-events-none" />
    <div className="container relative grid lg:grid-cols-2 gap-12 items-center py-20 lg:py-28">
      <div className="animate-fade-in">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground mb-6 shadow-soft animate-pulse-glow">
          <Sparkles className="h-3.5 w-3.5 text-primary animate-spin-slow" />
          AI-powered menu management
        </div>
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-balance">
          Update once.
          <br />
          <span className="bg-gradient-primary bg-clip-text text-transparent">Publish everywhere.</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl text-balance">
          MenuSync AI is the single source of truth for your restaurant menu — sync prices, items, and availability across delivery apps, QR menus, and your website in one click.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg" className="bg-gradient-primary shadow-elegant hover:shadow-glow transition-smooth h-12 px-6 hover:scale-105">
            <Link to="/signup">Start free trial <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-12 px-6 hover:bg-primary/5 hover:border-primary/40 transition-smooth">
            <Link to="/dashboard"><Play className="mr-1 h-4 w-4" /> View demo</Link>
          </Button>
        </div>
        <div className="mt-8 flex items-center gap-6 text-xs text-muted-foreground">
          <div className="flex -space-x-2">
            {["🍕","🥘","🍜","🥗"].map((e,i)=>(
              <div key={i} className="h-8 w-8 rounded-full border-2 border-background bg-secondary grid place-items-center text-sm">{e}</div>
            ))}
          </div>
          <span>Trusted by 1,200+ restaurants & cafés</span>
        </div>
      </div>
      <div className="relative animate-scale-in">
        <div className="absolute -inset-8 bg-gradient-primary/20 blur-3xl rounded-full animate-pulse" />
        <img
          src={heroImg}
          alt="MenuSync dashboard syncing a restaurant menu across delivery apps, QR codes, and website"
          width={1280}
          height={1024}
          className="relative rounded-2xl shadow-elegant border border-border/60 animate-float hover:scale-[1.02] transition-transform duration-500"
        />
      </div>
    </div>
  </section>
);