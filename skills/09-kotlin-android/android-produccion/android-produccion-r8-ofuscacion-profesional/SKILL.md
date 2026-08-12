---
name: android-produccion-r8-ofuscacion-profesional
description: R8 y ofuscación avanzada · nivel Profesional · Publicación y producción Android. Ofuscación efectiva sin romper la serialización ni el stacktrace. Objetivo del nivel: Gobernanza de R8: reglas mínimas y verificación automática.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "r8-ofuscacion"
  nivel: profesional
  stack: "Play Store, firmas, CI, testing, releases"
---

# R8 y ofuscación avanzada — Profesional

## Qué hace este skill

Ofuscación efectiva sin romper la serialización ni el stacktrace. En este nivel se entrega: **Gobernanza de R8: reglas mínimas y verificación automática.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Publicación y producción Android** (Play Store, firmas, CI, testing, releases) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **R8 y ofuscación avanzada** dentro de Publicación y producción Android.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Play Store, firmas, CI, testing, releases**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Auditar las reglas de R8 del proyecto
2. Verificar la ofuscación en el CI
3. Medir la protección real del código
4. Documentar las reglas y su motivo

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Gobernanza de R8: reglas mínimas y verificación automática. | texto | sí | resultado medible |
| $stack | Publicación y producción Android | texto | sí | 09-kotlin-android/android-produccion |
| $tecnologias | Play Store, firmas, CI, testing, releases | texto | sí | Play Store, firmas, CI, testing, releases |
| $tareas_clave | Auditar las reglas de R8 del proyecto · Verificar la ofuscación en el CI · Medir la protección real del código · Documentar las reglas y su motivo | lista | sí | 3-4 pasos |
| $criterios_clave | Cada regla de R8 tiene su justificación · El CI verifica la ofuscación | lista | sí | calidad verificable |
| $prompt_guia | Quiero gobernanza de R8 en Ryutify: reglas mínimas justificadas, verificación en el CI y medición de la protección. | texto | no | "R8 y ofuscación avanzada" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Cada regla de R8 tiene su justificación
- [ ] El CI verifica la ofuscación

## Ejemplos de prompts

- "Quiero gobernanza de R8 en Ryutify: reglas mínimas justificadas, verificación en el CI y medición de la protección."
- "Aplica R8 y ofuscación avanzada (nivel profesional) a mi trabajo actual con Publicación y producción Android: prioriza Cada regla de R8 tiene su justificación"
- "Revisa mi android-produccion y dime qué pasos de R8 y ofuscación avanzada me faltan en este nivel"