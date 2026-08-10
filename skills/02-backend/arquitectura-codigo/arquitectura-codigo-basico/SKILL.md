---
name: arquitectura-codigo-basico
description: Organiza proyectos con carpetas claras, separación de responsabilidades, funciones pequeñas, nombres expresivos y comentarios útiles.
license: MIT
compatibility: opencode
metadata:
  familia: "02-backend"
  tema: "arquitectura-codigo"
  nivel: basico
  stack: "JavaScript, TypeScript, convenciones de proyecto"
---

# Arquitectura de código básica

## Qué hace este skill

Establece la base estructural de un proyecto mantenible: un árbol de carpetas con responsabilidades claras, separación entre lógica de presentación, de negocio y utilidades, funciones pequeñas que hacen una sola cosa, nombres expresivos y comentarios que explican el porqué en lugar de repetir el código. Incluye plantillas con el árbol de carpetas de referencia y las convenciones del equipo.

## Cuándo usarlo

- Cuando empiezas un proyecto nuevo y quieres definir la estructura desde el día uno.
- Cuando un proyecto existente tiene archivos de cientos de líneas y carpetas sin criterio.
- Cuando quieres que cualquier persona del equipo encuentre un archivo sin preguntar.
- Antes de refactorizar hacia capas (nivel avanzado): primero ordena lo fundamental.

## Requisitos previos

- Haber escrito programas de más de un archivo (no importa el lenguaje).
- Conocer lo básico de un proyecto JS/TS: `src/`, módulos, importaciones y exports.
- Saber qué es una función y qué significa "efecto secundario".

## Workflow paso a paso

1. Definir el árbol base: `src/` para el código fuente, con subcarpetas por responsabilidad (`components/`, `pages/`, `utils/`, `services/`).
2. Separar por responsabilidad, no por tipo de archivo suelto: cada carpeta agrupa lo que comparte un propósito.
3. Mantener `utils/` solo para funciones puras y reutilizables sin estado y sin dependencias del framework.
4. Aplicar la regla de las funciones pequeñas: una función hace una cosa, tiene un solo nivel de abstracción y no supera 15-20 líneas.
5. Nombrar con intención: nombres que describan el QUÉ (responsabilidad) y no el CÓMO (implementación): `calcularTotal`, no `procesarDatos`.
6. Para booleanos usar prefijos: `esActivo`, `tienePermiso`, `puedeEnviar`. Para arrays, plural: `usuarios`, `pedidos`.
7. Dividir archivos largos: si un archivo supera ~200 líneas o contiene más de una responsabilidad clara, separarlo.
8. Escribir comentarios que expliquen el porqué (decisiones, casos límite, formatos de datos) y dejar que el código se explique solo con nombres.
9. Eliminar comentarios que repiten el código (`// suma dos números` antes de `a + b`) y los fragmentos muertos comentados.
10. Evitar duplicación: si dos funciones hacen lo mismo, extraer una función compartida en `utils/`.
11. Revisar las dependencias entre carpetas: `components/` y `pages/` no deben importar archivos de negocio de forma dispersa; centralizarlo en `services/`.
12. Documentar la estructura en un `README` corto del proyecto con el árbol y las reglas de colocación.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
| --- | --- | --- | --- | --- |
| `carpetaRaiz` | Carpeta raíz del código fuente | string | sí | `src` |
| `carpetasBase` | Carpetas de primer nivel por responsabilidad | array | sí | `['components', 'pages', 'utils', 'services']` |
| `maximoLineasFuncion` | Tope de líneas por función | number | no | `20` |
| `maximoLineasArchivo` | Tope de líneas por archivo | number | no | `200` |
| `framework` | Framework que condiciona la estructura (React, Express...) | string | no | `react` |
| `idiomaNombres` | Idioma de los identificadores del código | string | no | `espanol` |
| `estiloComentarios` | Qué deben explicar los comentarios | string | no | `porque` |

## Reglas y checklist

- [ ] El código fuente vive en `src/` con subcarpetas por responsabilidad y nombres en kebab-case.
- [ ] Cada carpeta tiene un propósito claro: presentación, lógica, utilidades o datos.
- [ ] Las funciones hacen una sola cosa, con un solo nivel de abstracción y menos de 20 líneas.
- [ ] Los nombres son expresivos: el QUÉ sobre el CÓMO, verbos para funciones, nombres para datos.
- [ ] Booleanos con `es/` `tiene/` `puede/`; arrays en plural.
- [ ] Los archivos del proyecto no superan ~200 líneas; se dividen cuando mezclan responsabilidades.
- [ ] Los comentarios explican el porqué (decisiones y casos extraños), no repiten el código.
- [ ] No existe código muerto comentado ni funciones duplicadas.
- [ ] `utils/` contiene solo funciones puras y reutilizables.
- [ ] El árbol de carpetas está documentado y cualquier persona del equipo ubica un archivo sin preguntar.

## Ejemplos de prompts

- "Organiza este proyecto caótico: crea el árbol de carpetas src/components, src/pages, src/utils y src/services y mueve los archivos según su responsabilidad."
- "Divide este archivo de 400 líneas en funciones pequeñas con nombres expresivos."
- "Revisa los comentarios de este módulo: elimina los que repiten el código y añade los que explican decisiones."
- "Refactoriza esta función: extrae las subtareas en funciones con nombres que digan qué hacen."
- "Renombra estas variables y funciones para que expresen intención: `d`, `procesar()`, `flag`, `arr`."
- "Documenta en un README la estructura de carpetas de este proyecto con sus reglas de colocación."

## Plantillas y recursos

- `templates/arbol-proyecto.md` — árbol de carpetas de referencia con la responsabilidad de cada nivel.
- `templates/convenciones.md` — convenciones escritas de nombres, comentarios y límites del equipo.
- Checklist del nivel: `resources/checklist.md`.