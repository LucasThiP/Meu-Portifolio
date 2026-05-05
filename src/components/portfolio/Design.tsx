import identity from "@/assets/design-identity.jpg";
import social from "@/assets/design-social.jpg";
import uiux from "@/assets/design-uiux.jpg";
import materials from "@/assets/design-materials.jpg";

const cards = [
  {
    img: identity,
    title: "Identidade Visual",
    desc: "Criação de marcas completas, com logo, cores e tipografia alinhadas ao posicionamento do negócio.",
  },
  {
    img: social,
    title: "Design para Redes Sociais",
    desc: "Desenvolvimento de artes estratégicas para fortalecer presença digital e engajamento.",
  },
  {
    img: uiux,
    title: "UI/UX Design",
    desc: "Interfaces modernas e funcionais, focadas em usabilidade e experiência do usuário.",
  },
  {
    img: materials,
    title: "Materiais Digitais",
    desc: "Criação de peças visuais para campanhas, apresentações e comunicação digital.",
  },
];

export const Design = () => {
  return (
    <section id="design" className="py-24 sm:py-32 relative">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">Design</p>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold leading-tight mb-5">
            Design que posiciona marcas
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Identidades visuais e materiais digitais pensados para fortalecer marcas, aumentar percepção de valor e gerar resultados reais.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c) => (
            <article
              key={c.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/40 transition-all duration-500 hover:border-accent/40 hover:-translate-y-1"
            >
              <div className="aspect-[4/5] overflow-hidden bg-secondary">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="font-display text-xl sm:text-2xl text-gradient max-w-3xl mx-auto leading-snug">
            "Integrando design, tecnologia e estratégia para criar soluções completas."
          </p>
        </div>
      </div>
    </section>
  );
};
