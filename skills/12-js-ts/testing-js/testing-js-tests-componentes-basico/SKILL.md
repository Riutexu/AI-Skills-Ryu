---
name: testing-js-tests-componentes-basico
description: Tests de componentes · nivel Básico · Testing JS/TS. Probás componentes de la SPA en jsdom con Testing Library y user-event. Objetivo del nivel: Renderizar y probar componentes con Testing Library
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "tests-componentes"
  nivel: basico
  stack: "Vitest, Playwright, jsdom, CI"
---

# Tests de componentes — Básico

## Qué hace este skill

Probás componentes de la SPA en jsdom con Testing Library y user-event. En este nivel se entrega: **Renderizar y probar componentes con Testing Library**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Testing JS/TS** (Vitest, Playwright, jsdom, CI) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Tests de componentes** dentro de Testing JS/TS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vitest, Playwright, jsdom, CI**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Configurar Testing Library con jsdom
2. Renderizar un componente y buscar elementos
3. Verificar texto y atributos visibles
4. Simular interacciones simples

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Renderizar y probar componentes con Testing Library | texto | sí | resultado medible |
| $stack | Testing JS/TS | texto | sí | 12-js-ts/testing-js |
| $tecnologias | Vitest, Playwright, jsdom, CI | texto | sí | Vitest, Playwright, jsdom, CI |
| $tareas_clave | Configurar Testing Library con jsdom · Renderizar un componente y buscar elementos · Verificar texto y atributos visibles · Simular interacciones simples | lista | sí | 3-4 pasos |
| $criterios_clave | Los tests consultan como el usuario (getByRole, getByText) · Ningún test accede al DOM interno del componente | lista | sí | calidad verificable |
| $prompt_guia | Configurá Testing Library en el proyecto y escribí los primeros tests de componentes: render del header, botones visibles y verificación de texto. | texto | no | "Tests de componentes" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los tests consultan como el usuario (getByRole, getByText)
- [ ] Ningún test accede al DOM interno del componente

## Ejemplos de prompts

- "Configurá Testing Library en el proyecto y escribí los primeros tests de componentes: render del header, botones visibles y verificación de texto."
- "Aplica Tests de componentes (nivel basico) a mi trabajo actual con Testing JS/TS: prioriza Los tests consultan como el usuario (getByRole, getByText)"
- "Revisa mi testing-js y dime qué pasos de Tests de componentes me faltan en este nivel"