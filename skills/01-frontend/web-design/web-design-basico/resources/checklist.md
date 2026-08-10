# Checklist de calidad: web design nivel básico

## Color

- [ ] Paleta de 3-5 colores construida sobre una armonía (monocromática, complementaria, análoga o triádica).
- [ ] Un neutro de fondo domina la página (regla 60-30-10).
- [ ] Contraste AA verificado (4.5:1 texto normal; 3:1 texto grande) en los pares reales.
- [ ] El color no es la única señal de estado: hay icono o texto de apoyo.

## Tipografía

- [ ] Máximo 2 familias tipográficas.
- [ ] Escala tipográfica de al menos 3 tamaños coherentes, definida en la guía.
- [ ] Tamaños de fuente en `rem` (o `clamp()` para títulos).
- [ ] Line-height adecuado al nivel (1.2 títulos, 1.5-1.6 cuerpo).

## Espaciado y alineación

- [ ] Todos los espaciados salen de una escala de 4 u 8 px.
- [ ] Misma distancia entre elementos relacionados; mayor entre bloques distintos.
- [ ] Alineación por ejes claros; ninguna sección mezcla centros y esquinas sin motivo.
- [ ] Anchuras limitadas para párrafos (60-75 caracteres por línea recomendado).

## Layout

- [ ] Flexbox para flujos lineales (nav, acciones de botones).
- [ ] Grid para tarjetas o retículas de columnas.
- [ ] Unidades `%`/`fr` para proporciones; `em` solo con contexto intencionado.
- [ ] Revisión a 320 px, 768 px y 1024 px sin desplazamiento horizontal.

## Jerarquía y entrega

- [ ] El título principal destaca antes que cualquier otro elemento.
- [ ] Estados `:hover` y `:focus-visible` visibles en todo elemento interactivo.
- [ ] Nota de decisiones entregada: paleta, tipografía y espaciado elegidos.
- [ ] Imágenes e ilustraciones con `alt` o `role="img"` y `aria-label`.