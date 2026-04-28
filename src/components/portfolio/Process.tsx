const steps = [
  { n: "01", t: "Diagnóstico", d: "Entendo seu negócio, público e objetivos.\nIdentifico oportunidades reais de crescimento antes de qualquer execução." },
  { n: "02", t: "Direcionamento", d: "Defino a melhor estratégia unindo design, tecnologia e marketing.\nTudo com foco em posicionamento, performance e conversão." },
  { n: "03", t: "Construção", d: "Desenvolvo a solução completa, do design ao código.\nTudo pensado para ser rápido, funcional e preparado para escalar." },
  { n: "04", t: "Crescimento", d: "Após o lançamento, otimizo continuamente com base em dados.\nO foco não é só entregar, é fazer crescer." },
];

export const Process = () => {
  return (
    <section id="processo" className="py-24 sm:py-32">
      <div className="container">
        <div className="text-sm">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">PROCESSO</p>
          <h2 className="font-display text-3xl font-semibold leading-tight sm:text-7xl">
            Um processo claro, direto ao resultado.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mb-16">
            Sem etapas desnecessárias. Cada fase pensada para gerar resultado.
          </p>
        </div>

        <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden">
          {steps.map((s) => (
            <li key={s.n} className="bg-background p-8 hover:bg-card/50 transition-colors duration-500 group">
              <div className="text-accent font-display text-sm mb-6 group-hover:tracking-widest transition-all duration-500">
                {s.n}
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{s.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
