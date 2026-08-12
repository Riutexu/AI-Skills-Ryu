---
name: frontend-spa-rendering-dom-basico
description: Rendering y DOM · nivel Básico · SPAs vanilla y Vite. Renderizás vistas de forma eficiente, evitando reflows y actualizaciones innecesarias del DOM. Objetivo del nivel: Renderizar vistas con template strings y re-render simple
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "rendering-dom"
  nivel: basico
  stack: "Vite, Custom Elements, Fetch, PHP 8.3"
---

# Rendering y DOM — Básico

## Qué hace este skill

Renderizás vistas de forma eficiente, evitando reflows y actualizaciones innecesarias del DOM. En este nivel se entrega: **Renderizar vistas con template strings y re-render simple**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **SPAs vanilla y Vite** (Vite, Custom Elements, Fetch, PHP 8.3) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Rendering y DOM** dentro de SPAs vanilla y Vite.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, Custom Elements, Fetch, PHP 8.3**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Construir HTML con template literals e innerHTML
2. Actualizar secciones de la vista al cambiar datos
3. Escapar el contenido del usuario antes de insertar
4. Crear y remover nodos con createElement y remove

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Renderizar vistas con template strings y re-render simple | texto | sí | resultado medible |
| $stack | SPAs vanilla y Vite | texto | sí | 12-js-ts/frontend-spa |
| $tecnologias | Vite, Custom Elements, Fetch, PHP 8.3 | texto | sí | Vite, Custom Elements, Fetch, PHP 8.3 |
| $tareas_clave | Construir HTML con template literals e innerHTML · Actualizar secciones de la vista al cambiar datos · Escapar el contenido del usuario antes de insertar · Crear y remover nodos con createElement y remove | lista | sí | 3-4 pasos |
| $criterios_clave | Los datos del usuario se escapan siempre · Las actualizaciones reflejan el estado actual | lista | sí | calidad verificable |
| $prompt_guia | Renderizá la lista de pedidos con template literals dentro de un contenedor, escapando los campos del usuario, y actualizala cuando cambie el store. | texto | no | "Rendering y DOM" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los datos del usuario se escapan siempre
- [ ] Las actualizaciones reflejan el estado actual

## Ejemplos de prompts

- "Renderizá la lista de pedidos con template literals dentro de un contenedor, escapando los campos del usuario, y actualizala cuando cambie el store."
- "Aplica Rendering y DOM (nivel basico) a mi trabajo actual con SPAs vanilla y Vite: prioriza Los datos del usuario se escapan siempre"
- "Revisa mi frontend-spa y dime qué pasos de Rendering y DOM me faltan en este nivel"