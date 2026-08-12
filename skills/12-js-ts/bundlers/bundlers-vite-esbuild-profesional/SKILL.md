---
name: bundlers-vite-esbuild-profesional
description: Vite y esbuild · nivel Profesional · Bundlers y tooling. Configurás Vite con esbuild para transpilar, servir y construir aplicaciones vanilla. Objetivo del nivel: Diseñar la configuración de build del proyecto
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "vite-esbuild"
  nivel: profesional
  stack: "Vite, esbuild, Rollup, ESLint, Prettier"
---

# Vite y esbuild — Profesional

## Qué hace este skill

Configurás Vite con esbuild para transpilar, servir y construir aplicaciones vanilla. En este nivel se entrega: **Diseñar la configuración de build del proyecto**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Bundlers y tooling** (Vite, esbuild, Rollup, ESLint, Prettier) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Vite y esbuild** dentro de Bundlers y tooling.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, esbuild, Rollup, ESLint, Prettier**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear un preset de Vite compartido entre proyectos
2. Configurar modos de build por entorno
3. Automatizar la verificación de builds en CI
4. Documentar las decisiones de configuración

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar la configuración de build del proyecto | texto | sí | resultado medible |
| $stack | Bundlers y tooling | texto | sí | 12-js-ts/bundlers |
| $tecnologias | Vite, esbuild, Rollup, ESLint, Prettier | texto | sí | Vite, esbuild, Rollup, ESLint, Prettier |
| $tareas_clave | Crear un preset de Vite compartido entre proyectos · Configurar modos de build por entorno · Automatizar la verificación de builds en CI · Documentar las decisiones de configuración | lista | sí | 3-4 pasos |
| $criterios_clave | El preset se reutiliza entre proyectos · Los modos por entorno generan outputs correctos | lista | sí | calidad verificable |
| $prompt_guia | Diseñá el preset de Vite del equipo: configuración compartida entre proyectos, modos por entorno y la documentación de las decisiones de build. | texto | no | "Vite y esbuild" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El preset se reutiliza entre proyectos
- [ ] Los modos por entorno generan outputs correctos

## Ejemplos de prompts

- "Diseñá el preset de Vite del equipo: configuración compartida entre proyectos, modos por entorno y la documentación de las decisiones de build."
- "Aplica Vite y esbuild (nivel profesional) a mi trabajo actual con Bundlers y tooling: prioriza El preset se reutiliza entre proyectos"
- "Revisa mi bundlers y dime qué pasos de Vite y esbuild me faltan en este nivel"