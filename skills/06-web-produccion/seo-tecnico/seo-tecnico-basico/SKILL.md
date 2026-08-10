---
name: seo-tecnico-basico
description: Optimiza el SEO on-page desde el HTML: title y meta únicos, jerarquía de headings, alt en imágenes, URLs limpias y semántica correcta
license: MIT
compatibility: opencode
metadata:
  familia: "06-web-produccion"
  tema: "seo-tecnico"
  nivel: basico
  stack: "HTML5, cualquier framework"
---

# SEO técnico — Nivel básico

## Qué hace este skill

Guía para la base SEO que cualquier página debe tener: un `<title>` y `meta description` únicos por página, jerarquía correcta de headings, `alt` descriptivo en imágenes, URLs limpias y HTML semántico que los buscadores entienden sin esfuerzo.

## Cuándo usarlo

- Estás creando páginas nuevas y quieres que indexen bien desde el día uno.
- Analizas un sitio que aparece mal o con títulos duplicados en Google.
- Todo el propósiro de la web es recibir tráfico orgánico.

## Requisitos previos

- HTML básico (head, body, headings, links, img).
- Saber qué páginas de tu sitio quieres posicionar (1 búsqueda por página).

## Workflow paso a paso

1. **Una página, un propósito**: define la keyword principal de la página y refleja en el `title` (50-60 caracteres) y la `meta description` (140-160), únicos en todo el sitio.
2. **Jerarquía de headings**: un solo `h1` por página con la keyword; `h2`/`h3` para subsecciones en orden, sin saltos de nivel absurdos.
3. **Imágenes con `alt`**: descriptivo y contextual (incluye la keyword si es natural); no rellenes keywords; decorativas con `alt=""`.
4. **URLs limpias**: minúsculas, guiones (`-` no `_`), sin parámetros innecesarios ni fechas; que lean como: `/productos/zapatillas-running`.
5. **Semántica**: usa `header`, `nav`, `main`, `section`, `article`, `footer`; un solo `h1`; enlaces con texto descriptivo (no "clic aquí").
6. **HTML válido**: revisa el head (meta charset, viewport, lang="es") y valida estructura (W3C validator).
7. **Enlaces internos**: navega por texto de ancla descriptivo entre páginas relacionadas.
8. **Sin contenido duplicado**: cada página con su URL canónica (canonical entra en el nivel avanzado).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| `paginas` | Páginas a optimizar | lista | sí | "/", "/productos", "/blog/como-elegir" |
| `keyword_por_pagina` | Keyword principal | mapa | sí | "/productos -> zapatillas running" |
| `idioma` | Lang del sitio | texto | no | "es" |
| `tipo_sitio` | Blog, tienda, SaaS | texto | no | "tienda" |
| `limitacion` | Páginas priorizadas | lista | no | max 10 por lote |

## Reglas y checklist

- [ ] Title < 60 y description < 160 caracteres, únicos por página
- [ ] Un solo `h1`; headings en orden jerárquico
- [ ] Todas las imágenes con `alt` descriptivo (o vacío si decorativas)
- [ ] URLs limpias en minúsculas con guiones
- [ ] Landmarks semánticos (header/nav/main/footer)
- [ ] Enlaces con texto de ancla descriptivo
- [ ] `lang="es"` y charset/viewport correctos
- [ ] Validado con el W3C validator sin errores de estructura

## Ejemplos de prompts

- "Optimiza el title, description y headings de mi página de inicio para 'abogados madrid'"
- "Revisa mi website y detecta títulos duplicados o faltantes de alt"
- "Convierte estas URLs feas en URLs limpias con redirecciones"
- "Escribe alts descriptivos para las 20 imágenes de mi tienda"

## Plantillas y recursos

- [templates/head-referencia.html](templates/head-referencia.html) — head optimizado de referencia
- [resources/checklist.md](resources/checklist.md) — lista de verificación del nivel