---
name: bundlers-vite-esbuild-avanzado
description: Vite y esbuild · nivel Avanzado · Bundlers y tooling. Configurás Vite con esbuild para transpilar, servir y construir aplicaciones vanilla. Objetivo del nivel: Usar plugins de Vite y optimizar el build
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "vite-esbuild"
  nivel: avanzado
  stack: "Vite, esbuild, Rollup, ESLint, Prettier"
---

# Vite y esbuild — Avanzado

## Qué hace este skill

Configurás Vite con esbuild para transpilar, servir y construir aplicaciones vanilla. En este nivel se entrega: **Usar plugins de Vite y optimizar el build**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Bundlers y tooling** (Vite, esbuild, Rollup, ESLint, Prettier) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Vite y esbuild** dentro de Bundlers y tooling.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, esbuild, Rollup, ESLint, Prettier**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Instalar y configurar plugins de Vite
2. Configurar esbuild para transpilar TS
3. Optimizar chunks y assets en producción
4. Manejar variables de entorno en el build

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Usar plugins de Vite y optimizar el build | texto | sí | resultado medible |
| $stack | Bundlers y tooling | texto | sí | 12-js-ts/bundlers |
| $tecnologias | Vite, esbuild, Rollup, ESLint, Prettier | texto | sí | Vite, esbuild, Rollup, ESLint, Prettier |
| $tareas_clave | Instalar y configurar plugins de Vite · Configurar esbuild para transpilar TS · Optimizar chunks y assets en producción · Manejar variables de entorno en el build | lista | sí | 3-4 pasos |
| $criterios_clave | Los plugins se configuran y documentan · El TS se transpila sin paso previo | lista | sí | calidad verificable |
| $prompt_guia | La SPA pasa a TypeScript: configurá esbuild como transpilador en Vite, agregá los plugins que faltan y optimizá los chunks de producción. | texto | no | "Vite y esbuild" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los plugins se configuran y documentan
- [ ] El TS se transpila sin paso previo

## Ejemplos de prompts

- "La SPA pasa a TypeScript: configurá esbuild como transpilador en Vite, agregá los plugins que faltan y optimizá los chunks de producción."
- "Aplica Vite y esbuild (nivel avanzado) a mi trabajo actual con Bundlers y tooling: prioriza Los plugins se configuran y documentan"
- "Revisa mi bundlers y dime qué pasos de Vite y esbuild me faltan en este nivel"