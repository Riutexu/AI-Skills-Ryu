---
name: bundlers-despliegue-produccion-basico
description: Despliegue a producción · nivel Básico · Bundlers y tooling. Desplegás el frontend a producción con estrategias de cache, rollback y verificación. Objetivo del nivel: Desplegar el build a un servidor simple
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "despliegue-produccion"
  nivel: basico
  stack: "Vite, esbuild, Rollup, ESLint, Prettier"
---

# Despliegue a producción — Básico

## Qué hace este skill

Desplegás el frontend a producción con estrategias de cache, rollback y verificación. En este nivel se entrega: **Desplegar el build a un servidor simple**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Bundlers y tooling** (Vite, esbuild, Rollup, ESLint, Prettier) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Despliegue a producción** dentro de Bundlers y tooling.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, esbuild, Rollup, ESLint, Prettier**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Subir el build a un hosting estático
2. Configurar los headers de cache básicos
3. Verificar el deploy con un smoke test
4. Manejar el 404 del SPA en el server

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Desplegar el build a un servidor simple | texto | sí | resultado medible |
| $stack | Bundlers y tooling | texto | sí | 12-js-ts/bundlers |
| $tecnologias | Vite, esbuild, Rollup, ESLint, Prettier | texto | sí | Vite, esbuild, Rollup, ESLint, Prettier |
| $tareas_clave | Subir el build a un hosting estático · Configurar los headers de cache básicos · Verificar el deploy con un smoke test · Manejar el 404 del SPA en el server | lista | sí | 3-4 pasos |
| $criterios_clave | El deploy funciona desde cero en producción · El server sirve el index para rutas de la SPA | lista | sí | calidad verificable |
| $prompt_guia | Desplegá la SPA al servidor del cliente: subí el build, configurá los headers de cache, el fallback del SPA y verificá con un smoke test. | texto | no | "Despliegue a producción" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El deploy funciona desde cero en producción
- [ ] El server sirve el index para rutas de la SPA

## Ejemplos de prompts

- "Desplegá la SPA al servidor del cliente: subí el build, configurá los headers de cache, el fallback del SPA y verificá con un smoke test."
- "Aplica Despliegue a producción (nivel basico) a mi trabajo actual con Bundlers y tooling: prioriza El deploy funciona desde cero en producción"
- "Revisa mi bundlers y dime qué pasos de Despliegue a producción me faltan en este nivel"