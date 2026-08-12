---
name: android-produccion-monitoreo-postrelease-avanzado
description: Monitoreo post-release · nivel Avanzado · Publicación y producción Android. Vigila la salud de cada release después del lanzamiento. Objetivo del nivel: Monitoreo con alertas y plan de respuesta.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "monitoreo-postrelease"
  nivel: avanzado
  stack: "Play Store, firmas, CI, testing, releases"
---

# Monitoreo post-release — Avanzado

## Qué hace este skill

Vigila la salud de cada release después del lanzamiento. En este nivel se entrega: **Monitoreo con alertas y plan de respuesta.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Publicación y producción Android** (Play Store, firmas, CI, testing, releases) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Monitoreo post-release** dentro de Publicación y producción Android.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Play Store, firmas, CI, testing, releases**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Configurar las alertas de regresión
2. Definir el plan de respuesta ante incidentes
3. Usar el monitoreo de red y del player
4. Preparar el rollback ante problemas

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Monitoreo con alertas y plan de respuesta. | texto | sí | resultado medible |
| $stack | Publicación y producción Android | texto | sí | 09-kotlin-android/android-produccion |
| $tecnologias | Play Store, firmas, CI, testing, releases | texto | sí | Play Store, firmas, CI, testing, releases |
| $tareas_clave | Configurar las alertas de regresión · Definir el plan de respuesta ante incidentes · Usar el monitoreo de red y del player · Preparar el rollback ante problemas | lista | sí | 3-4 pasos |
| $criterios_clave | Las alertas disparan ante regresiones · El plan de respuesta está documentado | lista | sí | calidad verificable |
| $prompt_guia | Quiero alertas de regresión y un plan de respuesta para Ryutify, con el rollback preparado para el próximo release. | texto | no | "Monitoreo post-release" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las alertas disparan ante regresiones
- [ ] El plan de respuesta está documentado

## Ejemplos de prompts

- "Quiero alertas de regresión y un plan de respuesta para Ryutify, con el rollback preparado para el próximo release."
- "Aplica Monitoreo post-release (nivel avanzado) a mi trabajo actual con Publicación y producción Android: prioriza Las alertas disparan ante regresiones"
- "Revisa mi android-produccion y dime qué pasos de Monitoreo post-release me faltan en este nivel"