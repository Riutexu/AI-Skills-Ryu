---
name: android-produccion-testing-instrumentado-avanzado
description: Testing instrumentado · nivel Avanzado · Publicación y producción Android. Pruebas en dispositivos y emuladores: instrumentación y integración. Objetivo del nivel: Tests de integración con el player y la red real.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "testing-instrumentado"
  nivel: avanzado
  stack: "Play Store, firmas, CI, testing, releases"
---

# Testing instrumentado — Avanzado

## Qué hace este skill

Pruebas en dispositivos y emuladores: instrumentación y integración. En este nivel se entrega: **Tests de integración con el player y la red real.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Publicación y producción Android** (Play Store, firmas, CI, testing, releases) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Testing instrumentado** dentro de Publicación y producción Android.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Play Store, firmas, CI, testing, releases**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Testear la reproducción real en un device
2. Testear la integración con la API innertube
3. Usar emuladores con perfiles de red
4. Manejar la flakiness de los tests de red

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Tests de integración con el player y la red real. | texto | sí | resultado medible |
| $stack | Publicación y producción Android | texto | sí | 09-kotlin-android/android-produccion |
| $tecnologias | Play Store, firmas, CI, testing, releases | texto | sí | Play Store, firmas, CI, testing, releases |
| $tareas_clave | Testear la reproducción real en un device · Testear la integración con la API innertube · Usar emuladores con perfiles de red · Manejar la flakiness de los tests de red | lista | sí | 3-4 pasos |
| $criterios_clave | Los tests de integración son estables · La red se simula con perfiles | lista | sí | calidad verificable |
| $prompt_guia | Escribí tests de integración de Ryutify que reproduzcan audio real y usen perfiles de red simulados sin flakiness. | texto | no | "Testing instrumentado" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los tests de integración son estables
- [ ] La red se simula con perfiles

## Ejemplos de prompts

- "Escribí tests de integración de Ryutify que reproduzcan audio real y usen perfiles de red simulados sin flakiness."
- "Aplica Testing instrumentado (nivel avanzado) a mi trabajo actual con Publicación y producción Android: prioriza Los tests de integración son estables"
- "Revisa mi android-produccion y dime qué pasos de Testing instrumentado me faltan en este nivel"