---
name: frontend-spa-formularios-validacion-profesional
description: Formularios y validación · nivel Profesional · SPAs vanilla y Vite. Construís formularios robustos con validación en vivo, en submit y contra el backend. Objetivo del nivel: Integrar la validación con el backend y diseñar UX de errores
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "formularios-validacion"
  nivel: profesional
  stack: "Vite, Custom Elements, Fetch, PHP 8.3"
---

# Formularios y validación — Profesional

## Qué hace este skill

Construís formularios robustos con validación en vivo, en submit y contra el backend. En este nivel se entrega: **Integrar la validación con el backend y diseñar UX de errores**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **SPAs vanilla y Vite** (Vite, Custom Elements, Fetch, PHP 8.3) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Formularios y validación** dentro de SPAs vanilla y Vite.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, Custom Elements, Fetch, PHP 8.3**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Mapear errores del backend a los campos del form
2. Implementar validación asíncrona (disponibilidad de usuario)
3. Diseñar mensajes de error accesibles y consistentes
4. Escribir tests de los flujos de validación

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Integrar la validación con el backend y diseñar UX de errores | texto | sí | resultado medible |
| $stack | SPAs vanilla y Vite | texto | sí | 12-js-ts/frontend-spa |
| $tecnologias | Vite, Custom Elements, Fetch, PHP 8.3 | texto | sí | Vite, Custom Elements, Fetch, PHP 8.3 |
| $tareas_clave | Mapear errores del backend a los campos del form · Implementar validación asíncrona (disponibilidad de usuario) · Diseñar mensajes de error accesibles y consistentes · Escribir tests de los flujos de validación | lista | sí | 3-4 pasos |
| $criterios_clave | Los errores del backend aparecen en el campo correcto · Los mensajes cumplen criterios de accesibilidad | lista | sí | calidad verificable |
| $prompt_guia | El backend PHP devuelve errores por campo: mapealos al formulario, agregá validación asíncrona de usuario disponible y dejá los mensajes accesibles y consistentes. | texto | no | "Formularios y validación" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los errores del backend aparecen en el campo correcto
- [ ] Los mensajes cumplen criterios de accesibilidad

## Ejemplos de prompts

- "El backend PHP devuelve errores por campo: mapealos al formulario, agregá validación asíncrona de usuario disponible y dejá los mensajes accesibles y consistentes."
- "Aplica Formularios y validación (nivel profesional) a mi trabajo actual con SPAs vanilla y Vite: prioriza Los errores del backend aparecen en el campo correcto"
- "Revisa mi frontend-spa y dime qué pasos de Formularios y validación me faltan en este nivel"