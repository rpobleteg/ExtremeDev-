import { component$, useSignal } from "@builder.io/qwik";
import styles from "./insights.module.css";

const articles = [
  {
    tag: "Metodología",
    title: "\"Quiero una app tipo Uber + IA\" — ¿Y ahora qué?",
    excerpt:
      "Si no puedes definir bien tu idea, no es tu culpa. Te mostramos el flujo que usamos para pasar de la confusión a una solución real: empatizar, idear, prototipar, probar y lanzar.",
    image: "/post-afiche-metodologia.svg",
    date: "14 Abr 2026",
    content: [
      {
        type: "paragraph" as const,
        text: "Muchas veces un cliente llega con una idea como: \"Quiero hacer una app tipo Uber pero con IA\". Suena claro, pero cuando intentas profundizar aparecen más preguntas que respuestas.",
      },
      {
        type: "heading" as const,
        text: "Las preguntas que nadie se hace",
      },
      {
        type: "paragraph" as const,
        text: "¿Cómo empiezo? ¿Necesito realmente IA? ¿Qué es realmente \"tipo Uber\"? ¿Al menos sé que necesito una app? Si no puedes definir esto con claridad, no es tu culpa — significa que necesitas ayuda para entender tu problema antes de pensar en la solución.",
      },
      {
        type: "heading" as const,
        text: "El flujo que usamos en ExtremeDev",
      },
      {
        type: "paragraph" as const,
        text: "Uno de los mejores flujos para llegar a una solución real parte desde un lugar que casi no existe en el mundo corporativo: la empatía. Nos sentamos contigo, entendemos tu contexto, tus dolores y tus objetivos reales.",
      },
      {
        type: "steps" as const,
        items: [
          "Empatizar — Entender el problema desde tu perspectiva, no desde la tecnología.",
          "Idear — Explorar múltiples soluciones posibles sin casarnos con ninguna.",
          "Prototipar — Construir algo tangible y rápido para visualizar la idea.",
          "Probar — Validar con usuarios reales si la solución funciona.",
          "¡Lanzar! — Llevar la solución al mundo real con confianza.",
        ],
      },
      {
        type: "paragraph" as const,
        text: "Este método nos permite acompañarte desde la confusión inicial hasta un producto funcionando, sin perder meses ni presupuesto en algo que nadie pidió.",
      },
      {
        type: "heading" as const,
        text: "¿Por qué funciona?",
      },
      {
        type: "paragraph" as const,
        text: "Porque no empezamos escribiendo código. Empezamos escuchando. La tecnología es una herramienta, no el punto de partida. Cuando entiendes el problema primero, la solución correcta aparece sola.",
      },
    ],
  },
];

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
  const openArticle = useSignal<number | null>(null);

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
          {articles.map((article, i) => (
            <article
              key={article.title}
              class={styles.card}
              onClick$={() => (openArticle.value = i)}
            >
              <img
                src={article.image}
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
            </article>
          ))}
        </div>
      </div>

      {/* Modal */}
      {openArticle.value !== null && (
        <div
          class={styles.overlay}
          onClick$={(e) => {
            if ((e.target as HTMLElement).classList.contains(styles.overlay)) {
              openArticle.value = null;
            }
          }}
        >
          <div class={styles.modal}>
            <button
              type="button"
              class={styles.modalClose}
              onClick$={() => (openArticle.value = null)}
              aria-label="Cerrar"
            >
              ✕
            </button>

            <img
              src={articles[openArticle.value].image}
              alt={articles[openArticle.value].title}
              class={styles.modalImage}
              width={800}
              height={450}
            />

            <div class={styles.modalBody}>
              <span class={styles.cardTag}>
                {articles[openArticle.value].tag}
              </span>
              <h2 class={styles.modalTitle}>
                {articles[openArticle.value].title}
              </h2>
              <span class={styles.modalDate}>
                {articles[openArticle.value].date}
              </span>

              <div class={styles.modalContent}>
                {articles[openArticle.value].content.map((block, idx) => {
                  if (block.type === "heading") {
                    return (
                      <h3 key={idx} class={styles.modalHeading}>
                        {block.text}
                      </h3>
                    );
                  }
                  if (block.type === "steps") {
                    return (
                      <ol key={idx} class={styles.modalSteps}>
                        {block.items!.map((step, si) => (
                          <li key={si} class={styles.modalStep}>
                            <span class={styles.stepNumber}>{si + 1}</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    );
                  }
                  return (
                    <p key={idx} class={styles.modalParagraph}>
                      {block.text}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
});
