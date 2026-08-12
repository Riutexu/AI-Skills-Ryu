---
name: seguridad-powershell-secretos-en-disco-profesional
description: Evitar secretos en disco · nivel Profesional · Seguridad y hardening. Que ningún secreto quede en archivos: logs, dump, configs y el arte de no escribir secretos nunca. Objetivo del nivel: Prevención activa: secret scanning en CI, rotación forzada y playbook de filtración
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "secretos-en-disco"
  nivel: profesional
  stack: "ExecutionPolicy, firma de scripts, SecureString, Windows 11"
---

# Evitar secretos en disco — Profesional

## Qué hace este skill

Que ningún secreto quede en archivos: logs, dump, configs y el arte de no escribir secretos nunca. En este nivel se entrega: **Prevención activa: secret scanning en CI, rotación forzada y playbook de filtración**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Seguridad y hardening** (ExecutionPolicy, firma de scripts, SecureString, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Evitar secretos en disco** dentro de Seguridad y hardening.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **ExecutionPolicy, firma de scripts, SecureString, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Integrar secret scanning en el pipeline
2. Rotar secretos expuestos y documentarlo
3. Escribir un playbook de filtración
4. Auditar el historial completo de la suite

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Prevención activa: secret scanning en CI, rotación forzada y playbook de filtración | texto | sí | resultado medible |
| $stack | Seguridad y hardening | texto | sí | 10-powershell/seguridad-powershell |
| $tecnologias | ExecutionPolicy, firma de scripts, SecureString, Windows 11 | texto | sí | ExecutionPolicy, firma de scripts, SecureString, Windows 11 |
| $tareas_clave | Integrar secret scanning en el pipeline · Rotar secretos expuestos y documentarlo · Escribir un playbook de filtración · Auditar el historial completo de la suite | lista | sí | 3-4 pasos |
| $criterios_clave | Ningún commit con secretos llega al repo · El playbook de filtración está documentado y práctico | lista | sí | calidad verificable |
| $prompt_guia | Quiero secret scanning en el CI de RYU-TUI, un playbook para cuando se filtre algo y la rotación forzada: diseñá el flujo completo de prevención y respuesta. | texto | no | "Evitar secretos en disco" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Ningún commit con secretos llega al repo
- [ ] El playbook de filtración está documentado y práctico

## Ejemplos de prompts

- "Quiero secret scanning en el CI de RYU-TUI, un playbook para cuando se filtre algo y la rotación forzada: diseñá el flujo completo de prevención y respuesta."
- "Aplica Evitar secretos en disco (nivel profesional) a mi trabajo actual con Seguridad y hardening: prioriza Ningún commit con secretos llega al repo"
- "Revisa mi seguridad-powershell y dime qué pasos de Evitar secretos en disco me faltan en este nivel"