---
name: frontend-spa-testing-spa-profesional
description: Testing de SPA · nivel Profesional · SPAs vanilla y Vite. Probás la SPA con Vitest y Testing Library: componentes, flujos y regresiones. Objetivo del nivel: Diseñar la estrategia de testing de la app completa
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "testing-spa"
  nivel: profesional
  stack: "Vite, Custom Elements, Fetch, PHP 8.3"
---

# Testing de SPA — Profesional

## Qué hace este skill

Probás la SPA con Vitest y Testing Library: componentes, flujos y regresiones. En este nivel se entrega: **Diseñar la estrategia de testing de la app completa**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **SPAs vanilla y Vite** (Vite, Custom Elements, Fetch, PHP 8.3) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Testing de SPA** dentro de SPAs vanilla y Vite.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, Custom Elements, Fetch, PHP 8.3**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir la pirámide de tests del proyecto
2. Crear helpers y fixtures reutilizables de test
3. Escribir tests de regresión para bugs críticos
4. Establecer cobertura mínima por módulo

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar la estrategia de testing de la app completa | texto | sí | resultado medible |
| $stack | SPAs vanilla y Vite | texto | sí | 12-js-ts/frontend-spa |
| $tecnologias | Vite, Custom Elements, Fetch, PHP 8.3 | texto | sí | Vite, Custom Elements, Fetch, PHP 8.3 |
| $tareas_clave | Definir la pirámide de tests del proyecto · Crear helpers y fixtures reutilizables de test · Escribir tests de regresión para bugs críticos · Establecer cobertura mínima por módulo | lista | sí | 3-4 pasos |
| $criterios_clave | La pirámide de tests es equilibrada y se respeta · Los bugs corregidos quedan con test de regresión | lista | sí | calidad verificable |
| $prompt_guia | Diseñá la estrategia de testing de la SPA: pirámide (unit, integración, e2e), helpers y fixtures compartidos, y cobertura mínima por módulo documentada. | texto | no | "Testing de SPA" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La pirámide de tests es equilibrada y se respeta
- [ ] Los bugs corregidos quedan con test de regresión

## Ejemplos de prompts

- "Diseñá la estrategia de testing de la SPA: pirámide (unit, integración, e2e), helpers y fixtures compartidos, y cobertura mínima por módulo documentada."
- "Aplica Testing de SPA (nivel profesional) a mi trabajo actual con SPAs vanilla y Vite: prioriza La pirámide de tests es equilibrada y se respeta"
- "Revisa mi frontend-spa y dime qué pasos de Testing de SPA me faltan en este nivel"