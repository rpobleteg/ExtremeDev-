import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Header } from "~/components/header/header";
import { Hero } from "~/components/hero/hero";
import { Services } from "~/components/services/services";
import { Projects } from "~/components/projects/projects";
import { About } from "~/components/about/about";
import { CtaBanner } from "~/components/cta-banner/cta-banner";
import { Contact } from "~/components/contact/contact";
import { Footer } from "~/components/footer/footer";
import { PolygonBg } from "~/components/polygon-bg/polygon-bg";

export default component$(() => {
  return (
    <>
      <PolygonBg />
      <Header />
      <main>
        <Hero />
        <Services />
        <CtaBanner />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
});

export const head: DocumentHead = {
  title: "ExtremeDev SpA — Automatización IA, Desarrollo Cloud y Consultoría Tecnológica | Valparaíso, Chile",
  meta: [
    {
      name: "description",
      content:
        "ExtremeDev SpA: consultora tecnológica chilena especializada en automatización inteligente con IA, chatbots empresariales, desarrollo cloud (AWS, Azure, GCP) y MVPs express. Reducimos costos y aceleramos tu negocio.",
    },
    {
      name: "keywords",
      content:
        "desarrollo software Chile, automatización IA, chatbot empresarial, consultoría cloud, AWS, desarrollo web, MVP rápido, data as a service, Valparaíso, ExtremeDev",
    },
    { name: "author", content: "ExtremeDev SpA" },
    { name: "robots", content: "index, follow" },
    { property: "og:type", content: "website" },
    { property: "og:locale", content: "es_CL" },
    {
      property: "og:title",
      content: "ExtremeDev SpA — Automatización IA y Consultoría Cloud",
    },
    {
      property: "og:description",
      content:
        "Consultora tecnológica chilena. Automatización inteligente, chatbots con IA, dashboards de datos y desarrollo express de productos digitales.",
    },
    { property: "og:image", content: "/logo.png" },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content: "ExtremeDev SpA — Automatización IA y Consultoría Cloud",
    },
    {
      name: "twitter:description",
      content:
        "Automatizamos y aceleramos tu negocio con tecnología e inteligencia artificial. Valparaíso, Chile.",
    },
  ],
  links: [
    { rel: "icon", type: "image/png", href: "/logo.png" },
  ],
  scripts: [
    {
      props: { type: "application/ld+json" },
      script: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "ExtremeDev SpA",
        legalName: "EXTREMEDEV SpA",
        url: "https://extremedev.cl",
        logo: "https://extremedev.cl/logo.png",
        foundingDate: "2026-04-02",
        founder: {
          "@type": "Person",
          name: "Ricardo Ignacio Poblete Gálvez",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Valparaíso",
          addressRegion: "Valparaíso",
          addressCountry: "CL",
        },
        contactPoint: {
          "@type": "ContactPoint",
          email: "ricardo.ignacio18@hotmail.com",
          contactType: "sales",
          availableLanguage: ["Spanish", "English"],
        },
        sameAs: [
          "https://www.linkedin.com/in/ricardo-poblete-galvez-7112a01a4",
          "https://github.com/rpobleteg",
        ],
        description:
          "Consultora tecnológica chilena especializada en desarrollo de software, automatización inteligente con IA, consultoría cloud y soluciones digitales.",
      }),
    },
    {
      props: { type: "application/ld+json" },
      script: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Servicios de ExtremeDev SpA",
        itemListElement: [
          {
            "@type": "Service",
            position: 1,
            name: "Automatización Inteligente de Operaciones",
            description:
              "Implementación de automatizaciones con IA, integraciones CRM/ERP y flujos inteligentes para reducir costos operativos.",
            provider: { "@type": "Organization", name: "ExtremeDev SpA" },
          },
          {
            "@type": "Service",
            position: 2,
            name: "Chatbots con Conocimiento Empresarial",
            description:
              "Chatbots de IA entrenados con documentos internos, procesos y FAQs reales, integrados a WhatsApp y web.",
            provider: { "@type": "Organization", name: "ExtremeDev SpA" },
          },
          {
            "@type": "Service",
            position: 3,
            name: "Data as a Service — Datos y Decisiones",
            description:
              "Centralización de datos, dashboards ejecutivos, automatización de reportes y alertas inteligentes de negocio.",
            provider: { "@type": "Organization", name: "ExtremeDev SpA" },
          },
          {
            "@type": "Service",
            position: 4,
            name: "MVP Express — Producto Mínimo Viable",
            description:
              "Desarrollo de productos funcionales en 2-4 semanas con stack moderno, deploy en la nube y feedback real.",
            provider: { "@type": "Organization", name: "ExtremeDev SpA" },
          },
        ],
      }),
    },
  ],
};
