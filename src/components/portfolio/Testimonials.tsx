const items = [
  {
    quote: "Profissional sério, ágil e competente. Total suporte em todos os serviços prestados. Recomendo de olho fechado!",
    name: "Leonardo Lima",
    role: "CEO, L&F Contábil",
  },
  {
    quote: "“Uma idéia que só tinha no papel, se tornou mais que uma realidade. Desde a identidade ao primeiro cliente tive total suporte",
    name: "Palloma F.",
    role: "CEO, Witch Lab",
  },
  {
    quote: "Raríssimo encontrar alguém com esse nível técnico e estético ao mesmo tempo.",
    name: "Palloma F.",
    role: "Psicóloga",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 sm:py-32">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">Depoimentos</p>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold leading-tight">
            Quem já trabalhou comigo.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {items.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-border bg-card/40 p-7 backdrop-blur-sm flex flex-col justify-between"
            >
              <blockquote className="text-foreground/90 text-base leading-relaxed">
                <span className="text-accent font-display text-2xl leading-none mr-1">“</span>
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border">
                <div className="text-sm font-medium">{t.name}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
