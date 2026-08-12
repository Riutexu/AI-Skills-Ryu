---
name: js-seguridad-inputs-validacion-basico
description: Inputs y validación · nivel Básico · Seguridad web JS. Validás entradas en el cliente como primera línea y sin confiar en ellas como única. Objetivo del nivel: Validar formatos y longitudes en el cliente
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "inputs-validacion"
  nivel: basico
  stack: "CSP, fetch, storage seguro, npm audit"
---

# Inputs y validación — Básico

## Qué hace este skill

Validás entradas en el cliente como primera línea y sin confiar en ellas como única. En este nivel se entrega: **Validar formatos y longitudes en el cliente**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Seguridad web JS** (CSP, fetch, storage seguro, npm audit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Inputs y validación** dentro de Seguridad web JS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **CSP, fetch, storage seguro, npm audit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Validar longitudes, formatos y rangos de los inputs
2. Normalizar entradas (trim, lowercase)
3. Mostrar errores claros al usuario
4. No confiar en la validación del cliente como única

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Validar formatos y longitudes en el cliente | texto | sí | resultado medible |
| $stack | Seguridad web JS | texto | sí | 12-js-ts/js-seguridad |
| $tecnologias | CSP, fetch, storage seguro, npm audit | texto | sí | CSP, fetch, storage seguro, npm audit |
| $tareas_clave | Validar longitudes, formatos y rangos de los inputs · Normalizar entradas (trim, lowercase) · Mostrar errores claros al usuario · No confiar en la validación del cliente como única | lista | sí | 3-4 pasos |
| $criterios_clave | Los inputs están normalizados antes de enviarse · La UI comunica las restricciones | lista | sí | calidad verificable |
| $prompt_guia | El formulario de alta acepta cualquier cosa: validá longitudes, formatos y rangos con mensajes claros y normalizá las entradas antes del envío. | texto | no | "Inputs y validación" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los inputs están normalizados antes de enviarse
- [ ] La UI comunica las restricciones

## Ejemplos de prompts

- "El formulario de alta acepta cualquier cosa: validá longitudes, formatos y rangos con mensajes claros y normalizá las entradas antes del envío."
- "Aplica Inputs y validación (nivel basico) a mi trabajo actual con Seguridad web JS: prioriza Los inputs están normalizados antes de enviarse"
- "Revisa mi js-seguridad y dime qué pasos de Inputs y validación me faltan en este nivel"