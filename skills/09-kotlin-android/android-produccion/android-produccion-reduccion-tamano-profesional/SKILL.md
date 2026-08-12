---
name: android-produccion-reduccion-tamano-profesional
description: Reducción de tamaño del APK y AAB · nivel Profesional · Publicación y producción Android. Baja el tamaño de Ryutify sin sacrificar features. Objetivo del nivel: Presupuesto de tamaño del producto con monitoreo.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "reduccion-tamano"
  nivel: profesional
  stack: "Play Store, firmas, CI, testing, releases"
---

# Reducción de tamaño del APK y AAB — Profesional

## Qué hace este skill

Baja el tamaño de Ryutify sin sacrificar features. En este nivel se entrega: **Presupuesto de tamaño del producto con monitoreo.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Publicación y producción Android** (Play Store, firmas, CI, testing, releases) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Reducción de tamaño del APK y AAB** dentro de Publicación y producción Android.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Play Store, firmas, CI, testing, releases**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir el presupuesto de tamaño por versión
2. Monitorear el tamaño en el CI
3. Evaluar el AAB dinámico
4. Documentar las técnicas aplicadas

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Presupuesto de tamaño del producto con monitoreo. | texto | sí | resultado medible |
| $stack | Publicación y producción Android | texto | sí | 09-kotlin-android/android-produccion |
| $tecnologias | Play Store, firmas, CI, testing, releases | texto | sí | Play Store, firmas, CI, testing, releases |
| $tareas_clave | Definir el presupuesto de tamaño por versión · Monitorear el tamaño en el CI · Evaluar el AAB dinámico · Documentar las técnicas aplicadas | lista | sí | 3-4 pasos |
| $criterios_clave | El presupuesto de tamaño se monitorea en el CI · El AAB dinámico está evaluado | lista | sí | calidad verificable |
| $prompt_guia | Quiero un presupuesto de tamaño para Ryutify con monitoreo en el CI y la evaluación del delivery dinámico. | texto | no | "Reducción de tamaño del APK y AAB" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El presupuesto de tamaño se monitorea en el CI
- [ ] El AAB dinámico está evaluado

## Ejemplos de prompts

- "Quiero un presupuesto de tamaño para Ryutify con monitoreo en el CI y la evaluación del delivery dinámico."
- "Aplica Reducción de tamaño del APK y AAB (nivel profesional) a mi trabajo actual con Publicación y producción Android: prioriza El presupuesto de tamaño se monitorea en el CI"
- "Revisa mi android-produccion y dime qué pasos de Reducción de tamaño del APK y AAB me faltan en este nivel"