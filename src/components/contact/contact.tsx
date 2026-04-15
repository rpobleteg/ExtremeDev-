import { component$, useSignal, $ } from "@builder.io/qwik";
import styles from "./contact.module.css";

export const Contact = component$(() => {
  const status = useSignal<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = $(async (e: SubmitEvent) => {
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    status.value = "sending";

    try {
      const res = await fetch("https://formsubmit.co/ajax/fa4415538714fd49883b8b88ed6bfc81", {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        status.value = "sent";
        form.reset();
      } else {
        status.value = "error";
      }
    } catch {
      status.value = "error";
    }
  });
  return (
    <section class={`section ${styles.contact}`} id="contacto">
      <div class="container">
        <div class={styles.layout}>
          <div class={styles.content}>
            <span class="section-label">Contacto</span>
            <h2 class="section-title">
              ¿Listo para{" "}
              <span class={styles.accent}>acelerar tu negocio</span>?
            </h2>
            <p class="section-subtitle">
              Cuéntanos tu desafío y te mostramos cómo podemos resolverlo.
              Primera consulta sin costo.
            </p>

            <div class={styles.channels}>
              <a
                href="mailto:contacto@extremedev.cl"
                class={styles.channel}
              >
                <span class={styles.channelIcon}>✉️</span>
                <div>
                  <span class={styles.channelLabel}>Email</span>
                  <span class={styles.channelValue}>contacto@extremedev.cl</span>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/ricardo-poblete-galvez-7112a01a4"
                target="_blank"
                rel="noopener noreferrer"
                class={styles.channel}
              >
                <span class={styles.channelIcon}>💼</span>
                <div>
                  <span class={styles.channelLabel}>LinkedIn</span>
                  <span class={styles.channelValue}>Ricardo Poblete</span>
                </div>
              </a>
              <a
                href="https://github.com/rpobleteg"
                target="_blank"
                rel="noopener noreferrer"
                class={styles.channel}
              >
                <span class={styles.channelIcon}>🐙</span>
                <div>
                  <span class={styles.channelLabel}>GitHub</span>
                  <span class={styles.channelValue}>rpobleteg</span>
                </div>
              </a>
            </div>
          </div>

          <form
            class={styles.form}
            preventdefault:submit
            onSubmit$={handleSubmit}
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="Nuevo contacto desde ExtremeDev.cl" />
            <input type="hidden" name="_next" value="https://extremedev.cl/" />

            {status.value === "sent" && (
              <div class={styles.toast}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M6 10l3 3 5-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="10" cy="10" r="9" stroke="currentColor" stroke-width="1.5"/>
                </svg>
                Mensaje enviado correctamente
              </div>
            )}

            {status.value === "error" && (
              <div class={`${styles.toast} ${styles.toastError}`}>
                Error al enviar. Intenta nuevamente.
              </div>
            )}

            <div class={styles.field}>
              <label for="name" class={styles.label}>Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                class={styles.input}
                placeholder="Tu nombre"
                autoComplete="name"
              />
            </div>

            <div class={styles.field}>
              <label for="email" class={styles.label}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                class={styles.input}
                placeholder="tu@email.com"
                autoComplete="email"
              />
            </div>

            <div class={styles.field}>
              <label for="company" class={styles.label}>Empresa (opcional)</label>
              <input
                type="text"
                id="company"
                name="company"
                class={styles.input}
                placeholder="Nombre de tu empresa"
                autoComplete="organization"
              />
            </div>

            <div class={styles.field}>
              <label for="message" class={styles.label}>¿Cómo podemos ayudarte?</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                class={styles.textarea}
                placeholder="Cuéntanos brevemente tu proyecto o desafío..."
              />
            </div>

            <button type="submit" class={`btn btn-primary ${styles.submit}`} disabled={status.value === "sending"}>
              {status.value === "sending" ? "Enviando..." : "Enviar Mensaje"}
              {status.value !== "sending" && (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
});
