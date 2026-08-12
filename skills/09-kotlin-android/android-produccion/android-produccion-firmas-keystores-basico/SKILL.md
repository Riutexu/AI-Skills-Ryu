---
name: android-produccion-firmas-keystores-basico
description: Firmas y keystores · nivel Básico · Publicación y producción Android. Firma tu app con seguridad y sin perder la clave jamás. Objetivo del nivel: Generar un keystore y firmar el build release.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "firmas-keystores"
  nivel: basico
  stack: "Play Store, firmas, CI, testing, releases"
---

# Firmas y keystores — Básico

## Qué hace este skill

Firma tu app con seguridad y sin perder la clave jamás. En este nivel se entrega: **Generar un keystore y firmar el build release.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Publicación y producción Android** (Play Store, firmas, CI, testing, releases) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Firmas y keystores** dentro de Publicación y producción Android.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Play Store, firmas, CI, testing, releases**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Generar un keystore con keytool
2. Configurar la firma en build.gradle.kts
3. Firmar el APK release
4. Verificar la firma del APK

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Generar un keystore y firmar el build release. | texto | sí | resultado medible |
| $stack | Publicación y producción Android | texto | sí | 09-kotlin-android/android-produccion |
| $tecnologias | Play Store, firmas, CI, testing, releases | texto | sí | Play Store, firmas, CI, testing, releases |
| $tareas_clave | Generar un keystore con keytool · Configurar la firma en build.gradle.kts · Firmar el APK release · Verificar la firma del APK | lista | sí | 3-4 pasos |
| $criterios_clave | El APK release está firmado y se instala · La firma se verifica con apksigner | lista | sí | calidad verificable |
| $prompt_guia | Generá el keystore de Ryutify y configurá la firma del build release, verificando la firma del APK. | texto | no | "Firmas y keystores" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El APK release está firmado y se instala
- [ ] La firma se verifica con apksigner

## Ejemplos de prompts

- "Generá el keystore de Ryutify y configurá la firma del build release, verificando la firma del APK."
- "Aplica Firmas y keystores (nivel basico) a mi trabajo actual con Publicación y producción Android: prioriza El APK release está firmado y se instala"
- "Revisa mi android-produccion y dime qué pasos de Firmas y keystores me faltan en este nivel"