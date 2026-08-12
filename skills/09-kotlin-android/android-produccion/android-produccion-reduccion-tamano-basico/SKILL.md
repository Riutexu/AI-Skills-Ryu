---
name: android-produccion-reduccion-tamano-basico
description: Reducción de tamaño del APK y AAB · nivel Básico · Publicación y producción Android. Baja el tamaño de Ryutify sin sacrificar features. Objetivo del nivel: Reducir el tamaño básico del APK.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "reduccion-tamano"
  nivel: basico
  stack: "Play Store, firmas, CI, testing, releases"
---

# Reducción de tamaño del APK y AAB — Básico

## Qué hace este skill

Baja el tamaño de Ryutify sin sacrificar features. En este nivel se entrega: **Reducir el tamaño básico del APK.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Publicación y producción Android** (Play Store, firmas, CI, testing, releases) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Reducción de tamaño del APK y AAB** dentro de Publicación y producción Android.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Play Store, firmas, CI, testing, releases**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Medir el tamaño actual del APK
2. Activar shrinkResources
3. Eliminar los recursos no usados
4. Revisar las dependencias pesadas

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Reducir el tamaño básico del APK. | texto | sí | resultado medible |
| $stack | Publicación y producción Android | texto | sí | 09-kotlin-android/android-produccion |
| $tecnologias | Play Store, firmas, CI, testing, releases | texto | sí | Play Store, firmas, CI, testing, releases |
| $tareas_clave | Medir el tamaño actual del APK · Activar shrinkResources · Eliminar los recursos no usados · Revisar las dependencias pesadas | lista | sí | 3-4 pasos |
| $criterios_clave | El tamaño baja con shrinkResources · Las dependencias pesadas se identifican | lista | sí | calidad verificable |
| $prompt_guia | El APK de Ryutify pesa demasiado. Medí el tamaño, activá shrinkResources y encontrá las dependencias pesadas. | texto | no | "Reducción de tamaño del APK y AAB" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El tamaño baja con shrinkResources
- [ ] Las dependencias pesadas se identifican

## Ejemplos de prompts

- "El APK de Ryutify pesa demasiado. Medí el tamaño, activá shrinkResources y encontrá las dependencias pesadas."
- "Aplica Reducción de tamaño del APK y AAB (nivel basico) a mi trabajo actual con Publicación y producción Android: prioriza El tamaño baja con shrinkResources"
- "Revisa mi android-produccion y dime qué pasos de Reducción de tamaño del APK y AAB me faltan en este nivel"