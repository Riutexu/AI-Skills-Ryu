---
name: android-produccion-versionname-versioncode-basico
description: versionName y versionCode · nivel Básico · Publicación y producción Android. Versionado correcto y automatizado de los releases. Objetivo del nivel: Configurar versionName y versionCode a mano.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "versionname-versioncode"
  nivel: basico
  stack: "Play Store, firmas, CI, testing, releases"
---

# versionName y versionCode — Básico

## Qué hace este skill

Versionado correcto y automatizado de los releases. En este nivel se entrega: **Configurar versionName y versionCode a mano.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Publicación y producción Android** (Play Store, firmas, CI, testing, releases) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **versionName y versionCode** dentro de Publicación y producción Android.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Play Store, firmas, CI, testing, releases**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir versionCode y versionName coherentes
2. Mostrar la versión en la pantalla de ajustes
3. Incrementar la versión en cada release
4. Verificar la versión en el device

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Configurar versionName y versionCode a mano. | texto | sí | resultado medible |
| $stack | Publicación y producción Android | texto | sí | 09-kotlin-android/android-produccion |
| $tecnologias | Play Store, firmas, CI, testing, releases | texto | sí | Play Store, firmas, CI, testing, releases |
| $tareas_clave | Definir versionCode y versionName coherentes · Mostrar la versión en la pantalla de ajustes · Incrementar la versión en cada release · Verificar la versión en el device | lista | sí | 3-4 pasos |
| $criterios_clave | La versión se muestra en ajustes · Cada release incrementa el versionCode | lista | sí | calidad verificable |
| $prompt_guia | Configurá el versionado de Ryutify: versionCode y versionName coherentes y la versión visible en ajustes. | texto | no | "versionName y versionCode" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La versión se muestra en ajustes
- [ ] Cada release incrementa el versionCode

## Ejemplos de prompts

- "Configurá el versionado de Ryutify: versionCode y versionName coherentes y la versión visible en ajustes."
- "Aplica versionName y versionCode (nivel basico) a mi trabajo actual con Publicación y producción Android: prioriza La versión se muestra en ajustes"
- "Revisa mi android-produccion y dime qué pasos de versionName y versionCode me faltan en este nivel"