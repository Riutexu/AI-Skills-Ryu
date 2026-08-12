---
name: android-produccion-play-console-aab-basico
description: Play Console y AAB · nivel Básico · Publicación y producción Android. Publica AABs y gestiona la ficha de Ryutify en Play. Objetivo del nivel: Subir un AAB a Play Console por primera vez.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "play-console-aab"
  nivel: basico
  stack: "Play Store, firmas, CI, testing, releases"
---

# Play Console y AAB — Básico

## Qué hace este skill

Publica AABs y gestiona la ficha de Ryutify en Play. En este nivel se entrega: **Subir un AAB a Play Console por primera vez.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Publicación y producción Android** (Play Store, firmas, CI, testing, releases) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Play Console y AAB** dentro de Publicación y producción Android.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Play Store, firmas, CI, testing, releases**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Generar el AAB release
2. Crear la app en Play Console
3. Configurar la ficha de la tienda
4. Subir el AAB a un track interno

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Subir un AAB a Play Console por primera vez. | texto | sí | resultado medible |
| $stack | Publicación y producción Android | texto | sí | 09-kotlin-android/android-produccion |
| $tecnologias | Play Store, firmas, CI, testing, releases | texto | sí | Play Store, firmas, CI, testing, releases |
| $tareas_clave | Generar el AAB release · Crear la app en Play Console · Configurar la ficha de la tienda · Subir el AAB a un track interno | lista | sí | 3-4 pasos |
| $criterios_clave | El AAB se sube y valida · La ficha básica está completa | lista | sí | calidad verificable |
| $prompt_guia | Subí el primer AAB de Ryutify a Play Console con la ficha básica y un track de prueba interna. | texto | no | "Play Console y AAB" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El AAB se sube y valida
- [ ] La ficha básica está completa

## Ejemplos de prompts

- "Subí el primer AAB de Ryutify a Play Console con la ficha básica y un track de prueba interna."
- "Aplica Play Console y AAB (nivel basico) a mi trabajo actual con Publicación y producción Android: prioriza El AAB se sube y valida"
- "Revisa mi android-produccion y dime qué pasos de Play Console y AAB me faltan en este nivel"