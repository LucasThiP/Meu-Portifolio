import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroVisual from "@/assets/hero-visual.jpg";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-[0.15] pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — content */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur px-3 py-1.5 text-xs text-muted-foreground mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Disponível para novos projetos
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
              Sua visão, minha execução.<br />
              Construindo o futuro do seu negócio através da união estratégica entre{" "}
              <span className="text-gradient">tecnologia, design e marketing</span>.
            </h1>

            <p className="mt-8 text-lg sm:text-xl font-light text-muted-foreground max-w-xl leading-loose tracking-wide">
              Desenvolvedor Full Stack <span className="text-foreground/40">|</span> Designer{" "}
              <span className="text-foreground/40">|</span> Estrategista
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button size="lg" asChild className="rounded-full group bg-gradient-primary hover:opacity-90 shadow-glow">
                <a href="#projetos">
                  Ver Projetos
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full border-border bg-card/40 backdrop-blur hover:bg-card/70">
                <a href="#contato">Falar comigo</a>
              </Button>
            </div>

            <dl className="mt-14 grid grid-cols-3 gap-6 max-w-md">
              {[
                { k: "8+", v: "anos de experiência" },
                { k: "60+", v: "produtos lançados" },
                { k: "3.4×", v: "ROI médio gerado" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-2xl font-semibold">{s.k}</dt>
                  <dd className="text-xs text-muted-foreground mt-1 leading-snug">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right — visual */}
          <div className="relative animate-fade-in">
            <div className="relative aspect-square max-w-[560px] mx-auto">
              <div className="absolute inset-0 rounded-full bg-accent/10 blur-3xl animate-pulse-glow" />
              <img
                src={heroVisual}
                alt="Visualização abstrata de uma esfera de dados conectada"
                width={1024}
                height={1024}
                className="relative w-full h-full object-cover rounded-full animate-float"
              />
              <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 shadow-card flex items-center gap-3 animate-fade-up">
                <Sparkles className="h-4 w-4 text-accent" />
                <div>
                  <div className="text-xs text-muted-foreground">Lighthouse</div>
                  <div className="text-sm font-medium">100 / 100</div>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 glass rounded-2xl px-4 py-3 shadow-card animate-fade-up">
                <div className="text-xs text-muted-foreground">Tempo médio de carga</div>
                <div className="text-sm font-medium">0.6s</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
