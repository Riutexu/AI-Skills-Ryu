---
name: html5-base-structure-basico
description: Estructura HTML5 correcta desde cero: doctype, metadatos, semántica con header/nav/main/section/article/aside/footer, formularios con validación nativa e indentación limpia.
license: MIT
compatibility: opencode
metadata:
  familia: "01-frontend"
  tema: "html5-base-structure"
  nivel: basico
  stack: "HTML5"
---

# Estructura HTML5 correcta (nivel básico)

## Qué hace este skill

Construye documentos HTML5 completos y válidos desde cero: doctype correcto, charset y viewport, metadatos esenciales, jerarquía semántica con `header`, `nav`, `main`, `section`, `article`, `aside` y `footer`, y formularios que se validan con atributos nativos sin JavaScript. Todo con indentación limpia que hace el código fácil de leer y mantener.

## Cuándo usarlo

- Al empezar cualquier página nueva: la base del documento se crea una sola vez y bien hecha.
- Cuando hay que corregir documentos con etiquetas sueltas (divs anidados sin semántica) o con estructura confusa.
- Cuando se entregan páginas a un equipo que mantiene el código: la estructura semántica es parte del mensaje.
- Cuando el formulario necesita validación sin escribir JavaScript (requeridos, formatos, longitudes).
- Cuando buscadores y lectores de pantalla deben entender la página desde el primer día.

## Requisitos previos

- Saber escribir etiquetas HTML simples (párrafos, enlaces e imágenes).
- Un editor de texto y un navegador moderno para probar.
- No se necesitan frameworks ni JavaScript: este nivel es HTML puro.

## Workflow paso a paso

1. Define el contenido de la página: qué se dice, para quién y cuál es la acción principal.
2. Escribe la base del documento: `<!DOCTYPE html>`, `<html lang="es">`, `head` y `body` en ese orden exacto.
3. Añade el conjunto de caracteres `UTF-8` y el viewport con `width=device-width, initial-scale=1.0`.
4. Escribe los metadatos: `title` descriptivo (50-60 caracteres), `meta description` (120-160) y `author`.
5. Construye el `header` con el logotipo y un `nav` con la navegación principal en una lista desordenada.
6. Crea el `main` (contenido único de la página) y reparte sus bloques en `section` con `aria-labelledby` cuando tengan título propio.
7. Usa `article` para contenidos autocontenidos (entrada de blog, producto, noticia) y `aside` para contenido complementario.
8. Jerarquía de encabezados: un solo `h1` y niveles sin saltos (`h1` → `h2` → `h3`).
9. Escribe el formulario: `form` con `action` y `method`, cada campo con `label` asociado vía `for`/`id`.
10. Aplica validación nativa: `required`, `type="email"`, `type="url"`, `minlength`, `maxlength` y `pattern` donde tenga sentido.
11. Añade `autocomplete` a los campos de contacto y `placeholder` solo como ayuda secundaria (nunca como sustituto del label).
12. Cierra con el `footer`: autoría, enlaces legales y contacto.
13. Formatea el documento: indentación de 2 espacios, una etiqueta por línea y atributos con comillas dobles.
14. Valida el resultado en el validador del W3C sin errores de estructura.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
| --- | --- | --- | --- | --- |
| objetivo_pagina | Propósito del documento | string | Sí | "Página de contacto de una clínica dental" |
| idioma | Idioma del contenido para el atributo lang | string | Sí | "es" |
| titulo_pagina | Título que aparecerá en documentos y buscadores | string | Sí | "Contacto | Clínica Dental Sonrisa" |
| descripcion | Meta description de 120-160 caracteres | string | No | "Pide cita en Clínica Sonrisa: urgencias, limpieza e implantes con financiación." |
| secciones | Secciones semánticas requeridas | string | No | "header, nav, main, aside, footer" |
| campos_formulario | Campos del formulario separados por coma | string | No | "nombre, email, telefono, mensaje" |
| url_referencia | Página de referencia para el contenido | url | No | "https://ejemplo.com/contacto" |
| criterios_aceptacion | Condiciones de entrega | string | No | "Validador W3C sin errores, un solo h1, todos los labels asociados" |

## Reglas y checklist

- [ ] `<!DOCTYPE html>` en la primera línea y `<html lang="es">`.
- [ ] `charset="UTF-8"` y viewport presentes en el `head`.
- [ ] `title` único y descriptivo; `meta description` completa.
- [ ] Un único `h1` por documento y jerarquía sin saltos.
- [ ] `header`, `nav`, `main`, `section`, `article`, `aside` y `footer` usados con su significado real.
- [ ] Navegación en lista dentro de `nav`; enlaces con texto descriptivo.
- [ ] Todo campo de formulario con `label` asociado y `autocomplete` cuando proceda.
- [ ] Validación nativa aplicada en lugar de JavaScript.
- [ ] Indentación de 2 espacios consistente en todo el documento.
- [ ] El documento pasa el validador del W3C sin errores de estructura.

## Ejemplos de prompts

- "Crea el documento HTML5 base completo de la página de contacto de una clínica dental: semántica, metadatos e indentación limpia."
- "Reestructura esta página con divs usando la semántica correcta: header, nav, main, section, article, aside y footer."
- "Escribe el formulario de reserva con validación nativa: nombre, email, teléfono y fecha, todos con label asociado."
- "Corrige esta página: hay tres h1 y la navegación no está en una lista; muéstrame el HTML corregido completo."
- "Genera los metadatos (title, description y author) de una página de recetas en español."

## Plantillas y recursos

- [templates/index.html](./templates/index.html) — Documento HTML5 base completo y correcto: metadatos, semántica y contenido de ejemplo real.
- [templates/formulario.html](./templates/formulario.html) — Formulario completo con validación nativa, agrupaciones fieldset y mensajes accesibles.
- [resources/checklist.md](./resources/checklist.md) — Lista de verificación de calidad del nivel básico.