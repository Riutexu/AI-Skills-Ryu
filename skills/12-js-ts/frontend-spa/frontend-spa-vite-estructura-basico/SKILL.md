---
name: frontend-spa-vite-estructura-basico
description: Vite y estructura · nivel Básico · SPAs vanilla y Vite. Organizás el proyecto Vite en capas y carpetas que escalan sin framework. Objetivo del nivel: Crear la estructura de carpetas base de una SPA Vite
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "vite-estructura"
  nivel: basico
  stack: "Vite, Custom Elements, Fetch, PHP 8.3"
---

# Vite y estructura — Básico

## Qué hace este skill

Organizás el proyecto Vite en capas y carpetas que escalan sin framework. En este nivel se entrega: **Crear la estructura de carpetas base de una SPA Vite**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **SPAs vanilla y Vite** (Vite, Custom Elements, Fetch, PHP 8.3) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Vite y estructura** dentro de SPAs vanilla y Vite.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, Custom Elements, Fetch, PHP 8.3**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Configurar Vite con entrada HTML y src/
2. Separar src en capas: core, ui, services, views
3. Configurar el dev server con proxy al backend
4. Crear un módulo app.js que orqueste el arranque

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Crear la estructura de carpetas base de una SPA Vite | texto | sí | resultado medible |
| $stack | SPAs vanilla y Vite | texto | sí | 12-js-ts/frontend-spa |
| $tecnologias | Vite, Custom Elements, Fetch, PHP 8.3 | texto | sí | Vite, Custom Elements, Fetch, PHP 8.3 |
| $tareas_clave | Configurar Vite con entrada HTML y src/ · Separar src en capas: core, ui, services, views · Configurar el dev server con proxy al backend · Crear un módulo app.js que orqueste el arranque | lista | sí | 3-4 pasos |
| $criterios_clave | El proyecto arranca con npm run dev · El proxy redirige las llamadas al backend PHP | lista | sí | calidad verificable |
| $prompt_guia | Armá la estructura base de la SPA Vite con capas separadas (core, ui, services, views) y configurá el proxy del dev server hacia el backend PHP local en el puerto 8080. | texto | no | "Vite y estructura" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El proyecto arranca con npm run dev
- [ ] El proxy redirige las llamadas al backend PHP

## Ejemplos de prompts

- "Armá la estructura base de la SPA Vite con capas separadas (core, ui, services, views) y configurá el proxy del dev server hacia el backend PHP local en el puerto 8080."
- "Aplica Vite y estructura (nivel basico) a mi trabajo actual con SPAs vanilla y Vite: prioriza El proyecto arranca con npm run dev"
- "Revisa mi frontend-spa y dime qué pasos de Vite y estructura me faltan en este nivel"