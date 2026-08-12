---
name: seguridad-powershell-verificacion-integridad-profesional
description: Verificación de integridad · nivel Profesional · Seguridad y hardening. Que tus scripts sean lo que dicen ser: hashes, firmas, checksums y detección de alteraciones. Objetivo del nivel: Cadena de confianza completa: origen verificado, firma con timestamp y respuesta a alteraciones
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "verificacion-integridad"
  nivel: profesional
  stack: "ExecutionPolicy, firma de scripts, SecureString, Windows 11"
---

# Verificación de integridad — Profesional

## Qué hace este skill

Que tus scripts sean lo que dicen ser: hashes, firmas, checksums y detección de alteraciones. En este nivel se entrega: **Cadena de confianza completa: origen verificado, firma con timestamp y respuesta a alteraciones**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Seguridad y hardening** (ExecutionPolicy, firma de scripts, SecureString, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Verificación de integridad** dentro de Seguridad y hardening.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **ExecutionPolicy, firma de scripts, SecureString, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Verificar la cadena de confianza de cada release
2. Usar firma con timestamp para verificaciones futuras
3. Definir el proceso de respuesta a una alteración
4. Auditar la integridad histórica de las releases

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Cadena de confianza completa: origen verificado, firma con timestamp y respuesta a alteraciones | texto | sí | resultado medible |
| $stack | Seguridad y hardening | texto | sí | 10-powershell/seguridad-powershell |
| $tecnologias | ExecutionPolicy, firma de scripts, SecureString, Windows 11 | texto | sí | ExecutionPolicy, firma de scripts, SecureString, Windows 11 |
| $tareas_clave | Verificar la cadena de confianza de cada release · Usar firma con timestamp para verificaciones futuras · Definir el proceso de respuesta a una alteración · Auditar la integridad histórica de las releases | lista | sí | 3-4 pasos |
| $criterios_clave | Cada release se verifica por hash, firma y timestamp · El proceso de respuesta ante alteración está definido | lista | sí | calidad verificable |
| $prompt_guia | Quiero una cadena de confianza completa para las releases de RYU-TUI: hash más firma con timestamp, verificación automática y el proceso de respuesta ante alteraciones. | texto | no | "Verificación de integridad" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Cada release se verifica por hash, firma y timestamp
- [ ] El proceso de respuesta ante alteración está definido

## Ejemplos de prompts

- "Quiero una cadena de confianza completa para las releases de RYU-TUI: hash más firma con timestamp, verificación automática y el proceso de respuesta ante alteraciones."
- "Aplica Verificación de integridad (nivel profesional) a mi trabajo actual con Seguridad y hardening: prioriza Cada release se verifica por hash, firma y timestamp"
- "Revisa mi seguridad-powershell y dime qué pasos de Verificación de integridad me faltan en este nivel"