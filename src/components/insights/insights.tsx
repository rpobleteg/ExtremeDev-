import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import styles from "./insights.module.css";
import { articles } from "~/data/articles";

const values = [
  {
    icon: "🤝",
    name: "Empatía",
    description:
      "Antes de escribir una línea de código, nos sentamos a entender tu realidad. Tu problema es nuestro punto de partida.",
  },
  {
    icon: "🪟",
    name: "Transparencia",
    description:
      "Sin letra chica ni sorpresas. Sabrás exactamente qué estamos haciendo, por qué y cuánto cuesta en cada momento.",
  },
  {
    icon: "💬",
    name: "Comunicación",
    description:
      "Hablamos claro, en tu idioma, no en jerga técnica. Cada decisión se conversa y cada avance se comparte contigo.",
  },
  {
    icon: "✦",
    name: "Calidad",
    description:
      "No entregamos cosas a medias. Cada solución está pensada para funcionar bien hoy y escalar mañana.",
  },
];

export const Insights = component$(() => {
  return (
    <section class={`section ${styles.insights}`} id="insights">
      <div class="container">
        <div class={styles.header}>
          <span class="section-label">Insights</span>
          <h2 class="section-title">
            Ideas y <span class={styles.accent}>metodologías</span> que usamos
          </h2>
          <p class="section-subtitle">
            No somos una consultora que te entrega un documento y desaparece.
            Te acompañamos en todo el proceso — desde entender tu problema
            hasta ver tu solución funcionando.
          </p>
        </div>

        {/* Valores */}
        <div class={styles.values}>
          {values.map((value) => (
            <div key={value.name} class={styles.valueCard}>
              <span class={styles.valueIcon}>{value.icon}</span>
              <h3 class={styles.valueName}>{value.name}</h3>
              <p class={styles.valueDesc}>{value.description}</p>
            </div>
          ))}
        </div>

        {/* Artículos */}
        <h3 class={styles.articlesHeading}>Desde nuestro enfoque</h3>
        <div class={styles.grid}>
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}/`}
              class={styles.card}
            >
              <img
                src={article.previewImage}
                alt={article.title}
                class={styles.cardImage}
                width={600}
                height={338}
                loading="lazy"
              />
              <div class={styles.cardBody}>
                <span class={styles.cardTag}>{article.tag}</span>
                <h3 class={styles.cardTitle}>{article.title}</h3>
                <p class={styles.cardExcerpt}>{article.excerpt}</p>
              </div>
              <div class={styles.cardFooter}>
                <span class={styles.cardDate}>{article.date}</span>
                <span class={styles.cardLink}>Leer artículo →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
});
