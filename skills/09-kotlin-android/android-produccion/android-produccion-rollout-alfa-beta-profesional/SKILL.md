---
name: android-produccion-rollout-alfa-beta-profesional
description: Rollout alfa, beta y staged · nivel Profesional · Publicación y producción Android. Lanza gradualmente con alfa, beta y rollout staged. Objetivo del nivel: Estrategia de releases del producto: cadencia y calidad.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "rollout-alfa-beta"
  nivel: profesional
  stack: "Play Store, firmas, CI, testing, releases"
---

# Rollout alfa, beta y staged — Profesional

## Qué hace este skill

Lanza gradualmente con alfa, beta y rollout staged. En este nivel se entrega: **Estrategia de releases del producto: cadencia y calidad.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Publicación y producción Android** (Play Store, firmas, CI, testing, releases) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Rollout alfa, beta y staged** dentro de Publicación y producción Android.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Play Store, firmas, CI, testing, releases**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir la cadencia de releases
2. Establecer los gate de calidad por track
3. Automatizar el promoción entre tracks
4. Documentar el proceso de release completo

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Estrategia de releases del producto: cadencia y calidad. | texto | sí | resultado medible |
| $stack | Publicación y producción Android | texto | sí | 09-kotlin-android/android-produccion |
| $tecnologias | Play Store, firmas, CI, testing, releases | texto | sí | Play Store, firmas, CI, testing, releases |
| $tareas_clave | Definir la cadencia de releases · Establecer los gate de calidad por track · Automatizar el promoción entre tracks · Documentar el proceso de release completo | lista | sí | 3-4 pasos |
| $criterios_clave | La cadencia de releases está definida · Los gates de calidad se aplican | lista | sí | calidad verificable |
| $prompt_guia | Definí la estrategia de releases de Ryutify: cadencia, gates de calidad por track y promoción automática. | texto | no | "Rollout alfa, beta y staged" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La cadencia de releases está definida
- [ ] Los gates de calidad se aplican

## Ejemplos de prompts

- "Definí la estrategia de releases de Ryutify: cadencia, gates de calidad por track y promoción automática."
- "Aplica Rollout alfa, beta y staged (nivel profesional) a mi trabajo actual con Publicación y producción Android: prioriza La cadencia de releases está definida"
- "Revisa mi android-produccion y dime qué pasos de Rollout alfa, beta y staged me faltan en este nivel"