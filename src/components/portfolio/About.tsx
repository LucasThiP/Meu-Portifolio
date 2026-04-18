export const About = () => {
  return (
    <section id="sobre" className="py-24 sm:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">Sobre</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight">
              Três disciplinas, <br />
              um único objetivo: <span className="text-gradient">crescimento</span>.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              Comecei como engenheiro, virei designer por necessidade e mergulhei em marketing
              quando percebi que produto bonito sem distribuição não escala. Hoje uno as três
              áreas para entregar resultado de ponta a ponta.
            </p>
            <p>
              Trabalho com fundadores, equipes de produto e marcas que valorizam{" "}
              <span className="text-foreground">execução técnica impecável</span>, design
              minimalista e narrativa que move pessoas a agir.
            </p>
            <div className="flex flex-wrap gap-2 pt-4">
              {["TypeScript", "React", "Next.js", "Node", "Postgres", "Figma", "Webflow", "SEO", "GA4", "Meta Ads"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-foreground/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
