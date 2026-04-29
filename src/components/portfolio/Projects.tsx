import { ArrowUpRight } from "lucide-react";
import p1 from "@/assets/project-contabil.png";
import p2 from "@/assets/project-witch.png";
import p3 from "@/assets/project-3.jpg";

const projects = [
  {
    img: p1,
    title: "L&F Contábil",
    category: "Sistema Web • Performance • SEO • Geração de Leads",
    metric: "+184% aumento na conversão",
    tags: ["Python & UI/UX", "Geração de Leads", "Alta Performance"],
    href: "https://lfgestaocontabil.com.br/",
  },
  {
    img: p2,
    title: "WHITCH LAB STORE",
    category: "E-commerce • UX/UI • Desenvolvimento",
    metric: "Otimizado para aumentar conversão e vendas",
    tags: ["Python & Django", "Branding", "CRO"],
    href: "https://witchlabstore.com.br/produtos/caneca-teste/",
  },
  {
    img: p3,
    title: "Pulse Finance",
    category: "Fintech · Mobile",
    metric: "120k downloads no Q1",
    tags: ["React Native", "Growth", "Onboarding"],
    href: undefined as string | undefined,
  },
];

export const Projects = () => {
  return (
    <section id="projetos" className="py-24 sm:py-32 relative">
      <div className="container">
        <div className="flex items-end justify-between mb-16 gap-6 flex-wrap">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">Projetos selecionados</p>
            <h2 className="font-display text-3xl sm:text-5xl font-semibold leading-tight">
              Trabalho que gera resultado.
            </h2>
          </div>
          <a
            href="#contato"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
          >
            Ver case completo <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => {
            const Wrapper: any = p.href ? "a" : "article";
            const wrapperProps = p.href
              ? { href: p.href, target: "_blank", rel: "noopener noreferrer" }
              : {};
            return (
            <Wrapper
              key={p.title}
              {...wrapperProps}
              className={`group relative block overflow-hidden rounded-2xl border border-border bg-card/40 ${
                i === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className="aspect-[16/10] overflow-hidden bg-secondary">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 sm:p-8 flex items-start justify-between gap-6">
                <div>
                  <div className="text-xs text-muted-foreground mb-2">{p.category}</div>
                  <h3 className="font-display text-2xl font-semibold mb-2">{p.title}</h3>
                  <p className="text-sm text-accent">{p.metric}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground/70 transition-all group-hover:border-accent group-hover:text-accent group-hover:bg-accent/10">
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-12" />
                </div>
              </div>
            </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};
