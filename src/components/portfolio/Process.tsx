const steps = [
  { n: "01", t: "Discovery", d: "Entendo seu negócio, métricas e gargalos. Sem isso, design é decoração." },
  { n: "02", t: "Estratégia", d: "Defino posicionamento, roadmap e KPIs. Cada decisão tem um porquê mensurável." },
  { n: "03", t: "Design & Build", d: "Iterações rápidas em design e código. Você acompanha tudo em tempo real." },
  { n: "04", t: "Launch & Growth", d: "Deploy, analytics e otimização contínua. O lançamento é só o começo." },
];

export const Process = () => {
  return (
    <section id="processo" className="py-24 sm:py-32">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">Processo</p>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold leading-tight">
            Simples, rápido, transparente.
          </h2>
        </div>

        <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden">
          {steps.map((s) => (
            <li key={s.n} className="bg-background p-8 hover:bg-card/50 transition-colors duration-500 group">
              <div className="text-accent font-display text-sm mb-6 group-hover:tracking-widest transition-all duration-500">
                {s.n}
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{s.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
