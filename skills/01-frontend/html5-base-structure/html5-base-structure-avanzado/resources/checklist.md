# Checklist de calidad: estructura HTML5 nivel avanzado

## ARIA y landmarks

- [ ] Landmarks implícitos correctos: `header`, `nav`, `main`, `aside`, `footer`.
- [ ] Sin roles redundantes sobre elementos semánticos (`role="main"` sobre `main`).
- [ ] ARIA usado solo donde la semántica no alcanza (modales, acordeones, mensajes dinámicos).
- [ ] `aria-current="page"` en el enlace de la navegación activo.
- [ ] `aria-expanded` y `aria-controls` en widgets plegables.
- [ ] `aria-live` en regiones que se actualizan dinámicamente.

## WCAG 2.x AA aplicable

- [ ] Todo contenido con texto alternativo (imágenes, vídeos, audios).
- [ ] Contraste mínimo 4.5:1 (texto) y 3:1 (texto grande o componentes).
- [ ] Página operable con teclado; foco visible siempre.
- [ ] Idioma correcto en `lang` y cambios de idioma marcados.
- [ ] Nombres accesibles en todos los controles.
- [ ] Sin parpadeos que violen el umbral de fotosensibilidad.

## Multimedia

- [ ] `picture` con fuentes AVIF/WebP y `img` de respaldo con `alt`, `width`, `height`.
- [ ] `srcset`/`sizes` coherentes con la maquetación; sin sobre-descarga.
- [ ] `video` con dos formatos, póster y `<track kind="captions">`.
- [ ] Texto de respaldo dentro de `video` y `audio` (sin lector de pantalla mudo).
- [ ] Transcripción enlazada para cada audio.
- [ ] `loading="lazy"` en medios fuera del viewport inicial.

## JSON-LD y SEO técnico

- [ ] Tipo de schema.org correcto y validado en el validador oficial.
- [ ] Propiedades requeridas del tipo presentes (name, description, image...).
- [ ] `canonical` único, `robots` coherente y URLs limpias.
- [ ] Un solo `h1` y jerarquía de encabezados legible por buscadores.
- [ ] Open Graph y Twitter Card en páginas compartibles.

## Verificación

- [ ] Lighthouse Accesibilidad ≥ 90.
- [ ] Recorrido completo con Tab (orden lógico y foco visible).
- [ ] Navegador probado sin JavaScript: multimedia y formularios siguen siendo comprensibles.