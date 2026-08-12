---
name: android-produccion-testing-instrumentado-profesional
description: Testing instrumentado · nivel Profesional · Publicación y producción Android. Pruebas en dispositivos y emuladores: instrumentación y integración. Objetivo del nivel: Estrategia de testing instrumentado del producto.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "testing-instrumentado"
  nivel: profesional
  stack: "Play Store, firmas, CI, testing, releases"
---

# Testing instrumentado — Profesional

## Qué hace este skill

Pruebas en dispositivos y emuladores: instrumentación y integración. En este nivel se entrega: **Estrategia de testing instrumentado del producto.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Publicación y producción Android** (Play Store, firmas, CI, testing, releases) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Testing instrumentado** dentro de Publicación y producción Android.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Play Store, firmas, CI, testing, releases**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir la matriz de devices de testing
2. Correr los tests instrumentados en el CI
3. Usar los laboratorios de dispositivos
4. Medir el tiempo y la cobertura de los tests

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Estrategia de testing instrumentado del producto. | texto | sí | resultado medible |
| $stack | Publicación y producción Android | texto | sí | 09-kotlin-android/android-produccion |
| $tecnologias | Play Store, firmas, CI, testing, releases | texto | sí | Play Store, firmas, CI, testing, releases |
| $tareas_clave | Definir la matriz de devices de testing · Correr los tests instrumentados en el CI · Usar los laboratorios de dispositivos · Medir el tiempo y la cobertura de los tests | lista | sí | 3-4 pasos |
| $criterios_clave | La matriz de devices está definida · Los tests instrumentados corren en el CI | lista | sí | calidad verificable |
| $prompt_guia | Quiero una estrategia de testing instrumentado para Ryutify: matriz de devices, CI con laboratorios y medición de cobertura. | texto | no | "Testing instrumentado" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La matriz de devices está definida
- [ ] Los tests instrumentados corren en el CI

## Ejemplos de prompts

- "Quiero una estrategia de testing instrumentado para Ryutify: matriz de devices, CI con laboratorios y medición de cobertura."
- "Aplica Testing instrumentado (nivel profesional) a mi trabajo actual con Publicación y producción Android: prioriza La matriz de devices está definida"
- "Revisa mi android-produccion y dime qué pasos de Testing instrumentado me faltan en este nivel"