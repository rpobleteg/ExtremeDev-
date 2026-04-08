import { component$ } from "@builder.io/qwik";
import styles from "./hero.module.css";

export const Hero = component$(() => {
  return (
    <section class={styles.hero} id="inicio">
      <div class={`container ${styles.inner}`}>
        <div class={styles.badge}>
          <span class={styles.badgeDot} />
          Disponibles para nuevos proyectos
        </div>

        <h1 class={styles.title}>
          Automatizamos y aceleramos{" "}
          <span class={styles.accent}>tu negocio</span>{" "}
          con tecnología e inteligencia artificial
        </h1>

        <p class={styles.subtitle}>
          Consultora tecnológica chilena especializada en automatización inteligente,
          desarrollo cloud y soluciones de IA. Reducimos costos y tiempos de operación
          para que escales sin límites.
        </p>

        <div class={styles.actions}>
          <a href="#contacto" class="btn btn-primary">
            Agendar Consulta Gratis
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
          <a href="#servicios" class="btn btn-outline">
            Ver Servicios
          </a>
        </div>

        <div class={styles.stats}>
          <div class={styles.stat}>
            <span class={styles.statNumber}>5+</span>
            <span class={styles.statLabel}>Años de experiencia</span>
          </div>
          <div class={styles.statDivider} />
          <div class={styles.stat}>
            <span class={styles.statNumber}>6+</span>
            <span class={styles.statLabel}>Proyectos entregados</span>
          </div>
          <div class={styles.statDivider} />
          <div class={styles.stat}>
            <span class={styles.statNumber}>AWS</span>
            <span class={styles.statLabel}>Cloud Certified</span>
          </div>
        </div>
      </div>

      {/* Ambient glow */}
      <div class={styles.glowRed} aria-hidden="true" />
      <div class={styles.glowDark} aria-hidden="true" />
    </section>
  );
});
