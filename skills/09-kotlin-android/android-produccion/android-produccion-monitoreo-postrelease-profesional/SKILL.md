---
name: android-produccion-monitoreo-postrelease-profesional
description: Monitoreo post-release · nivel Profesional · Publicación y producción Android. Vigila la salud de cada release después del lanzamiento. Objetivo del nivel: Cultura de monitoreo del producto: retroalimentación continua.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "monitoreo-postrelease"
  nivel: profesional
  stack: "Play Store, firmas, CI, testing, releases"
---

# Monitoreo post-release — Profesional

## Qué hace este skill

Vigila la salud de cada release después del lanzamiento. En este nivel se entrega: **Cultura de monitoreo del producto: retroalimentación continua.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Publicación y producción Android** (Play Store, firmas, CI, testing, releases) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Monitoreo post-release** dentro de Publicación y producción Android.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Play Store, firmas, CI, testing, releases**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir los dashboards de salud del producto
2. Correlacionar los datos de todas las fuentes
3. Realizar la revisión post-release con el equipo
4. Incorporar las lecciones al proceso

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Cultura de monitoreo del producto: retroalimentación continua. | texto | sí | resultado medible |
| $stack | Publicación y producción Android | texto | sí | 09-kotlin-android/android-produccion |
| $tecnologias | Play Store, firmas, CI, testing, releases | texto | sí | Play Store, firmas, CI, testing, releases |
| $tareas_clave | Definir los dashboards de salud del producto · Correlacionar los datos de todas las fuentes · Realizar la revisión post-release con el equipo · Incorporar las lecciones al proceso | lista | sí | 3-4 pasos |
| $criterios_clave | Los dashboards de salud están definidos · La revisión post-release es parte del proceso | lista | sí | calidad verificable |
| $prompt_guia | Quiero una cultura de monitoreo en Ryutify: dashboards de salud, revisión post-release con el equipo y lecciones incorporadas al proceso. | texto | no | "Monitoreo post-release" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los dashboards de salud están definidos
- [ ] La revisión post-release es parte del proceso

## Ejemplos de prompts

- "Quiero una cultura de monitoreo en Ryutify: dashboards de salud, revisión post-release con el equipo y lecciones incorporadas al proceso."
- "Aplica Monitoreo post-release (nivel profesional) a mi trabajo actual con Publicación y producción Android: prioriza Los dashboards de salud están definidos"
- "Revisa mi android-produccion y dime qué pasos de Monitoreo post-release me faltan en este nivel"