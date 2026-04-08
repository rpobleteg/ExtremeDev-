import { component$ } from "@builder.io/qwik";
import styles from "./cta-banner.module.css";

export const CtaBanner = component$(() => {
  return (
    <section class={styles.cta}>
      <div class={`container ${styles.inner}`}>
        <div class={styles.content}>
          <h2 class={styles.title}>
            Acelera el tiempo de entrega de tu próximo producto digital
          </h2>
          <p class={styles.subtitle}>
            Cuéntanos qué necesitas y te mostramos cómo podemos ayudarte.
          </p>
        </div>
        <a href="#contacto" class="btn btn-primary">
          Agendar Consulta
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  );
});
