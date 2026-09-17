import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Work } from "@/components/sections/Work";
import { Experience } from "@/components/sections/Experience";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Marquee } from "@/components/ui";
import { marquee, moreWork, projects, site } from "@/lib/data";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    email: site.email,
    telephone: "+918685011980",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gurugram",
      addressCountry: "IN",
    },
    url: site.linkedin,
    sameAs: [site.linkedin],
    worksFor: {
      "@type": "Organization",
      name: site.company,
    },
    knowsAbout: marquee,
    hasOccupation: {
      "@type": "Occupation",
      name: site.role,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Hero />
        <Marquee
          items={[
            ...projects.map((project) => project.name),
            ...moreWork.map((item) => item.name),
            ...marquee,
          ]}
        />
        <About />
        <Skills />
        <Work />
        <Experience />
        <Process />
        <Services />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
