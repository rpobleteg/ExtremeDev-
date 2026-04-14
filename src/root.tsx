import { component$, isDev } from "@builder.io/qwik";
import { QwikCityProvider, RouterOutlet } from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
        {!isDev && (
          <link
            rel="manifest"
            href={`${import.meta.env.BASE_URL}manifest.json`}
          />
        )}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18076908325"
        ></script>
        <script
          dangerouslySetInnerHTML={`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18076908325');
          `}
        />
        <RouterHead />
      </head>
      <body lang="es">
        <RouterOutlet />
        <a
          href="https://wa.me/56945292580"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
          class="whatsapp-fab"
        >
          <svg viewBox="0 0 32 32" width="28" height="28" fill="#fff">
            <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.502 1.14 6.742 3.072 9.378L1.062 31.16l5.964-1.97A15.91 15.91 0 0 0 16.004 32C24.826 32 32 24.826 32 16.004 32 7.176 24.826 0 16.004 0Zm9.302 22.602c-.392 1.106-1.942 2.024-3.186 2.292-.854.182-1.968.326-5.72-1.23-4.802-1.99-7.892-6.862-8.132-7.18-.23-.318-1.936-2.578-1.936-4.916s1.226-3.488 1.66-3.966c.434-.478.948-.598 1.264-.598.316 0 .632.004.906.016.292.014.682-.11 1.066.814.392.948 1.338 3.268 1.456 3.504.118.238.198.514.04.83-.158.318-.238.514-.474.794-.238.278-.498.622-.712.834-.238.238-.484.496-.208.974.278.478 1.234 2.034 2.65 3.296 1.818 1.62 3.35 2.124 3.828 2.36.478.238.756.198 1.034-.118.278-.318 1.194-1.392 1.512-1.868.318-.478.636-.398 1.074-.238.434.158 2.754 1.3 3.228 1.536.478.238.794.356.912.554.118.198.118 1.148-.274 2.254l-.002.006Z" />
          </svg>
        </a>
      </body>
    </QwikCityProvider>
  );
});
