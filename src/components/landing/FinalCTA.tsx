import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const FinalCTA = () => (
  <section className="container py-20">
    <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-12 sm:p-16 text-center shadow-elegant">
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      <div className="relative">
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground tracking-tight text-balance">
          Stop updating menus. Start running your restaurant.
        </h2>
        <p className="mt-4 text-primary-foreground/85 text-lg max-w-xl mx-auto">
          Join 1,200+ restaurants already saving 6 hours a week with MenuSync AI.
        </p>
        <Button asChild size="lg" variant="secondary" className="mt-8 h-12 px-7 shadow-soft">
          <Link to="/signup">Start your free trial <ArrowRight className="ml-1 h-4 w-4" /></Link>
        </Button>
      </div>
    </div>
  </section>
);