/* animaciones.js
   Animaciones de aparición (reveal) y contadores para la landing de ejemplo.
   Usa IntersectionObserver, respeta prefers-reduced-motion y observa
   elementos marcados con [data-reveal] y [data-contador]. */

(function () {
  "use strict";

  var REDUCE_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Aparición de elementos: añade la clase "visible" la primera vez
     que el elemento entra en el viewport y deja de observarlo. */
  var observadorReveal = new IntersectionObserver(
    function (entradas) {
      entradas.forEach(function (entrada) {
        if (!entrada.isIntersecting) return;
        var elemento = entrada.target;
        var retraso = Number(elemento.getAttribute("data-retraso") || 0);
        if (retraso > 0) {
          elemento.style.transitionDelay = retraso + "ms";
        }
        elemento.classList.add("visible");
        observadorReveal.unobserve(elemento);
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  /* Contadores animados: los datos del atributo data-contador (pueden
     llevar decimales) se animan desde 0 hasta el valor objetivo. */
  function animarContador(elemento) {
    var objetivo = parseFloat(elemento.getAttribute("data-contador"));
    if (Number.isNaN(objetivo)) return;

    var decimales = String(objetivo).split(".")[1] ? String(objetivo).split(".")[1].length : 0;
    var duracion = 1200;
    var inicio = null;

    function paso(marcaTiempo) {
      if (inicio === null) inicio = marcaTiempo;
      var progreso = Math.min((marcaTiempo - inicio) / duracion, 1);
      var valor = objetivo * progreso;
      elemento.textContent = valor.toFixed(decimales);
      if (progreso < 1) {
        window.requestAnimationFrame(paso);
      }
    }

    window.requestAnimationFrame(paso);
  }

  var observadorContadores = new IntersectionObserver(
    function (entradas) {
      entradas.forEach(function (entrada) {
        if (!entrada.isIntersecting) return;
        animarContador(entrada.target);
        observadorContadores.unobserve(entrada.target);
      });
    },
    { threshold: 0.4 }
  );

  function iniciar() {
    var elementosReveal = document.querySelectorAll("[data-reveal]");
    var contadores = document.querySelectorAll("[data-contador]");

    if (REDUCE_MOTION) {
      /* Sin animaciones: todo visible y contadores a su valor final. */
      elementosReveal.forEach(function (elemento) {
        elemento.classList.add("visible");
      });
      contadores.forEach(function (elemento) {
        elemento.textContent = elemento.getAttribute("data-contador");
      });
      return;
    }

    elementosReveal.forEach(function (elemento) {
      observadorReveal.observe(elemento);
    });
    contadores.forEach(function (elemento) {
      observadorContadores.observe(elemento);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciar);
  } else {
    iniciar();
  }
})();
