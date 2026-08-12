---
name: android-produccion-cumplimiento-politicas-profesional
description: Cumplimiento y políticas · nivel Profesional · Publicación y producción Android. Políticas de Play, privacidad y licencias en orden. Objetivo del nivel: Gobernanza de cumplimiento del producto.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "cumplimiento-politicas"
  nivel: profesional
  stack: "Play Store, firmas, CI, testing, releases"
---

# Cumplimiento y políticas — Profesional

## Qué hace este skill

Políticas de Play, privacidad y licencias en orden. En este nivel se entrega: **Gobernanza de cumplimiento del producto.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Publicación y producción Android** (Play Store, firmas, CI, testing, releases) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Cumplimiento y políticas** dentro de Publicación y producción Android.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Play Store, firmas, CI, testing, releases**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir la política de datos del producto
2. Manejar la eliminación de datos del usuario
3. Auditar el cumplimiento por release
4. Documentar el proceso de cumplimiento

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Gobernanza de cumplimiento del producto. | texto | sí | resultado medible |
| $stack | Publicación y producción Android | texto | sí | 09-kotlin-android/android-produccion |
| $tecnologias | Play Store, firmas, CI, testing, releases | texto | sí | Play Store, firmas, CI, testing, releases |
| $tareas_clave | Definir la política de datos del producto · Manejar la eliminación de datos del usuario · Auditar el cumplimiento por release · Documentar el proceso de cumplimiento | lista | sí | 3-4 pasos |
| $criterios_clave | La política de datos está documentada · La eliminación de datos funciona | lista | sí | calidad verificable |
| $prompt_guia | Quiero gobernanza de cumplimiento para Ryutify: política de datos, eliminación de datos del usuario y auditoría por release. | texto | no | "Cumplimiento y políticas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La política de datos está documentada
- [ ] La eliminación de datos funciona

## Ejemplos de prompts

- "Quiero gobernanza de cumplimiento para Ryutify: política de datos, eliminación de datos del usuario y auditoría por release."
- "Aplica Cumplimiento y políticas (nivel profesional) a mi trabajo actual con Publicación y producción Android: prioriza La política de datos está documentada"
- "Revisa mi android-produccion y dime qué pasos de Cumplimiento y políticas me faltan en este nivel"