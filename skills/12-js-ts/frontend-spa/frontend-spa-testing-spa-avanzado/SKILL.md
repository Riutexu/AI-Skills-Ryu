---
name: frontend-spa-testing-spa-avanzado
description: Testing de SPA · nivel Avanzado · SPAs vanilla y Vite. Probás la SPA con Vitest y Testing Library: componentes, flujos y regresiones. Objetivo del nivel: Probar flujos de usuario y estados asíncronos
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "testing-spa"
  nivel: avanzado
  stack: "Vite, Custom Elements, Fetch, PHP 8.3"
---

# Testing de SPA — Avanzado

## Qué hace este skill

Probás la SPA con Vitest y Testing Library: componentes, flujos y regresiones. En este nivel se entrega: **Probar flujos de usuario y estados asíncronos**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **SPAs vanilla y Vite** (Vite, Custom Elements, Fetch, PHP 8.3) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Testing de SPA** dentro de SPAs vanilla y Vite.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, Custom Elements, Fetch, PHP 8.3**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Mockear fetch en tests de servicios
2. Probar estados de carga y error en la vista
3. Testear flujos de formulario completos
4. Usar user-event para interacciones realistas

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Probar flujos de usuario y estados asíncronos | texto | sí | resultado medible |
| $stack | SPAs vanilla y Vite | texto | sí | 12-js-ts/frontend-spa |
| $tecnologias | Vite, Custom Elements, Fetch, PHP 8.3 | texto | sí | Vite, Custom Elements, Fetch, PHP 8.3 |
| $tareas_clave | Mockear fetch en tests de servicios · Probar estados de carga y error en la vista · Testear flujos de formulario completos · Usar user-event para interacciones realistas | lista | sí | 3-4 pasos |
| $criterios_clave | Los mocks de fetch cubren éxito y error · Los tests de formulario validan el envío completo | lista | sí | calidad verificable |
| $prompt_guia | Escribí los tests del flujo de login: mock de fetch con éxito y 401, estados de carga/error en pantalla y validación del form con user-event. | texto | no | "Testing de SPA" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los mocks de fetch cubren éxito y error
- [ ] Los tests de formulario validan el envío completo

## Ejemplos de prompts

- "Escribí los tests del flujo de login: mock de fetch con éxito y 401, estados de carga/error en pantalla y validación del form con user-event."
- "Aplica Testing de SPA (nivel avanzado) a mi trabajo actual con SPAs vanilla y Vite: prioriza Los mocks de fetch cubren éxito y error"
- "Revisa mi frontend-spa y dime qué pasos de Testing de SPA me faltan en este nivel"