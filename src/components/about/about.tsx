import { component$ } from "@builder.io/qwik";
import styles from "./about.module.css";

const techStack = [
  { category: "Backend", items: ["Node.js", "NestJS", "Python", "FastAPI", "Django", "TypeScript"] },
  { category: "Frontend", items: ["React", "Next.js", "Vue.js 3", "Qwik", "Tailwind CSS"] },
  { category: "Cloud", items: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "CI/CD"] },
  { category: "Data & IA", items: ["LangChain", "Google Gemini", "PostgreSQL", "DynamoDB", "PySpark"] },
];

const team = [
  {
    name: "Ricardo Poblete",
    role: "Founder & CTO",
    photo: "/yo.png",
    bio: "Desarrollador Fullstack, especialista Cloud y DevOps con más de 5 años de experiencia en proyectos gubernamentales, sector financiero y startups. Certificado AWS. Arquitectura limpia, DDD, microservicios y despliegue profesional en la nube.",
    linkedin: "https://www.linkedin.com/in/ricardo-poblete-galvez-7112a01a4",
  },
  {
    name: "Luis Velásquez",
    role: "Data Engineer",
    photo: "/luis.jpg",
    bio: "Experto en procesos ETL, diseño y optimización de bases de datos, y soluciones en AWS. Especialista en pipelines de datos escalables y arquitecturas orientadas a analítica empresarial.",
    linkedin: "",
  },
];

export const About = component$(() => {
  return (
    <section class={`section ${styles.about}`} id="nosotros">
      <div class="container">
        <div class={styles.header}>
          <span class="section-label">Sobre ExtremeDev</span>
          <h2 class="section-title">
            Tecnología con{" "}
            <span class={styles.accent}>propósito de negocio</span>
          </h2>
        </div>

        <div class={styles.layout}>
          <div class={styles.content}>
            <p class={styles.text}>
              <strong>ExtremeDev SpA</strong> es una consultora tecnológica chilena constituida
              en Valparaíso, especializada en desarrollo de software, consultoría cloud,
              inteligencia artificial y automatización de procesos.
            </p>
            <p class={styles.text}>
              Nuestro enfoque: código limpio, arquitectura sólida (Hexagonal, DDD, SOLID,
              Microservicios) y despliegue profesional en la nube con pipelines CI/CD
              automatizados. Cada proyecto incluye documentación completa y transparente.
            </p>

            <div class={styles.info}>
              <div class={styles.infoItem}>
                <span class={styles.infoLabel}>Domicilio</span>
                <span class={styles.infoValue}>Valparaíso, Chile</span>
              </div>
              <div class={styles.infoItem}>
                <span class={styles.infoLabel}>Fundación</span>
                <span class={styles.infoValue}>Abril 2026</span>
              </div>
              <div class={styles.infoItem}>
                <span class={styles.infoLabel}>Certificación</span>
                <span class={styles.infoValue}>AWS Cloud Practitioner</span>
              </div>
            </div>
          </div>

          <div class={styles.stack}>
            <h3 class={styles.stackTitle}>Stack Tecnológico</h3>
            {techStack.map((group) => (
              <div key={group.category} class={styles.stackGroup}>
                <span class={styles.stackCategory}>{group.category}</span>
                <div class={styles.stackItems}>
                  {group.items.map((item) => (
                    <span key={item} class={styles.stackItem}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team section */}
        <div class={styles.teamSection}>
          <h3 class={styles.teamTitle}>Nuestro Equipo</h3>
          <div class={styles.teamGrid}>
            {team.map((member) => (
              <div key={member.name} class={styles.teamCard}>
                <div class={styles.teamPhotoWrap}>
                  <img
                    src={member.photo}
                    alt={member.name}
                    width={120}
                    height={120}
                    class={styles.teamPhoto}
                    loading="lazy"
                  />
                </div>
                <div class={styles.teamInfo}>
                  <h4 class={styles.teamName}>{member.name}</h4>
                  <span class={styles.teamRole}>{member.role}</span>
                  <p class={styles.teamBio}>{member.bio}</p>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      class={styles.teamLink}
                    >
                      LinkedIn →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});
