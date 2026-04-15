import { component$, useSignal, useOnWindow, $ } from "@builder.io/qwik";
import styles from "./header.module.css";

export const Header = component$(() => {
  const isScrolled = useSignal(false);
  const isMenuOpen = useSignal(false);

  useOnWindow(
    "scroll",
    $(() => {
      isScrolled.value = window.scrollY > 20;
    })
  );

  const navLinks = [
    { label: "Servicios", href: "#servicios" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Insights", href: "#insights" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header class={[styles.header, isScrolled.value && styles.scrolled]}>
      <div class={`container ${styles.inner}`}>
        <a href="/" class={styles.logo} aria-label="ExtremeDev SpA — Inicio">
          {/* eslint-disable-next-line qwik/jsx-img */}
          <img
            src="/logo.png"
            alt="ExtremeDev SpA"
            width={40}
            height={40}
            class={styles.logoImg}
          />
          <span class={styles.logoText}>
            Extreme<span class={styles.logoAccent}>Dev</span>
          </span>
        </a>

        <nav class={[styles.nav, isMenuOpen.value && styles.navOpen]}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              class={styles.navLink}
              onClick$={() => (isMenuOpen.value = false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contacto" class={`btn btn-primary ${styles.navCta}`}>
            Agendar Consulta
          </a>
        </nav>

        <button
          type="button"
          class={[styles.burger, isMenuOpen.value && styles.burgerOpen]}
          onClick$={() => (isMenuOpen.value = !isMenuOpen.value)}
          aria-label="Menú"
          aria-expanded={isMenuOpen.value}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
});
