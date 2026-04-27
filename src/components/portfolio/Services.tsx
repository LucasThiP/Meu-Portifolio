import { Code2, Palette, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Desenvolvimento Full Stack",
    desc: "Crio sites e sistemas rápidos, modernos e preparados para escalar.\nMais do que código, entrego estrutura sólida para o crescimento do seu negócio.",
    items: ["Aplicações web e landing pages", "Integrações e automações\n\n", "Performance, SEO técnico e escalabilidade"],
  },
  {
    icon: Palette,
    title: "Design & Identidade",
    desc: "Desenvolvo interfaces e identidades que posicionam sua marca com clareza e profissionalismo.\nDesign pensado para gerar confiança e conversão.",
    items: ["UI / UX de produto", "Identidade visual Completa", "Design para produtos digitais"],
  },
  {
    icon: TrendingUp,
    title: "Estratégia & Marketing",
    desc: "Estruturo sua presença digital para atrair, converter e crescer de forma consistente.\nDecisões baseadas em dados, não em achismo.",
    items: ["SEO e posicionamento no Google", "Estratégias de aquisição", "Otimização de conversão (CRO)"],
  },
];

export const Services = () => {
  return (
    <section id="servicos" className="py-24 sm:py-32 relative">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">Serviços</p>
          <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
            Soluções completas para crescimento digital.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group relative rounded-2xl border border-border bg-card/40 p-7 backdrop-blur-sm transition-all duration-500 hover:bg-card/70 hover:border-accent/40 hover:-translate-y-1"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-radial opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20 mb-6">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{s.desc}</p>
                <ul className="space-y-2 text-sm">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-2 text-foreground/80">
                      <span className="h-1 w-1 rounded-full bg-accent" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
