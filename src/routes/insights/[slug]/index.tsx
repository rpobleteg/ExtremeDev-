import { component$ } from "@builder.io/qwik";
import { useLocation, Link } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Header } from "~/components/header/header";
import { Footer } from "~/components/footer/footer";
import { PolygonBg } from "~/components/polygon-bg/polygon-bg";
import { getArticleBySlug, articles } from "~/data/articles";
import styles from "./article.module.css";

export default component$(() => {
  const loc = useLocation();
  const article = getArticleBySlug(loc.params.slug);

  if (!article) {
    return (
      <>
        <PolygonBg />
        <Header />
        <main class={styles.page}>
          <div class={`container ${styles.notFound}`}>
            <h1>Artículo no encontrado</h1>
            <Link href="/#insights" class={styles.backLink}>
              ← Volver a Insights
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <PolygonBg />
      <Header />
      <main class={styles.page}>
        <div class={`container ${styles.wrapper}`}>
          <Link href="/#insights" class={styles.backLink}>
            ← Volver a Insights
          </Link>

          <article class={styles.article}>
            <div class={styles.hero}>
              <span class={styles.tag}>{article.tag}</span>
              <h1 class={styles.title}>{article.title}</h1>
              <p class={styles.excerpt}>{article.excerpt}</p>
              <span class={styles.date}>{article.date}</span>
            </div>

            <div class={styles.imageWrapper}>
              <img
                src={article.image}
                alt={article.title}
                class={styles.image}
                width={1080}
                height={1350}
              />
            </div>

            <div class={styles.content}>
              {article.content.map((block, idx) => {
                if (block.type === "heading") {
                  return (
                    <h2 key={idx} class={styles.heading}>
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === "steps") {
                  return (
                    <ol key={idx} class={styles.steps}>
                      {block.items!.map((step, si) => (
                        <li key={si} class={styles.step}>
                          <span class={styles.stepNumber}>{si + 1}</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  );
                }
                return (
                  <p key={idx} class={styles.paragraph}>
                    {block.text}
                  </p>
                );
              })}
            </div>
          </article>

          <div class={styles.bottomNav}>
            <Link href="/#insights" class={styles.backLink}>
              ← Volver a Insights
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
});

export const head: DocumentHead = ({ params }) => {
  const article = getArticleBySlug(params.slug);
  return {
    title: article
      ? `${article.title} — ExtremeDev SpA`
      : "Artículo no encontrado — ExtremeDev SpA",
    meta: [
      {
        name: "description",
        content: article?.excerpt ?? "",
      },
    ],
  };
};
