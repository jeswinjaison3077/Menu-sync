import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/Logo";
import { toast } from "sonner";

const Signup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast.success("Account created — welcome to MenuSync AI!");
      navigate("/dashboard");
    }, 600);
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-background">
      <div className="flex items-center justify-center p-6 sm:p-12 order-2 lg:order-1">
        <div className="w-full max-w-sm">
          <div className="lg:hidden mb-8"><Logo /></div>
          <h1 className="font-display text-3xl font-bold tracking-tight">Create your account</h1>
          <p className="mt-2 text-muted-foreground">Free 14-day trial. No credit card.</p>
          <form onSubmit={onSubmit} className="mt-8 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="restaurant">Restaurant name</Label>
              <Input id="restaurant" required placeholder="Saffron Kitchen" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="owner">Owner name</Label>
              <Input id="owner" required placeholder="Priya Mehta" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required placeholder="you@restaurant.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required placeholder="At least 8 characters" />
            </div>
            <Button type="submit" disabled={loading} className="w-full bg-gradient-primary shadow-elegant hover:shadow-glow transition-smooth h-11">
              {loading ? "Creating account..." : "Create account"}
            </Button>
          </form>
          <p className="mt-6 text-sm text-muted-foreground text-center">
            Already have an account? <Link to="/login" className="text-primary font-medium hover:underline">Log in</Link>
          </p>
        </div>
      </div>
      <div className="hidden lg:block relative bg-gradient-warm border-l border-border overflow-hidden order-1 lg:order-2">
        <div className="absolute inset-0 bg-gradient-mesh" />
        <div className="relative h-full flex flex-col justify-between p-12">
          <div className="flex justify-end"><Logo /></div>
          <div>
            <h2 className="font-display text-4xl font-bold tracking-tight text-balance">
              One menu. Every platform. Zero copy-paste.
            </h2>
            <p className="mt-4 text-muted-foreground">Set up in under 5 minutes.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;