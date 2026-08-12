---
name: android-produccion-crash-reporting-avanzado
description: Crash reporting · nivel Avanzado · Publicación y producción Android. Captura, prioriza y resuelve crashes con datos reales. Objetivo del nivel: Contexto enriquecido y priorización de crashes.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "crash-reporting"
  nivel: avanzado
  stack: "Play Store, firmas, CI, testing, releases"
---

# Crash reporting — Avanzado

## Qué hace este skill

Captura, prioriza y resuelve crashes con datos reales. En este nivel se entrega: **Contexto enriquecido y priorización de crashes.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Publicación y producción Android** (Play Store, firmas, CI, testing, releases) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Crash reporting** dentro de Publicación y producción Android.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Play Store, firmas, CI, testing, releases**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Agregar contexto custom a los crashes
2. Adjuntar logs del player a los crashes
3. Priorizar los crashes por impacto
4. Vincular los crashes a las versiones

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Contexto enriquecido y priorización de crashes. | texto | sí | resultado medible |
| $stack | Publicación y producción Android | texto | sí | 09-kotlin-android/android-produccion |
| $tecnologias | Play Store, firmas, CI, testing, releases | texto | sí | Play Store, firmas, CI, testing, releases |
| $tareas_clave | Agregar contexto custom a los crashes · Adjuntar logs del player a los crashes · Priorizar los crashes por impacto · Vincular los crashes a las versiones | lista | sí | 3-4 pasos |
| $criterios_clave | Los crashes traen el contexto de reproducción · La priorización considera el impacto | lista | sí | calidad verificable |
| $prompt_guia | Los crashes de reproducción de Ryutify no traen contexto. Agregá los datos del player y priorizalos por impacto y versión. | texto | no | "Crash reporting" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los crashes traen el contexto de reproducción
- [ ] La priorización considera el impacto

## Ejemplos de prompts

- "Los crashes de reproducción de Ryutify no traen contexto. Agregá los datos del player y priorizalos por impacto y versión."
- "Aplica Crash reporting (nivel avanzado) a mi trabajo actual con Publicación y producción Android: prioriza Los crashes traen el contexto de reproducción"
- "Revisa mi android-produccion y dime qué pasos de Crash reporting me faltan en este nivel"