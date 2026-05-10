import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contato" className="py-24 sm:py-32 relative">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card/50 backdrop-blur-xl p-10 sm:p-16 lg:p-20">
          <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl pointer-events-none" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">Contato</p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight">
                Pronto para o <br />
                <span className="text-gradient">próximo nível</span>?
              </h2>
              <p className="mt-6 text-lg text-muted-foreground max-w-md">
                Conta sobre seu projeto. Respondo em até 24h com uma análise inicial gratuita.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:ltbrandingtech@gmail.com"
                className="group flex items-center justify-between rounded-2xl border border-border bg-background/40 p-5 hover:bg-background/80 hover:border-accent/40 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Email</div>
                    <div className="text-sm font-medium">ltbrandingtech@gmail.com</div>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
              </a>

              <a
                href="https://wa.me/5531982381046?utm_source=google&utm_medium=cpc&utm_campaign=portfolio_contato"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-border bg-background/40 p-5 hover:bg-background/80 hover:border-accent/40 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">WhatsApp</div>
                    <div className="text-sm font-medium">+55 31 98238-1046</div>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
              </a>

              <Button
                asChild
                size="lg"
                className="w-full rounded-2xl h-14 text-base bg-gradient-primary hover:opacity-90 shadow-glow"
              >
                <a href="mailto:ltbrandingtech@gmail.com?subject=Novo%20projeto">
                  Iniciar um projeto
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>

              <p className="text-xs text-muted-foreground text-center pt-2">
                Resposta em até 24 horas · Projetos a partir de 02 dias
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
