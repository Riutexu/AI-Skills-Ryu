---
name: bundlers-sourcemaps-avanzado
description: Sourcemaps · nivel Avanzado · Bundlers y tooling. Generás y gestionás sourcemaps para debuggear el código transpilado en producción. Objetivo del nivel: Publicar y consumir sourcemaps seguros
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "sourcemaps"
  nivel: avanzado
  stack: "Vite, esbuild, Rollup, ESLint, Prettier"
---

# Sourcemaps — Avanzado

## Qué hace este skill

Generás y gestionás sourcemaps para debuggear el código transpilado en producción. En este nivel se entrega: **Publicar y consumir sourcemaps seguros**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Bundlers y tooling** (Vite, esbuild, Rollup, ESLint, Prettier) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Sourcemaps** dentro de Bundlers y tooling.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, esbuild, Rollup, ESLint, Prettier**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Separar los sourcemaps del bundle principal
2. Publicarlos en un servicio de error tracking
3. Proteger el source original con reglas de acceso
4. Verificar el mapeo con errores reales

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Publicar y consumir sourcemaps seguros | texto | sí | resultado medible |
| $stack | Bundlers y tooling | texto | sí | 12-js-ts/bundlers |
| $tecnologias | Vite, esbuild, Rollup, ESLint, Prettier | texto | sí | Vite, esbuild, Rollup, ESLint, Prettier |
| $tareas_clave | Separar los sourcemaps del bundle principal · Publicarlos en un servicio de error tracking · Proteger el source original con reglas de acceso · Verificar el mapeo con errores reales | lista | sí | 3-4 pasos |
| $criterios_clave | Los errores de producción muestran el source original · El acceso a los sourcemaps está controlado | lista | sí | calidad verificable |
| $prompt_guia | Conectá los errores de producción con el source real: publicá los sourcemaps en el servicio de tracking, protegé el acceso y verificá un error real. | texto | no | "Sourcemaps" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los errores de producción muestran el source original
- [ ] El acceso a los sourcemaps está controlado

## Ejemplos de prompts

- "Conectá los errores de producción con el source real: publicá los sourcemaps en el servicio de tracking, protegé el acceso y verificá un error real."
- "Aplica Sourcemaps (nivel avanzado) a mi trabajo actual con Bundlers y tooling: prioriza Los errores de producción muestran el source original"
- "Revisa mi bundlers y dime qué pasos de Sourcemaps me faltan en este nivel"