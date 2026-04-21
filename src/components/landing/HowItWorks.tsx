const steps = [
  { n: "01", title: "Build your master menu", body: "Import or add dishes with prices, categories, and photos. Your single source of truth." },
  { n: "02", title: "Preview every channel", body: "See live mockups of how your menu will appear on each delivery platform and QR view." },
  { n: "03", title: "Publish in one click", body: "Hit publish — every channel updates simultaneously. No more copy-paste." },
];

export const HowItWorks = () => (
  <section id="how" className="bg-gradient-warm border-y border-border">
    <div className="container py-20">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-sm font-medium text-primary uppercase tracking-wider">How it works</p>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight text-balance">
          Three steps to a synced menu.
        </h2>
      </div>
      <div className="mt-14 grid md:grid-cols-3 gap-6">
        {steps.map((s) => (
          <div key={s.n} className="rounded-2xl bg-card border border-border p-8 shadow-soft transition-smooth hover:shadow-elegant">
            <div className="font-display text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">{s.n}</div>
            <h3 className="mt-4 font-display font-semibold text-xl">{s.title}</h3>
            <p className="mt-2 text-muted-foreground leading-relaxed">{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);