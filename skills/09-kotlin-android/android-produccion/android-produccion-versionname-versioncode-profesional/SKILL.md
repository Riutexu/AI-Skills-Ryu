---
name: android-produccion-versionname-versioncode-profesional
description: versionName y versionCode · nivel Profesional · Publicación y producción Android. Versionado correcto y automatizado de los releases. Objetivo del nivel: Estrategia de versionado del producto: semver y trazabilidad.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "versionname-versioncode"
  nivel: profesional
  stack: "Play Store, firmas, CI, testing, releases"
---

# versionName y versionCode — Profesional

## Qué hace este skill

Versionado correcto y automatizado de los releases. En este nivel se entrega: **Estrategia de versionado del producto: semver y trazabilidad.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Publicación y producción Android** (Play Store, firmas, CI, testing, releases) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **versionName y versionCode** dentro de Publicación y producción Android.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Play Store, firmas, CI, testing, releases**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Adoptar semver para el versionName
2. Vincular la versión al commit del release
3. Automatizar el changelog por versión
4. Documentar la política de versionado

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Estrategia de versionado del producto: semver y trazabilidad. | texto | sí | resultado medible |
| $stack | Publicación y producción Android | texto | sí | 09-kotlin-android/android-produccion |
| $tecnologias | Play Store, firmas, CI, testing, releases | texto | sí | Play Store, firmas, CI, testing, releases |
| $tareas_clave | Adoptar semver para el versionName · Vincular la versión al commit del release · Automatizar el changelog por versión · Documentar la política de versionado | lista | sí | 3-4 pasos |
| $criterios_clave | El versionado semver está aplicado · Cada versión se vincula a su commit | lista | sí | calidad verificable |
| $prompt_guia | Adoptá semver en Ryutify con el versionCode generado por el CI y el changelog automático vinculado a los commits. | texto | no | "versionName y versionCode" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El versionado semver está aplicado
- [ ] Cada versión se vincula a su commit

## Ejemplos de prompts

- "Adoptá semver en Ryutify con el versionCode generado por el CI y el changelog automático vinculado a los commits."
- "Aplica versionName y versionCode (nivel profesional) a mi trabajo actual con Publicación y producción Android: prioriza El versionado semver está aplicado"
- "Revisa mi android-produccion y dime qué pasos de versionName y versionCode me faltan en este nivel"