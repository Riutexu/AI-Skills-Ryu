---
name: android-produccion-play-console-aab-profesional
description: Play Console y AAB · nivel Profesional · Publicación y producción Android. Publica AABs y gestiona la ficha de Ryutify en Play. Objetivo del nivel: Operación de Play del producto: automatización y gobernanza.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "play-console-aab"
  nivel: profesional
  stack: "Play Store, firmas, CI, testing, releases"
---

# Play Console y AAB — Profesional

## Qué hace este skill

Publica AABs y gestiona la ficha de Ryutify en Play. En este nivel se entrega: **Operación de Play del producto: automatización y gobernanza.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Publicación y producción Android** (Play Store, firmas, CI, testing, releases) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Play Console y AAB** dentro de Publicación y producción Android.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Play Store, firmas, CI, testing, releases**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Automatizar la subida del AAB desde el CI
2. Definir el proceso de release del equipo
3. Gestionar los permisos de Play Console
4. Documentar la operación de release

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Operación de Play del producto: automatización y gobernanza. | texto | sí | resultado medible |
| $stack | Publicación y producción Android | texto | sí | 09-kotlin-android/android-produccion |
| $tecnologias | Play Store, firmas, CI, testing, releases | texto | sí | Play Store, firmas, CI, testing, releases |
| $tareas_clave | Automatizar la subida del AAB desde el CI · Definir el proceso de release del equipo · Gestionar los permisos de Play Console · Documentar la operación de release | lista | sí | 3-4 pasos |
| $criterios_clave | La subida del AAB está automatizada · El proceso de release está documentado | lista | sí | calidad verificable |
| $prompt_guia | Automatizá la subida del AAB de Ryutify desde el CI y definí el proceso de release con permisos y gobernanza. | texto | no | "Play Console y AAB" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La subida del AAB está automatizada
- [ ] El proceso de release está documentado

## Ejemplos de prompts

- "Automatizá la subida del AAB de Ryutify desde el CI y definí el proceso de release con permisos y gobernanza."
- "Aplica Play Console y AAB (nivel profesional) a mi trabajo actual con Publicación y producción Android: prioriza La subida del AAB está automatizada"
- "Revisa mi android-produccion y dime qué pasos de Play Console y AAB me faltan en este nivel"