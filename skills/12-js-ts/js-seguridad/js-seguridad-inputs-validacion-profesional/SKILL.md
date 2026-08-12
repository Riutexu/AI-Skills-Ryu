---
name: js-seguridad-inputs-validacion-profesional
description: Inputs y validación · nivel Profesional · Seguridad web JS. Validás entradas en el cliente como primera línea y sin confiar en ellas como única. Objetivo del nivel: Diseñar la estrategia de validación en capas
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "inputs-validacion"
  nivel: profesional
  stack: "CSP, fetch, storage seguro, npm audit"
---

# Inputs y validación — Profesional

## Qué hace este skill

Validás entradas en el cliente como primera línea y sin confiar en ellas como única. En este nivel se entrega: **Diseñar la estrategia de validación en capas**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Seguridad web JS** (CSP, fetch, storage seguro, npm audit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Inputs y validación** dentro de Seguridad web JS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **CSP, fetch, storage seguro, npm audit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir la política de validación cliente-servidor
2. Crear validadores compartidos y verificables
3. Probar los límites con casos adversariales
4. Documentar los controles por campo

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar la estrategia de validación en capas | texto | sí | resultado medible |
| $stack | Seguridad web JS | texto | sí | 12-js-ts/js-seguridad |
| $tecnologias | CSP, fetch, storage seguro, npm audit | texto | sí | CSP, fetch, storage seguro, npm audit |
| $tareas_clave | Definir la política de validación cliente-servidor · Crear validadores compartidos y verificables · Probar los límites con casos adversariales · Documentar los controles por campo | lista | sí | 3-4 pasos |
| $criterios_clave | La validación del cliente es de UX y la del server es de verdad · Los casos adversariales están en los tests | lista | sí | calidad verificable |
| $prompt_guia | Diseñá la validación en capas: el cliente valida para UX, el backend PHP valida de verdad, y armá la batería de tests adversariales por campo. | texto | no | "Inputs y validación" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La validación del cliente es de UX y la del server es de verdad
- [ ] Los casos adversariales están en los tests

## Ejemplos de prompts

- "Diseñá la validación en capas: el cliente valida para UX, el backend PHP valida de verdad, y armá la batería de tests adversariales por campo."
- "Aplica Inputs y validación (nivel profesional) a mi trabajo actual con Seguridad web JS: prioriza La validación del cliente es de UX y la del server es de verdad"
- "Revisa mi js-seguridad y dime qué pasos de Inputs y validación me faltan en este nivel"