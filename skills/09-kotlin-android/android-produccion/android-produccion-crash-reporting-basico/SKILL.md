---
name: android-produccion-crash-reporting-basico
description: Crash reporting · nivel Básico · Publicación y producción Android. Captura, prioriza y resuelve crashes con datos reales. Objetivo del nivel: Integrar un crash reporter en la app.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "crash-reporting"
  nivel: basico
  stack: "Play Store, firmas, CI, testing, releases"
---

# Crash reporting — Básico

## Qué hace este skill

Captura, prioriza y resuelve crashes con datos reales. En este nivel se entrega: **Integrar un crash reporter en la app.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Publicación y producción Android** (Play Store, firmas, CI, testing, releases) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Crash reporting** dentro de Publicación y producción Android.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Play Store, firmas, CI, testing, releases**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Integrar el crash reporter
2. Inicializarlo en la Application
3. Verificar la llegada de un crash
4. Revisar el primer crash en el dashboard

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Integrar un crash reporter en la app. | texto | sí | resultado medible |
| $stack | Publicación y producción Android | texto | sí | 09-kotlin-android/android-produccion |
| $tecnologias | Play Store, firmas, CI, testing, releases | texto | sí | Play Store, firmas, CI, testing, releases |
| $tareas_clave | Integrar el crash reporter · Inicializarlo en la Application · Verificar la llegada de un crash · Revisar el primer crash en el dashboard | lista | sí | 3-4 pasos |
| $criterios_clave | Los crashes llegan al dashboard · El stacktrace se lee correctamente | lista | sí | calidad verificable |
| $prompt_guia | Integrá un crash reporter en Ryutify, inicializalo en la Application y verificá que llegue el primer crash con su stacktrace. | texto | no | "Crash reporting" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los crashes llegan al dashboard
- [ ] El stacktrace se lee correctamente

## Ejemplos de prompts

- "Integrá un crash reporter en Ryutify, inicializalo en la Application y verificá que llegue el primer crash con su stacktrace."
- "Aplica Crash reporting (nivel basico) a mi trabajo actual con Publicación y producción Android: prioriza Los crashes llegan al dashboard"
- "Revisa mi android-produccion y dime qué pasos de Crash reporting me faltan en este nivel"