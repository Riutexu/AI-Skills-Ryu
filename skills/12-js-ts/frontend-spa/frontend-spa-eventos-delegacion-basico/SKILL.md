---
name: frontend-spa-eventos-delegacion-basico
description: Eventos y delegación · nivel Básico · SPAs vanilla y Vite. Manejás eventos con delegación, custom events y flujo de captura/burbujeo controlado. Objetivo del nivel: Registrar y manejar eventos con addEventListener
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "eventos-delegacion"
  nivel: basico
  stack: "Vite, Custom Elements, Fetch, PHP 8.3"
---

# Eventos y delegación — Básico

## Qué hace este skill

Manejás eventos con delegación, custom events y flujo de captura/burbujeo controlado. En este nivel se entrega: **Registrar y manejar eventos con addEventListener**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **SPAs vanilla y Vite** (Vite, Custom Elements, Fetch, PHP 8.3) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Eventos y delegación** dentro de SPAs vanilla y Vite.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, Custom Elements, Fetch, PHP 8.3**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Agregar listeners de click, input y submit
2. Leer target y currentTarget en el handler
3. Usar preventDefault en envíos de formularios
4. Remover listeners cuando ya no hacen falta

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Registrar y manejar eventos con addEventListener | texto | sí | resultado medible |
| $stack | SPAs vanilla y Vite | texto | sí | 12-js-ts/frontend-spa |
| $tecnologias | Vite, Custom Elements, Fetch, PHP 8.3 | texto | sí | Vite, Custom Elements, Fetch, PHP 8.3 |
| $tareas_clave | Agregar listeners de click, input y submit · Leer target y currentTarget en el handler · Usar preventDefault en envíos de formularios · Remover listeners cuando ya no hacen falta | lista | sí | 3-4 pasos |
| $criterios_clave | Los formularios no recargan la página por defecto · Los listeners se limpian al destruir la vista | lista | sí | calidad verificable |
| $prompt_guia | Implementá los eventos de la vista de login: submit con preventDefault, input para validar en vivo y limpieza de listeners al salir de la ruta. | texto | no | "Eventos y delegación" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los formularios no recargan la página por defecto
- [ ] Los listeners se limpian al destruir la vista

## Ejemplos de prompts

- "Implementá los eventos de la vista de login: submit con preventDefault, input para validar en vivo y limpieza de listeners al salir de la ruta."
- "Aplica Eventos y delegación (nivel basico) a mi trabajo actual con SPAs vanilla y Vite: prioriza Los formularios no recargan la página por defecto"
- "Revisa mi frontend-spa y dime qué pasos de Eventos y delegación me faltan en este nivel"