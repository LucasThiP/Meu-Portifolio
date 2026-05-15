import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Services } from "@/components/portfolio/Services";
import { Projects } from "@/components/portfolio/Projects";
import { Design } from "@/components/portfolio/Design";
import { Process } from "@/components/portfolio/Process";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <link rel="canonical" href="https://ltbrandingtech.com.br/" />
      </Helmet>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Design />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
