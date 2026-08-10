---
name: html5-base-structure-avanzado
description: ARIA landmarks y WCAG básico, multimedia con fallbacks (picture, video, audio), microdatos y schema.org con JSON-LD y SEO técnico de estructura.
license: MIT
compatibility: opencode
metadata:
  familia: "01-frontend"
  tema: "html5-base-structure"
  nivel: avanzado
  stack: "HTML5, ARIA, WCAG, schema.org (JSON-LD)"
---

# Accesibilidad, multimedia y datos estructurados (nivel avanzado)

## Qué hace este skill

Mejora documentos HTML con accesibilidad real: roles ARIA solo donde la semántica no alcanza, landmarks declarados, conformidad WCAG 2.x AA aplicable, multimedia con fallbacks completos (`picture` con formatos múltiples, `video` y `audio` con pistas y transcripción) y datos estructurados con JSON-LD válido en schema.org. Además aplica SEO técnico de estructura: encabezados, canonical, robots y crawlabilidad.

## Cuándo usarlo

- Cuando la página debe ser utilizable por lectores de pantalla y navegación de teclado.
- Cuando hay imagenes, vídeos o audios y falta la cadena jerarquica de alternativas.
- Cuando buscas que la página salga enriquecida en resultados de Google (JSON-LD).
- Cuando una auditoría de accesibilidad o SEO señala elementos concretos a corregir.
- Cuando el proyecto tiene requisitos de conformidad WCAG 2.x AA (sector público o grandes cuentas).

## Requisitos previos

- Nivel básico de este tema dominado: semántica HTML5 y formularios nativos.
- Conocer qué son los atributos ARIA y cuándo NO usarlos (la semántica HTML va primero).
- Nociones de SEO on-page (title, description, canonical) y manejo básico del validador del W3C.

## Workflow paso a paso

1. Revisa los landmarks del documento: `header`, `nav`, `main`, `aside`, `footer` ya crean regiones; compruébalo con una extensión de landmarks.
2. Añade roles ARIA solo donde la semántica no alcanza: `role="dialog"` en modales, `role="alert"`/`aria-live` en mensajes dinámicos, `aria-expanded` en acordeones.
3. Declara el estado de los widgets: `aria-current="page"` en el enlace de la página activa y `aria-label` a nav redundantes.
4. Verifica WCAG 2.x AA aplicable: texto alternativo, contraste, idioma, nombres accesibles y operación por teclado.
5. Imágenes: usa `picture` con `source` para AVIF y WebP, `img` final con `alt`, `width`, `height`, `srcset` y `sizes`.
6. Vídeo: `video` con `controls`, `source` MP4 y WebM (fallback), `track kind="captions"` en `srclang="es"` y texto de respaldo.
7. Audio: `audio` con `controls`, `source` MP3 y OGG, más un enlace a la transcripción completa.
8. Aplica póster y metadatos de medios: `poster`, `preload`, `playsinline` y `loop` solo cuando aporta.
9. Datos estructurados: elige el tipo de schema.org correcto (Organization, Article, Product, Event) y escribe el JSON-LD con el schema real del negocio.
10. Valida el JSON-LD: pasa el bloque por el validador de schema.org y corrige tipos y propiedades requeridas.
11. SEO técnico de estructura: canonical, robots, encabezados con una sola jerarquía y URLs limpias sin parámetros.
12. Verifica la accesibilidad: Lighthouse (Accesibilidad ≥ 90) y prueba de teclado (Tab por toda la página, foco visible).
13. Comprueba la cadena de alternativas del media: sin imagen → alt; sin vídeo → texto de respaldo; sin audio → transcripción.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
| --- | --- | --- | --- | --- |
| objetivo_pagina | Propósito y tipo de contenido | string | Sí | "Artículo de blog con vídeo y galería" |
| tipo_schema | Tipo de schema.org a estructurar | string | No | "Article" |
| formato_imagenes | Formatos de imagen disponibles | string | No | "avif, webp, jpg" |
| has_video | El documento incluye vídeo con captions | boolean | No | "true" |
| has_audio | El documento incluye audio con transcripción | boolean | No | "false" |
| contraste_minimo | Nivel de contraste exigido | string | No | "AA (4.5:1)" |
| url_referencia | URL canónica de la página | url | No | "https://ejemplo.com/blog/receta-paella" |
| criterios_aceptacion | Condiciones de entrega | string | No | "JSON-LD validado, Lighthouse A11y >= 90, toda imagen con cadena de alternativas" |

## Reglas y checklist

- [ ] Landmarks existentes: `header`, `nav`, `main`, `aside` y `footer` sin roles redundantes.
- [ ] ARIA usado solo donde la semántica no alcanza; sin `role="main"` duplicado.
- [ ] `aria-current="page"` en la navegación y `aria-label` en nav con destino ambiguo.
- [ ] WCAG 2.x AA: contraste, alternativas, idioma y operación por teclado verificados.
- [ ] `picture` con formatos AVIF/WebP y `img` de respaldo con dimensiones y `alt`.
- [ ] `video` con captions (`track srclang`) y texto de respaldo.
- [ ] `audio` con transcripción enlazada.
- [ ] JSON-LD del tipo correcto validado en el validador de schema.org.
- [ ] Canonical y robots coherentes en todas las páginas compartibles.
- [ ] Lighthouse Accesibilidad ≥ 90 y prueba de teclado completa.

## Ejemplos de prompts

- "Convierte esta galería a picture con AVIF/WebP/JPG y cadena de alternativas completa; no romper la accesibilidad existente."
- "Añade el JSON-LD de tipo Article a este post: autor, fecha, imagen principal y descripción; valida los campos requeridos."
- "Inserta el vídeo de presentación con captions en español (track) y texto de respaldo para navegadores sin soporte."
- "Revisa esta página con criterios WCAG 2.x AA: dime qué fallos hay y muéstrame las correcciones concretas en HTML."
- "El menú responsive necesita aria-expanded y aria-controls: implementa el patrón accesible de acordeón."

## Plantillas y recursos

- [templates/seo-json-ld.html](./templates/seo-json-ld.html) — Documento con head SEO completo (canonical, OG, robots) y datos estructurados JSON-LD de tipo Article.
- [templates/multimedia.html](./templates/multimedia.html) — Galería con picture, vídeo con captions y audio con transcripción, todos con fallbacks.
- [resources/checklist.md](./resources/checklist.md) — Lista de verificación de calidad del nivel avanzado.