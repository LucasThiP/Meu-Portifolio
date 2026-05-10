import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import logoLt from "@/assets/logo-lt.png";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#projetos", label: "Projetos" },
  { href: "#processo", label: "Processo" },
  { href: "#contato", label: "Contato" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container">
        <nav
          className={`flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 ${
            scrolled ? "glass shadow-soft" : "bg-transparent"
          }`}
          aria-label="Navegação principal"
        >
          <a href="#top" className="flex items-center gap-3 font-display font-semibold leading-none">
            <span className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-500 via-fuchsia-400 to-purple-500 bg-clip-text text-transparent">
              LT
            </span>
            <span className="flex flex-col">
              <span className="text-sm md:text-base tracking-wide text-foreground/90 font-light">
                Branding &amp; Tech
              </span>
              <span className="text-[10px] md:text-xs tracking-[0.2em] text-purple-300 font-medium mt-0.5">
                DESIGN • DEV • MARKETING
              </span>
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="hover:text-foreground transition-colors duration-300"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <Button asChild size="sm" variant="default" className="rounded-full">
            <a href="#contato">Vamos conversar</a>
          </Button>
        </nav>
      </div>
    </header>
  );
};
