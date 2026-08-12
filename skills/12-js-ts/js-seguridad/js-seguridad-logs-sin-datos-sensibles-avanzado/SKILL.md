---
name: js-seguridad-logs-sin-datos-sensibles-avanzado
description: Logs sin datos sensibles · nivel Avanzado · Seguridad web JS. Mantenés los logs y el reporting libres de datos personales y credenciales. Objetivo del nivel: Diseñar el saneamiento de datos en el reporte de errores
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "logs-sin-datos-sensibles"
  nivel: avanzado
  stack: "CSP, fetch, storage seguro, npm audit"
---

# Logs sin datos sensibles — Avanzado

## Qué hace este skill

Mantenés los logs y el reporting libres de datos personales y credenciales. En este nivel se entrega: **Diseñar el saneamiento de datos en el reporte de errores**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Seguridad web JS** (CSP, fetch, storage seguro, npm audit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Logs sin datos sensibles** dentro de Seguridad web JS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **CSP, fetch, storage seguro, npm audit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Redactar campos sensibles en el error tracking
2. Estructurar los eventos con campos fijos no sensibles
3. Evitar el contexto del DOM en el reporte
4. Definir la retención de los datos de error

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Diseñar el saneamiento de datos en el reporte de errores | texto | sí | resultado medible |
| $stack | Seguridad web JS | texto | sí | 12-js-ts/js-seguridad |
| $tecnologias | CSP, fetch, storage seguro, npm audit | texto | sí | CSP, fetch, storage seguro, npm audit |
| $tareas_clave | Redactar campos sensibles en el error tracking · Estructurar los eventos con campos fijos no sensibles · Evitar el contexto del DOM en el reporte · Definir la retención de los datos de error | lista | sí | 3-4 pasos |
| $criterios_clave | El error tracking recibe datos saneados · La retención de errores está definida | lista | sí | calidad verificable |
| $prompt_guia | El error tracking recibía forms enteros con contraseñas: implementá la redacción de campos, reducí el contexto reportado y definí la retención. | texto | no | "Logs sin datos sensibles" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El error tracking recibe datos saneados
- [ ] La retención de errores está definida

## Ejemplos de prompts

- "El error tracking recibía forms enteros con contraseñas: implementá la redacción de campos, reducí el contexto reportado y definí la retención."
- "Aplica Logs sin datos sensibles (nivel avanzado) a mi trabajo actual con Seguridad web JS: prioriza El error tracking recibe datos saneados"
- "Revisa mi js-seguridad y dime qué pasos de Logs sin datos sensibles me faltan en este nivel"