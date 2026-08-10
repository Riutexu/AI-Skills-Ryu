# Checklist de calidad: landing pages nivel avanzado

## SEO on-page

- [ ] `title` único entre 50 y 60 caracteres con la palabra clave principal.
- [ ] `meta description` entre 120 y 160 caracteres con llamada a la acción.
- [ ] `link rel="canonical"` apuntando a la URL final.
- [ ] Open Graph completo: type, title, description, image (1200x630) y url.
- [ ] Twitter Card configurada para compartir en redes.
- [ ] `theme-color` y `lang="es"` correctos.

## Accesibilidad

- [ ] Un solo `h1`; encabezados por sección en orden (h2, h3).
- [ ] Navegación con `aria-label` y enlace de saltar al contenido cuando la página es larga.
- [ ] Contraste ≥ 4.5:1 en texto normal y ≥ 3:1 en texto grande.
- [ ] Formulario con etiquetas visibles, `aria-invalid` en errores y región `aria-live` para el estado.
- [ ] Focus visible en todos los elementos interactivos (estilo de anillo o outline).
- [ ] Orden de tabulación lógico; menú móvil operable con teclado.
- [ ] Elementos decorativos con `aria-hidden="true"` y alternativas con `alt` o `aria-label`.

## Tailwind y componentes

- [ ] Configuración de marca centralizada en `theme.extend` (colores, fuentes, sombras).
- [ ] Clases compuestas en `@layer components` (`.btn`, `.tarjeta`) sin repetir utilidades largas.
- [ ] Breakpoints `sm`, `md`, `lg` utilizados de forma consistente; sin media queries manuales.
- [ ] Sin scroll horizontal en 320 px.
- [ ] Iconos SVG con `aria-hidden` cuando son decorativos.

## Animaciones

- [ ] Animaciones solo vía `data-reveal` y `data-retraso`; el observador es único.
- [ ] `prefers-reduced-motion: reduce` desactiva reveal y contadores.
- [ ] Animaciones no bloquean contenido: los textos son legibles aunque JS no cargue.
- [ ] Contadores con soporte de decimales y terminación limpia.

## Formulario y verificación

- [ ] Validación en vivo por campo con mensajes de error accesibles.
- [ ] Estados enviando / enviado / error siempre visibles.
- [ ] `fetch` con fallback visible (mensaje de contacto) ante error de red.
- [ ] Lighthouse SEO ≥ 90 y Accesibilidad ≥ 90 sobre el build.
- [ ] Prueba con zoom 200 % y navegación solo con teclado.
