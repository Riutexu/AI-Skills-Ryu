/**
 * tailwind.config.js — Configuración del tema de Trigo Libre (Twig v3/v4).
 * Extensiones de marca: colores, fuentes, tamaños, animaciones
 * y utilidades personalizadas vía plugin.
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        marca: {
          50: "#fff7ed",
          100: "#ffedd5",
          500: "#d97706",
          600: "#b45309",
          700: "#92400e",
          800: "#78350f",
        },
        tinta: {
          DEFAULT: "#292524",
          suave: "#57534e",
        },
        pan: {
          claro: "#faf7f2",
          cruda: "#fef3c7",
        },
      },
      fontFamily: {
        titulos: ["Georgia", "Times New Roman", "serif"],
        texto: ["Segoe UI", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display": ["clamp(1.9rem, 4vw, 2.7rem)", { lineHeight: "1.2", fontWeight: "700" }],
        "cuerpo-lg": ["1.05rem", { lineHeight: "1.7" }],
      },
      borderRadius: {
        pan: "10px",
      },
      boxShadow: {
        pan: "0 4px 14px rgba(41, 37, 36, 0.08)",
      },
      maxWidth: {
        contenido: "1080px",
      },
      keyframes: {
        "salir-horno": {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "salir-horno": "salir-horno 500ms ease-out both",
      },
    },
  },
  plugins: [
    /* Utilidad personalizada: limita el ancho de lectura con min/max */
    function ({ addUtilities }) {
      addUtilities({
        ".ancho-lectura": {
          "max-width": "min(65ch, 100%)",
        },
        ".contenedor-pan": {
          "max-width": "min(1080px, 100% - 2.5rem)",
          "margin-inline": "auto",
          "padding-inline": "1.25rem",
        },
      });
    },
  ],
};