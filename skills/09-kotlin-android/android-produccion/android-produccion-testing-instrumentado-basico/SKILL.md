---
name: android-produccion-testing-instrumentado-basico
description: Testing instrumentado · nivel Básico · Publicación y producción Android. Pruebas en dispositivos y emuladores: instrumentación y integración. Objetivo del nivel: Configurar y correr los primeros tests instrumentados.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "testing-instrumentado"
  nivel: basico
  stack: "Play Store, firmas, CI, testing, releases"
---

# Testing instrumentado — Básico

## Qué hace este skill

Pruebas en dispositivos y emuladores: instrumentación y integración. En este nivel se entrega: **Configurar y correr los primeros tests instrumentados.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Publicación y producción Android** (Play Store, firmas, CI, testing, releases) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Testing instrumentado** dentro de Publicación y producción Android.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Play Store, firmas, CI, testing, releases**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Configurar las dependencias de instrumentación
2. Escribir un test de Activity básico
3. Correr los tests en un emulador
4. Revisar los resultados en el device

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Configurar y correr los primeros tests instrumentados. | texto | sí | resultado medible |
| $stack | Publicación y producción Android | texto | sí | 09-kotlin-android/android-produccion |
| $tecnologias | Play Store, firmas, CI, testing, releases | texto | sí | Play Store, firmas, CI, testing, releases |
| $tareas_clave | Configurar las dependencias de instrumentación · Escribir un test de Activity básico · Correr los tests en un emulador · Revisar los resultados en el device | lista | sí | 3-4 pasos |
| $criterios_clave | El test instrumentado corre en el emulador · Los resultados se reportan correctamente | lista | sí | calidad verificable |
| $prompt_guia | Configurá los tests instrumentados de Ryutify y escribí el primero que verifica el arranque de la app. | texto | no | "Testing instrumentado" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El test instrumentado corre en el emulador
- [ ] Los resultados se reportan correctamente

## Ejemplos de prompts

- "Configurá los tests instrumentados de Ryutify y escribí el primero que verifica el arranque de la app."
- "Aplica Testing instrumentado (nivel basico) a mi trabajo actual con Publicación y producción Android: prioriza El test instrumentado corre en el emulador"
- "Revisa mi android-produccion y dime qué pasos de Testing instrumentado me faltan en este nivel"