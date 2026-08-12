---
name: android-produccion-crash-reporting-profesional
description: Crash reporting · nivel Profesional · Publicación y producción Android. Captura, prioriza y resuelve crashes con datos reales. Objetivo del nivel: Cultura de estabilidad: presupuesto de crash y alertas.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "crash-reporting"
  nivel: profesional
  stack: "Play Store, firmas, CI, testing, releases"
---

# Crash reporting — Profesional

## Qué hace este skill

Captura, prioriza y resuelve crashes con datos reales. En este nivel se entrega: **Cultura de estabilidad: presupuesto de crash y alertas.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Publicación y producción Android** (Play Store, firmas, CI, testing, releases) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Crash reporting** dentro de Publicación y producción Android.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Play Store, firmas, CI, testing, releases**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir el presupuesto de crash por versión
2. Configurar alertas de regresión
3. Automatizar la desofuscación
4. Reportar la estabilidad por release

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Cultura de estabilidad: presupuesto de crash y alertas. | texto | sí | resultado medible |
| $stack | Publicación y producción Android | texto | sí | 09-kotlin-android/android-produccion |
| $tecnologias | Play Store, firmas, CI, testing, releases | texto | sí | Play Store, firmas, CI, testing, releases |
| $tareas_clave | Definir el presupuesto de crash por versión · Configurar alertas de regresión · Automatizar la desofuscación · Reportar la estabilidad por release | lista | sí | 3-4 pasos |
| $criterios_clave | Las alertas de regresión disparan automáticamente · El reporte de estabilidad es por release | lista | sí | calidad verificable |
| $prompt_guia | Quiero una cultura de estabilidad en Ryutify: presupuesto de crash, alertas de regresión y reporte por release. | texto | no | "Crash reporting" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las alertas de regresión disparan automáticamente
- [ ] El reporte de estabilidad es por release

## Ejemplos de prompts

- "Quiero una cultura de estabilidad en Ryutify: presupuesto de crash, alertas de regresión y reporte por release."
- "Aplica Crash reporting (nivel profesional) a mi trabajo actual con Publicación y producción Android: prioriza Las alertas de regresión disparan automáticamente"
- "Revisa mi android-produccion y dime qué pasos de Crash reporting me faltan en este nivel"