---
name: android-produccion-firmas-keystores-profesional
description: Firmas y keystores · nivel Profesional · Publicación y producción Android. Firma tu app con seguridad y sin perder la clave jamás. Objetivo del nivel: Estrategia de firma del producto: Firma de Play App Bundles y continuidad.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "firmas-keystores"
  nivel: profesional
  stack: "Play Store, firmas, CI, testing, releases"
---

# Firmas y keystores — Profesional

## Qué hace este skill

Firma tu app con seguridad y sin perder la clave jamás. En este nivel se entrega: **Estrategia de firma del producto: Firma de Play App Bundles y continuidad.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Publicación y producción Android** (Play Store, firmas, CI, testing, releases) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Firmas y keystores** dentro de Publicación y producción Android.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Play Store, firmas, CI, testing, releases**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Evaluar la Firma de Play App Bundles
2. Decidir entre firma propia o de Play
3. Definir el plan ante la pérdida de la clave
4. Documentar el acceso al keystore en el equipo

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Estrategia de firma del producto: Firma de Play App Bundles y continuidad. | texto | sí | resultado medible |
| $stack | Publicación y producción Android | texto | sí | 09-kotlin-android/android-produccion |
| $tecnologias | Play Store, firmas, CI, testing, releases | texto | sí | Play Store, firmas, CI, testing, releases |
| $tareas_clave | Evaluar la Firma de Play App Bundles · Decidir entre firma propia o de Play · Definir el plan ante la pérdida de la clave · Documentar el acceso al keystore en el equipo | lista | sí | 3-4 pasos |
| $criterios_clave | La estrategia de firma está documentada · Existe un plan de recuperación ante pérdida | lista | sí | calidad verificable |
| $prompt_guia | Quiero definir la estrategia de firma de Ryutify: Firma de Play App Bundles vs firma propia y el plan ante la pérdida de la clave. | texto | no | "Firmas y keystores" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La estrategia de firma está documentada
- [ ] Existe un plan de recuperación ante pérdida

## Ejemplos de prompts

- "Quiero definir la estrategia de firma de Ryutify: Firma de Play App Bundles vs firma propia y el plan ante la pérdida de la clave."
- "Aplica Firmas y keystores (nivel profesional) a mi trabajo actual con Publicación y producción Android: prioriza La estrategia de firma está documentada"
- "Revisa mi android-produccion y dime qué pasos de Firmas y keystores me faltan en este nivel"