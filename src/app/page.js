import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata = {
  title: "Home | Adil Khan",
  description:
    "Welcome to Adil Khan's portfolio - Full-stack developer building modern web experiences with Next.js and React.",
};
export default function HomePage() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <FeaturedProjects />
        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}
