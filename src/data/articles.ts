export interface ArticleBlock {
  type: "paragraph" | "heading" | "steps";
  text?: string;
  items?: string[];
}

export interface Article {
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  previewImage: string;
  image: string;
  date: string;
  content: ArticleBlock[];
}

export const articles: Article[] = [
  {
    slug: "quiero-una-app-tipo-uber-con-ia",
    tag: "Metodología",
    title: '"Quiero una app tipo Uber + IA" — ¿Y ahora qué?',
    excerpt:
      "Si no puedes definir bien tu idea, no es tu culpa. Te mostramos el flujo que usamos para pasar de la confusión a una solución real: empatizar, idear, prototipar, probar y lanzar.",
    previewImage: "/post-problema-solucion.svg",
    image: "/post-afiche-metodologia.svg",
    date: "14 Abr 2026",
    content: [
      {
        type: "paragraph",
        text: 'Muchas veces un cliente llega con una idea como: "Quiero hacer una app tipo Uber pero con IA". Suena claro, pero cuando intentas profundizar aparecen más preguntas que respuestas.',
      },
      {
        type: "heading",
        text: "Las preguntas que nadie se hace",
      },
      {
        type: "paragraph",
        text: '¿Cómo empiezo? ¿Necesito realmente IA? ¿Qué es realmente "tipo Uber"? ¿Al menos sé que necesito una app? Si no puedes definir esto con claridad, no es tu culpa — significa que necesitas ayuda para entender tu problema antes de pensar en la solución.',
      },
      {
        type: "heading",
        text: "El flujo que usamos en ExtremeDev",
      },
      {
        type: "paragraph",
        text: "Uno de los mejores flujos para llegar a una solución real parte desde un lugar que casi no existe en el mundo corporativo: la empatía. Nos sentamos contigo, entendemos tu contexto, tus dolores y tus objetivos reales.",
      },
      {
        type: "steps",
        items: [
          "Empatizar — Entender el problema desde tu perspectiva, no desde la tecnología.",
          "Idear — Explorar múltiples soluciones posibles sin casarnos con ninguna.",
          "Prototipar — Construir algo tangible y rápido para visualizar la idea.",
          "Probar — Validar con usuarios reales si la solución funciona.",
          "¡Lanzar! — Llevar la solución al mundo real con confianza.",
        ],
      },
      {
        type: "paragraph",
        text: "Este método nos permite acompañarte desde la confusión inicial hasta un producto funcionando, sin perder meses ni presupuesto en algo que nadie pidió.",
      },
      {
        type: "heading",
        text: "¿Por qué funciona?",
      },
      {
        type: "paragraph",
        text: "Porque no empezamos escribiendo código. Empezamos escuchando. La tecnología es una herramienta, no el punto de partida. Cuando entiendes el problema primero, la solución correcta aparece sola.",
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
