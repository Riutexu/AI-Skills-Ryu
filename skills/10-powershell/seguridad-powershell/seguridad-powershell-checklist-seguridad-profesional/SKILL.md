---
name: seguridad-powershell-checklist-seguridad-profesional
description: Checklist de seguridad de scripts · nivel Profesional · Seguridad y hardening. La lista de verificación final: qué revisar antes de dar un script por bueno en seguridad. Objetivo del nivel: Proceso de revisión de seguridad de la suite: revisores, gate en CI y mejora continua
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "checklist-seguridad"
  nivel: profesional
  stack: "ExecutionPolicy, firma de scripts, SecureString, Windows 11"
---

# Checklist de seguridad de scripts — Profesional

## Qué hace este skill

La lista de verificación final: qué revisar antes de dar un script por bueno en seguridad. En este nivel se entrega: **Proceso de revisión de seguridad de la suite: revisores, gate en CI y mejora continua**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Seguridad y hardening** (ExecutionPolicy, firma de scripts, SecureString, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Checklist de seguridad de scripts** dentro de Seguridad y hardening.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **ExecutionPolicy, firma de scripts, SecureString, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir el proceso de revisión por un revisor humano
2. Integrar la checklist como gate en el pipeline
3. Mantener el historial de hallazgos y su cierre
4. Actualizar la checklist con cada hallazgo nuevo

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Proceso de revisión de seguridad de la suite: revisores, gate en CI y mejora continua | texto | sí | resultado medible |
| $stack | Seguridad y hardening | texto | sí | 10-powershell/seguridad-powershell |
| $tecnologias | ExecutionPolicy, firma de scripts, SecureString, Windows 11 | texto | sí | ExecutionPolicy, firma de scripts, SecureString, Windows 11 |
| $tareas_clave | Definir el proceso de revisión por un revisor humano · Integrar la checklist como gate en el pipeline · Mantener el historial de hallazgos y su cierre · Actualizar la checklist con cada hallazgo nuevo | lista | sí | 3-4 pasos |
| $criterios_clave | Ningún release sale sin pasar la checklist completa · Los hallazgos se rastrean hasta su cierre | lista | sí | calidad verificable |
| $prompt_guia | Quiero un proceso de revisión de seguridad para RYU-TUI: checklist como gate de CI, revisor humano para lo crítico y seguimiento de hallazgos hasta cerrarlos. | texto | no | "Checklist de seguridad de scripts" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Ningún release sale sin pasar la checklist completa
- [ ] Los hallazgos se rastrean hasta su cierre

## Ejemplos de prompts

- "Quiero un proceso de revisión de seguridad para RYU-TUI: checklist como gate de CI, revisor humano para lo crítico y seguimiento de hallazgos hasta cerrarlos."
- "Aplica Checklist de seguridad de scripts (nivel profesional) a mi trabajo actual con Seguridad y hardening: prioriza Ningún release sale sin pasar la checklist completa"
- "Revisa mi seguridad-powershell y dime qué pasos de Checklist de seguridad de scripts me faltan en este nivel"