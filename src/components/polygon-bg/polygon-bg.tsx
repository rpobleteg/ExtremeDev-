import { component$, useVisibleTask$, useSignal } from "@builder.io/qwik";
import styles from "./polygon-bg.module.css";

export const PolygonBg = component$(() => {
  const canvasRef = useSignal<HTMLCanvasElement>();

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    const canvas = canvasRef.value;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = 0;
    let h = 0;

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      color: string;
    }

    const particles: Particle[] = [];
    const CONNECTION_DIST = 150;
    const PARTICLE_COUNT_FACTOR = 8000; // 1 particle per N px²

    function resize() {
      w = canvas!.width = canvas!.offsetWidth;
      h = canvas!.height = canvas!.offsetHeight;
      initParticles();
    }

    function initParticles() {
      particles.length = 0;
      const count = Math.floor((w * h) / PARTICLE_COUNT_FACTOR);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          r: Math.random() * 1.5 + 0.5,
          color: Math.random() > 0.8 ? "rgba(227,27,35," : "rgba(255,255,255,",
        });
      }
    }

    function draw() {
      ctx!.clearRect(0, 0, w, h);

      // Update & draw particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = p.color + "0.7)";
        ctx!.fill();
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DIST) {
            const opacity = (1 - dist / CONNECTION_DIST) * 0.15;
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);

            const isRed =
              particles[i].color.includes("227") ||
              particles[j].color.includes("227");
            ctx!.strokeStyle = isRed
              ? `rgba(227,27,35,${opacity})`
              : `rgba(255,255,255,${opacity})`;
            ctx!.lineWidth = 0.5;
            ctx!.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    }

    resize();
    draw();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  });

  return (
    <canvas
      ref={canvasRef}
      class={styles.canvas}
      aria-hidden="true"
    />
  );
});
