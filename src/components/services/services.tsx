import { component$ } from "@builder.io/qwik";
import styles from "./services.module.css";

const services = [
  {
    icon: "⚡",
    tag: "AI OPS",
    title: "Automatización Inteligente de Operaciones",
    description:
      "Implementamos automatizaciones reales con IA, integraciones CRM/ERP y flujos inteligentes. Reducimos tu trabajo manual hasta un 30% en 30 días.",
    features: [
      "Atención automática por WhatsApp",
      "Generación de reportes sin intervención",
      "Seguimiento de clientes automatizado",
      "Integración con tus herramientas actuales",
    ],
    result: "Reducción de hasta 30% en trabajo manual",
  },
  {
    icon: "🤖",
    tag: "CHATBOTS IA",
    title: "Asistentes con Conocimiento Empresarial",
    description:
      "Chatbots entrenados con tus documentos, procesos y FAQs reales. Un empleado digital que responde como tu mejor trabajador, 24/7.",
    features: [
      "Entrenado con datos de tu empresa",
      "Integración WhatsApp y Web",
      "Soporte al cliente automatizado",
      "Ventas y capacitación interna",
    ],
    result: "Atención 24/7 sin costo de personal adicional",
  },
  {
    icon: "📊",
    tag: "DATA SERVICE",
    title: "Datos + Decisiones como Servicio",
    description:
      "Centralizamos tus datos, creamos dashboards claros y automatizamos reportes. Te decimos exactamente dónde estás perdiendo dinero.",
    features: [
      "Dashboards ejecutivos en tiempo real",
      "ETL y pipelines de datos automatizados",
      "Alertas inteligentes de negocio",
      "Integración con cualquier fuente de datos",
    ],
    result: "Decisiones basadas en datos en minutos, no días",
  },
  {
    icon: "🚀",
    tag: "MVP EXPRESS",
    title: "Producto Mínimo Viable en 2–4 Semanas",
    description:
      "Convertimos tu idea en una solución lista para mostrar, probar con clientes y tomar decisiones rápidas sin perder meses en desarrollo.",
    features: [
      "Prototipo funcional completo",
      "Deploy en la nube listo para producción",
      "Stack moderno y escalable",
      "Iteración basada en feedback real",
    ],
    result: "De idea a producto funcional en menos de 30 días",
  },
];

export const Services = component$(() => {
  return (
    <section class={`section ${styles.services}`} id="servicios">
      <div class="container">
        <div class={styles.header}>
          <span class="section-label">Nuestros Servicios</span>
          <h2 class="section-title">
            Soluciones que generan{" "}
            <span class={styles.accent}>resultados reales</span>
          </h2>
          <p class="section-subtitle">
            No vendemos tecnología. Vendemos ahorro de tiempo, reducción de costos
            y crecimiento acelerado para tu negocio.
          </p>
        </div>

        <div class={styles.grid}>
          {services.map((service) => (
            <article key={service.tag} class={styles.card}>
              <div class={styles.cardHeader}>
                <span class={styles.cardIcon}>{service.icon}</span>
                <span class={styles.cardTag}>{service.tag}</span>
              </div>
              <h3 class={styles.cardTitle}>{service.title}</h3>
              <p class={styles.cardDesc}>{service.description}</p>
              <ul class={styles.features}>
                {service.features.map((f) => (
                  <li key={f} class={styles.feature}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3.5 3.5L13 5" stroke="var(--color-red)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <div class={styles.cardResult}>
                <span class={styles.resultLabel}>→ {service.result}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
});
