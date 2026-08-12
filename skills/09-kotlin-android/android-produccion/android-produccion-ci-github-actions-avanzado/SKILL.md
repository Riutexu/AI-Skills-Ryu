---
name: android-produccion-ci-github-actions-avanzado
description: CI con GitHub Actions · nivel Avanzado · Publicación y producción Android. Pipeline de CI/CD: build, tests, lint y release automático. Objetivo del nivel: Pipeline completo con lint, detekt y tests instrumentados.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "ci-github-actions"
  nivel: avanzado
  stack: "Play Store, firmas, CI, testing, releases"
---

# CI con GitHub Actions — Avanzado

## Qué hace este skill

Pipeline de CI/CD: build, tests, lint y release automático. En este nivel se entrega: **Pipeline completo con lint, detekt y tests instrumentados.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Publicación y producción Android** (Play Store, firmas, CI, testing, releases) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **CI con GitHub Actions** dentro de Publicación y producción Android.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Play Store, firmas, CI, testing, releases**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Agregar lint y detekt al pipeline
2. Correr los tests instrumentados con un emulador
3. Publicar los reportes como artifacts
4. Bloquear el merge si falla el pipeline

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Pipeline completo con lint, detekt y tests instrumentados. | texto | sí | resultado medible |
| $stack | Publicación y producción Android | texto | sí | 09-kotlin-android/android-produccion |
| $tecnologias | Play Store, firmas, CI, testing, releases | texto | sí | Play Store, firmas, CI, testing, releases |
| $tareas_clave | Agregar lint y detekt al pipeline · Correr los tests instrumentados con un emulador · Publicar los reportes como artifacts · Bloquear el merge si falla el pipeline | lista | sí | 3-4 pasos |
| $criterios_clave | El pipeline bloquea el merge ante fallos · Los reportes están disponibles como artifacts | lista | sí | calidad verificable |
| $prompt_guia | Completá el pipeline de Ryutify: lint, detekt, tests instrumentados con emulador y protección de merge. | texto | no | "CI con GitHub Actions" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El pipeline bloquea el merge ante fallos
- [ ] Los reportes están disponibles como artifacts

## Ejemplos de prompts

- "Completá el pipeline de Ryutify: lint, detekt, tests instrumentados con emulador y protección de merge."
- "Aplica CI con GitHub Actions (nivel avanzado) a mi trabajo actual con Publicación y producción Android: prioriza El pipeline bloquea el merge ante fallos"
- "Revisa mi android-produccion y dime qué pasos de CI con GitHub Actions me faltan en este nivel"