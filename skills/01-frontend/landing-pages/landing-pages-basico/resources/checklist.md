# Checklist de calidad: landing pages nivel básico

## Estructura y contenido

- [ ] La página tiene un único objetivo de conversión definido por escrito.
- [ ] Un solo `h1` y jerarquía `h2`/`h3` sin saltos de nivel.
- [ ] Estructura semántica correcta: `header`, `nav`, `main`, `section`, `footer`.
- [ ] Contenido real: propuesta de valor, 3-6 beneficios, prueba social y CTA claro.
- [ ] El CTA principal aparece al menos dos veces (hero y cierre).

## HTML

- [ ] `<!DOCTYPE html>`, `<html lang="es">`, `charset` y viewport presentes.
- [ ] `title` descriptivo (50-60 caracteres) y `meta description` (120-160).
- [ ] Todas las imágenes y SVG decorativos con `alt` o `role="img"` + `aria-label`.
- [ ] Formulario con `label` asociado a cada campo (`for`/`id`).
- [ ] Validación nativa aplicada: `required`, `type="email"`, `minlength`.
- [ ] Enlaces con texto descriptivo; sin "haz clic aquí".

## CSS

- [ ] Reset ligero y variables CSS para colores, tipografía y espaciado.
- [ ] Tipografía en `rem` y `clamp()` para los títulos principales.
- [ ] Layout con flexbox (nav, acciones) y Grid (tarjetas).
- [ ] Menos de 3 media queries; la mayoría de la lógica con max-width.
- [ ] Estados `:hover` y `:focus-visible` en todos los elementos interactivos.

## Responsive y verificación

- [ ] Sin scroll horizontal a 320 px, 768 px y 1024 px.
- [ ] Formulario utilizable en móvil (campos de ancho completo).
- [ ] Texto legible con zoom al 200 %.
- [ ] Contraste mínimo 4.5:1 entre texto y fondo (verificar en la paleta elegida).
- [ ] Prueba manual: navegación completa por anclas y envío del formulario.

## Entrega

- [ ] Nota de mantenimiento: dónde cambiar colores, textos y destino del formulario.
- [ ] Archivos con nombres en minúsculas y separación por guiones.
