---
name: android-produccion-r8-ofuscacion-avanzado
description: R8 y ofuscación avanzada · nivel Avanzado · Publicación y producción Android. Ofuscación efectiva sin romper la serialización ni el stacktrace. Objetivo del nivel: Reglas a medida y desofuscación de stacktraces.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "r8-ofuscacion"
  nivel: avanzado
  stack: "Play Store, firmas, CI, testing, releases"
---

# R8 y ofuscación avanzada — Avanzado

## Qué hace este skill

Ofuscación efectiva sin romper la serialización ni el stacktrace. En este nivel se entrega: **Reglas a medida y desofuscación de stacktraces.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Publicación y producción Android** (Play Store, firmas, CI, testing, releases) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **R8 y ofuscación avanzada** dentro de Publicación y producción Android.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Play Store, firmas, CI, testing, releases**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Escribir reglas específicas para la serialización
2. Subir el mapping al crash reporter
3. Desofuscar un crash real
4. Revisar los kept items innecesarios

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Reglas a medida y desofuscación de stacktraces. | texto | sí | resultado medible |
| $stack | Publicación y producción Android | texto | sí | 09-kotlin-android/android-produccion |
| $tecnologias | Play Store, firmas, CI, testing, releases | texto | sí | Play Store, firmas, CI, testing, releases |
| $tareas_clave | Escribir reglas específicas para la serialización · Subir el mapping al crash reporter · Desofuscar un crash real · Revisar los kept items innecesarios | lista | sí | 3-4 pasos |
| $criterios_clave | El mapping se sube automáticamente · La desofuscación de crashes funciona | lista | sí | calidad verificable |
| $prompt_guia | El crash reporting de Ryutify muestra stacktraces ofuscados. Subí el mapping automáticamente y desofuscá un crash real. | texto | no | "R8 y ofuscación avanzada" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El mapping se sube automáticamente
- [ ] La desofuscación de crashes funciona

## Ejemplos de prompts

- "El crash reporting de Ryutify muestra stacktraces ofuscados. Subí el mapping automáticamente y desofuscá un crash real."
- "Aplica R8 y ofuscación avanzada (nivel avanzado) a mi trabajo actual con Publicación y producción Android: prioriza El mapping se sube automáticamente"
- "Revisa mi android-produccion y dime qué pasos de R8 y ofuscación avanzada me faltan en este nivel"