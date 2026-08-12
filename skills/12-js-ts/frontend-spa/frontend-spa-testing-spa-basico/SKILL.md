---
name: frontend-spa-testing-spa-basico
description: Testing de SPA · nivel Básico · SPAs vanilla y Vite. Probás la SPA con Vitest y Testing Library: componentes, flujos y regresiones. Objetivo del nivel: Escribir los primeros tests de la SPA
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "testing-spa"
  nivel: basico
  stack: "Vite, Custom Elements, Fetch, PHP 8.3"
---

# Testing de SPA — Básico

## Qué hace este skill

Probás la SPA con Vitest y Testing Library: componentes, flujos y regresiones. En este nivel se entrega: **Escribir los primeros tests de la SPA**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **SPAs vanilla y Vite** (Vite, Custom Elements, Fetch, PHP 8.3) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Testing de SPA** dentro de SPAs vanilla y Vite.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, Custom Elements, Fetch, PHP 8.3**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Configurar Vitest y jsdom en el proyecto
2. Testear funciones puras de servicios
3. Renderizar un componente y verificar su salida
4. Simular clicks y verificar el resultado

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Escribir los primeros tests de la SPA | texto | sí | resultado medible |
| $stack | SPAs vanilla y Vite | texto | sí | 12-js-ts/frontend-spa |
| $tecnologias | Vite, Custom Elements, Fetch, PHP 8.3 | texto | sí | Vite, Custom Elements, Fetch, PHP 8.3 |
| $tareas_clave | Configurar Vitest y jsdom en el proyecto · Testear funciones puras de servicios · Renderizar un componente y verificar su salida · Simular clicks y verificar el resultado | lista | sí | 3-4 pasos |
| $criterios_clave | Los tests corren en CI sin setup manual · Los tests verifican comportamiento, no implementación | lista | sí | calidad verificable |
| $prompt_guia | Configurá Vitest con jsdom y escribí los primeros tests: funciones del carrito, render del header y el flujo de click del botón de logout. | texto | no | "Testing de SPA" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los tests corren en CI sin setup manual
- [ ] Los tests verifican comportamiento, no implementación

## Ejemplos de prompts

- "Configurá Vitest con jsdom y escribí los primeros tests: funciones del carrito, render del header y el flujo de click del botón de logout."
- "Aplica Testing de SPA (nivel basico) a mi trabajo actual con SPAs vanilla y Vite: prioriza Los tests corren en CI sin setup manual"
- "Revisa mi frontend-spa y dime qué pasos de Testing de SPA me faltan en este nivel"