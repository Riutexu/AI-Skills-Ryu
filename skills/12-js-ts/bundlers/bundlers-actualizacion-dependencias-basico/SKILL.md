---
name: bundlers-actualizacion-dependencias-basico
description: Actualización de dependencias · nivel Básico · Bundlers y tooling. Mantenés las dependencias al día con estrategias de actualización y verificación continua. Objetivo del nivel: Actualizar dependencias con seguridad básica
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "actualizacion-dependencias"
  nivel: basico
  stack: "Vite, esbuild, Rollup, ESLint, Prettier"
---

# Actualización de dependencias — Básico

## Qué hace este skill

Mantenés las dependencias al día con estrategias de actualización y verificación continua. En este nivel se entrega: **Actualizar dependencias con seguridad básica**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Bundlers y tooling** (Vite, esbuild, Rollup, ESLint, Prettier) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Actualización de dependencias** dentro de Bundlers y tooling.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, esbuild, Rollup, ESLint, Prettier**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Verificar el estado con npm outdated
2. Actualizar dependencias menores y de parche
3. Leer changelogs antes de actualizar
4. Correr tests tras cada actualización

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Actualizar dependencias con seguridad básica | texto | sí | resultado medible |
| $stack | Bundlers y tooling | texto | sí | 12-js-ts/bundlers |
| $tecnologias | Vite, esbuild, Rollup, ESLint, Prettier | texto | sí | Vite, esbuild, Rollup, ESLint, Prettier |
| $tareas_clave | Verificar el estado con npm outdated · Actualizar dependencias menores y de parche · Leer changelogs antes de actualizar · Correr tests tras cada actualización | lista | sí | 3-4 pasos |
| $criterios_clave | Las actualizaciones se hacen con tests verdes · Los changelogs se revisan | lista | sí | calidad verificable |
| $prompt_guia | Actualizá las dependencias menores del proyecto: revisá npm outdated, leé los changelogs y verificá que los tests sigan verdes. | texto | no | "Actualización de dependencias" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las actualizaciones se hacen con tests verdes
- [ ] Los changelogs se revisan

## Ejemplos de prompts

- "Actualizá las dependencias menores del proyecto: revisá npm outdated, leé los changelogs y verificá que los tests sigan verdes."
- "Aplica Actualización de dependencias (nivel basico) a mi trabajo actual con Bundlers y tooling: prioriza Las actualizaciones se hacen con tests verdes"
- "Revisa mi bundlers y dime qué pasos de Actualización de dependencias me faltan en este nivel"