---
name: bundlers-monorepos-ligeros-basico
description: Monorepos ligeros · nivel Básico · Bundlers y tooling. Organizás múltiples paquetes en un monorepo con workspaces sin herramientas pesadas. Objetivo del nivel: Crear un monorepo con npm workspaces
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "monorepos-ligeros"
  nivel: basico
  stack: "Vite, esbuild, Rollup, ESLint, Prettier"
---

# Monorepos ligeros — Básico

## Qué hace este skill

Organizás múltiples paquetes en un monorepo con workspaces sin herramientas pesadas. En este nivel se entrega: **Crear un monorepo con npm workspaces**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Bundlers y tooling** (Vite, esbuild, Rollup, ESLint, Prettier) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Monorepos ligeros** dentro de Bundlers y tooling.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, esbuild, Rollup, ESLint, Prettier**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Configurar workspaces en el package.json raíz
2. Crear los paquetes del monorepo
3. Instalar y ejecutar scripts por paquete
4. Compartir dependencias comunes

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Crear un monorepo con npm workspaces | texto | sí | resultado medible |
| $stack | Bundlers y tooling | texto | sí | 12-js-ts/bundlers |
| $tecnologias | Vite, esbuild, Rollup, ESLint, Prettier | texto | sí | Vite, esbuild, Rollup, ESLint, Prettier |
| $tareas_clave | Configurar workspaces en el package.json raíz · Crear los paquetes del monorepo · Instalar y ejecutar scripts por paquete · Compartir dependencias comunes | lista | sí | 3-4 pasos |
| $criterios_clave | Los workspaces se instalan sin conflicto · Los scripts corren en cada paquete | lista | sí | calidad verificable |
| $prompt_guia | Armá el monorepo de la SPA y sus herramientas: npm workspaces, paquetes separados y scripts por paquete funcionando. | texto | no | "Monorepos ligeros" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los workspaces se instalan sin conflicto
- [ ] Los scripts corren en cada paquete

## Ejemplos de prompts

- "Armá el monorepo de la SPA y sus herramientas: npm workspaces, paquetes separados y scripts por paquete funcionando."
- "Aplica Monorepos ligeros (nivel basico) a mi trabajo actual con Bundlers y tooling: prioriza Los workspaces se instalan sin conflicto"
- "Revisa mi bundlers y dime qué pasos de Monorepos ligeros me faltan en este nivel"