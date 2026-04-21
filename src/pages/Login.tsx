import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/Logo";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast.success("Welcome back!");
      navigate("/dashboard");
    }, 600);
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-background">
      <div className="hidden lg:block relative bg-gradient-warm border-r border-border overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh" />
        <div className="relative h-full flex flex-col justify-between p-12">
          <Logo />
          <div>
            <h2 className="font-display text-4xl font-bold tracking-tight text-balance">
              "We update prices once a week now — not 4 times across 4 apps."
            </h2>
            <p className="mt-4 text-muted-foreground">Priya M. — Owner, Saffron Kitchen</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-sm">
          <div className="lg:hidden mb-8"><Logo /></div>
          <h1 className="font-display text-3xl font-bold tracking-tight">Welcome back</h1>
          <p className="mt-2 text-muted-foreground">Log in to manage your menus.</p>
          <form onSubmit={onSubmit} className="mt-8 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required placeholder="you@restaurant.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required placeholder="••••••••" />
            </div>
            <Button type="submit" disabled={loading} className="w-full bg-gradient-primary shadow-elegant hover:shadow-glow transition-smooth h-11">
              {loading ? "Signing in..." : "Log in"}
            </Button>
          </form>
          <p className="mt-6 text-sm text-muted-foreground text-center">
            New to MenuSync? <Link to="/signup" className="text-primary font-medium hover:underline">Create an account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;