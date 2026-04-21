import { Logo } from "@/components/Logo";

export const Footer = () => (
  <footer className="border-t border-border">
    <div className="container py-10 flex flex-col sm:flex-row gap-4 items-center justify-between">
      <Logo />
      <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} MenuSync AI. Crafted for restaurants.</p>
    </div>
  </footer>
);