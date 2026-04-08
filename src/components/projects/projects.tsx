import { component$ } from "@builder.io/qwik";
import styles from "./projects.module.css";

const projects = [
  {
    tag: "PROYECTO ACTUAL",
    title: "AFP Cuprum — Arquitectura Cloud AWS",
    description:
      "Desarrollo y migración de servicios a AWS para AFP Cuprum, apoyando la reforma previsional. Arquitectura serverless con Lambda, Step Functions y API Gateway. Pipelines de datos con Glue, Athena y PySpark.",
    techs: ["AWS Lambda", "Step Functions", "CloudFormation", "CDK", "Python", "Docker", "K8s"],
    sector: "Sector Financiero",
    image: "/aws-cuprum-arch.svg",
  },
  {
    tag: "IA / GEOESPACIAL",
    title: "GeoVisor — Análisis Geoespacial Territorial",
    description:
      "Plataforma web enterprise para análisis geoespacial con validación ambiental automatizada, reportes PDF y evaluación IA con Google Gemini. Soporta GeoJSON, KML, KMZ y coordenadas UTM.",
    techs: ["React 19", "FastAPI", "Python", "MapLibre GL", "GeoPandas", "Google Gemini AI"],
    sector: "GeoTech / Ambiental",
    image: "/geovisor-1.png",
  },
  {
    tag: "GOBIERNO",
    title: "Municipalidad de Temuco — Videoconferencia",
    description:
      "Plataforma de programación de videoconferencias con paneles administrativos y ciudadanos. Integración con Transbank WebPay para pagos y plataforma Zoom.",
    techs: ["Django", "Python", "PostgreSQL", "Docker", "Transbank", "Zoom API"],
    sector: "Gobierno / Público",
    image: "/logo.png",
  },
  {
    tag: "GOBIERNO",
    title: "Municipalidad de Pichilemu — Seguridad Ciudadana",
    description:
      "Plataforma enfocada en mejorar la seguridad ciudadana. Desplegada en servidor VPS Linux con diseño de solución documentado con diagramas BPMN.",
    techs: ["Django", "REST Framework", "PostgreSQL", "Python", "Nginx"],
    sector: "Gobierno / Seguridad",
    image: "/pichilemu-preview.jpeg",
  },
  {
    tag: "IA / CHATBOT",
    title: "ValebotIA — Chatbot Inteligente",
    description:
      "Frontend de chatbot con inteligencia artificial basado en LangChain y LangGraph. Interfaz moderna con Next.js 14, integración con Supabase.",
    techs: ["Next.js 14", "React 19", "LangChain", "Supabase", "TypeScript", "Tailwind"],
    sector: "IA / SaaS",
    image: "/logo.png",
  },
  {
    tag: "GOBIERNO",
    title: "Proyecto ChileCompra",
    description:
      "Desarrollo de especificaciones técnicas y solución de software para la plataforma de compras públicas ChileCompra.",
    techs: ["Análisis", "Especificaciones", "Documentación"],
    sector: "Gobierno / Compras Públicas",
    image: "/logo.png",
  },
];

export const Projects = component$(() => {
  return (
    <section class={`section ${styles.projects}`} id="proyectos">
      <div class="container">
        <div class={styles.header}>
          <span class="section-label">Proyectos & Casos de Éxito</span>
          <h2 class="section-title">
            Resultados reales para{" "}
            <span class={styles.accent}>clientes reales</span>
          </h2>
          <p class="section-subtitle">
            Hemos trabajado con instituciones gubernamentales, sector financiero
            y startups tecnológicas entregando soluciones cloud escalables.
          </p>
        </div>

        <div class={styles.grid}>
          {projects.map((project) => (
            <article key={project.title} class={styles.card}>
              <div class={styles.imageWrap}>
                <img
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={240}
                  class={styles.image}
                  loading="lazy"
                />
                <span class={styles.sector}>{project.sector}</span>
              </div>
              <div class={styles.cardBody}>
                <span class={styles.tag}>{project.tag}</span>
                <h3 class={styles.cardTitle}>{project.title}</h3>
                <p class={styles.cardDesc}>{project.description}</p>
                <div class={styles.techs}>
                  {project.techs.map((tech) => (
                    <span key={tech} class={styles.tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
});
