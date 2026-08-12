---
name: js-seguridad-inputs-validacion-avanzado
description: Inputs y validación · nivel Avanzado · Seguridad web JS. Validás entradas en el cliente como primera línea y sin confiar en ellas como única. Objetivo del nivel: Proteger contra entradas maliciosas y payloads abusivos
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "inputs-validacion"
  nivel: avanzado
  stack: "CSP, fetch, storage seguro, npm audit"
---

# Inputs y validación — Avanzado

## Qué hace este skill

Validás entradas en el cliente como primera línea y sin confiar en ellas como única. En este nivel se entrega: **Proteger contra entradas maliciosas y payloads abusivos**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Seguridad web JS** (CSP, fetch, storage seguro, npm audit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Inputs y validación** dentro de Seguridad web JS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **CSP, fetch, storage seguro, npm audit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Limitar el tamaño de los payloads enviados
2. Sanitizar caracteres de control y Unicode
3. Manejar el contenido de archivos subidos
4. Evitar la inyección en URLs y query params

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Proteger contra entradas maliciosas y payloads abusivos | texto | sí | resultado medible |
| $stack | Seguridad web JS | texto | sí | 12-js-ts/js-seguridad |
| $tecnologias | CSP, fetch, storage seguro, npm audit | texto | sí | CSP, fetch, storage seguro, npm audit |
| $tareas_clave | Limitar el tamaño de los payloads enviados · Sanitizar caracteres de control y Unicode · Manejar el contenido de archivos subidos · Evitar la inyección en URLs y query params | lista | sí | 3-4 pasos |
| $criterios_clave | Los payloads excesivos se rechazan antes de enviar · Los archivos se validan por tipo y tamaño | lista | sí | calidad verificable |
| $prompt_guia | El endpoint de comentarios recibía payloads gigantes: validá tamaños, normalizá Unicode y controlá los tipos y tamaños de los archivos subidos. | texto | no | "Inputs y validación" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los payloads excesivos se rechazan antes de enviar
- [ ] Los archivos se validan por tipo y tamaño

## Ejemplos de prompts

- "El endpoint de comentarios recibía payloads gigantes: validá tamaños, normalizá Unicode y controlá los tipos y tamaños de los archivos subidos."
- "Aplica Inputs y validación (nivel avanzado) a mi trabajo actual con Seguridad web JS: prioriza Los payloads excesivos se rechazan antes de enviar"
- "Revisa mi js-seguridad y dime qué pasos de Inputs y validación me faltan en este nivel"