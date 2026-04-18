export const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-primary text-accent-foreground text-[10px]">
            AR
          </span>
          <span>© {new Date().getFullYear()} Alex Rivera. Todos os direitos reservados.</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
          <a href="#" className="hover:text-foreground transition-colors">Dribbble</a>
        </div>
      </div>
    </footer>
  );
};
