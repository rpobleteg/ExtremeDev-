import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";

export const Footer = component$(() => {
  const currentYear = new Date().getFullYear();

  return (
    <footer class={styles.footer}>
      <div class={`container ${styles.inner}`}>
        <div class={styles.brand}>
          <a href="/" class={styles.logo} aria-label="ExtremeDev SpA">
            {/* eslint-disable-next-line qwik/jsx-img */}
            <img src="/logo.png" alt="ExtremeDev" width={32} height={32} class={styles.logoImg} />
            <span class={styles.logoText}>
              Extreme<span class={styles.logoAccent}>Dev</span>
            </span>
          </a>
          <p class={styles.tagline}>
            Consultora tecnológica especializada en automatización inteligente,
            desarrollo cloud y soluciones de IA.
          </p>
        </div>

        <div class={styles.links}>
          <div class={styles.col}>
            <span class={styles.colTitle}>Servicios</span>
            <a href="#servicios">Automatización IA</a>
            <a href="#servicios">Chatbots Empresariales</a>
            <a href="#servicios">Data as a Service</a>
            <a href="#servicios">MVP Express</a>
          </div>
          <div class={styles.col}>
            <span class={styles.colTitle}>Empresa</span>
            <a href="#nosotros">Sobre Nosotros</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#contacto">Contacto</a>
          </div>
          <div class={styles.col}>
            <span class={styles.colTitle}>Redes</span>
            <a href="https://www.linkedin.com/in/ricardo-poblete-galvez-7112a01a4" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/rpobleteg" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>

      <div class={styles.bottom}>
        <div class="container">
          <p class={styles.copy}>
            © {currentYear} ExtremeDev SpA · Valparaíso, Chile
          </p>
        </div>
      </div>
    </footer>
  );
});
