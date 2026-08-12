---
name: android-produccion-r8-ofuscacion-basico
description: R8 y ofuscación avanzada · nivel Básico · Publicación y producción Android. Ofuscación efectiva sin romper la serialización ni el stacktrace. Objetivo del nivel: Entender el flujo completo de R8 en el release.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "r8-ofuscacion"
  nivel: basico
  stack: "Play Store, firmas, CI, testing, releases"
---

# R8 y ofuscación avanzada — Básico

## Qué hace este skill

Ofuscación efectiva sin romper la serialización ni el stacktrace. En este nivel se entrega: **Entender el flujo completo de R8 en el release.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Publicación y producción Android** (Play Store, firmas, CI, testing, releases) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **R8 y ofuscación avanzada** dentro de Publicación y producción Android.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Play Store, firmas, CI, testing, releases**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Revisar las tareas de R8 en el build
2. Verificar las reglas por librería
3. Comparar el tamaño con y sin R8
4. Revisar el reporte de R8 del release

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Entender el flujo completo de R8 en el release. | texto | sí | resultado medible |
| $stack | Publicación y producción Android | texto | sí | 09-kotlin-android/android-produccion |
| $tecnologias | Play Store, firmas, CI, testing, releases | texto | sí | Play Store, firmas, CI, testing, releases |
| $tareas_clave | Revisar las tareas de R8 en el build · Verificar las reglas por librería · Comparar el tamaño con y sin R8 · Revisar el reporte de R8 del release | lista | sí | 3-4 pasos |
| $criterios_clave | El reporte de R8 se revisa en cada release · El tamaño final está documentado | lista | sí | calidad verificable |
| $prompt_guia | Revisá el flujo de R8 de Ryutify: reporte, reglas por librería y tamaño final del release documentado. | texto | no | "R8 y ofuscación avanzada" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El reporte de R8 se revisa en cada release
- [ ] El tamaño final está documentado

## Ejemplos de prompts

- "Revisá el flujo de R8 de Ryutify: reporte, reglas por librería y tamaño final del release documentado."
- "Aplica R8 y ofuscación avanzada (nivel basico) a mi trabajo actual con Publicación y producción Android: prioriza El reporte de R8 se revisa en cada release"
- "Revisa mi android-produccion y dime qué pasos de R8 y ofuscación avanzada me faltan en este nivel"