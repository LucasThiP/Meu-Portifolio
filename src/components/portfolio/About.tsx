export const About = () => {
  return (
    <section id="sobre" className="py-24 sm:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">Sobre</p>
            <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
              Três disciplinas, <br />
              um único objetivo: <span className="text-gradient">crescimento</span>.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p className="text-xl font-sans font-normal text-justify">
              Atuo há mais de 6 anos com design gráfico e marketing digital, criando identidades visuais e estratégias que posicionam marcas de forma sólida no mercado.
              <br /><br />
              Nos últimos anos, expandi minha atuação para o desenvolvimento Full Stack, construindo sites, sistemas e aplicações modernas com foco em performance, usabilidade e conversão.
              <br /><br />
              Ao longo da minha trajetória, trabalhei com diferentes empresas e startups, o que me permitiu desenvolver uma visão estratégica e prática sobre o digital.
              <br /><br />
              Hoje, uno design, desenvolvimento e marketing para entregar soluções completas — com estética, funcionalidade e foco real em crescimento.
            </p>
            <p className="font-sans font-bold text-white">
              Design que posiciona. Tecnologia que sustenta. Estratégia que cresce.
            </p>
            <div className="flex flex-wrap gap-2 pt-4">
              {["JavaScript", "React", "Next.js", "WordPress", "Python & UI/UX", "Python / Django", "HTML ", "CSS", "Wagtail", "PhotoShop", "Canva", "SEO", "APIs"].map((tag) => (
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
