import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroVisual from "@/assets/hero-visual.png";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-[0.08] pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
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

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight">
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
                <a href="#contato">Solicitar Orçamento</a>
              </Button>
            </div>

            <dl className="mt-14 grid grid-cols-3 gap-6 max-w-md">
              {[
                { k: "6+", v: "anos de experiência" },
                { k: "50+", v: "projetos entregues" },
                { k: "+3x", v: "aumento médio em conversão" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-display font-semibold text-base">{s.k}</dt>
                  <dd className="text-xs text-muted-foreground mt-1 leading-snug">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right — visual */}
          <div className="relative animate-fade-in">
            <div className="relative aspect-square max-w-[560px] mx-auto">
              <div className="absolute -inset-10 hero-glow pointer-events-none animate-pulse-glow" />
              <img
                src={heroVisual}
                alt="Visualização abstrata de uma esfera de dados conectada"
                width={1024}
                height={1024}
                className="relative w-full h-full rounded-full animate-float object-cover border-solid shadow-glow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
