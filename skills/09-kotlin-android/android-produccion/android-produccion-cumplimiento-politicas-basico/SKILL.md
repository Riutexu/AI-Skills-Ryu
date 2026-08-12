---
name: android-produccion-cumplimiento-politicas-basico
description: Cumplimiento y políticas · nivel Básico · Publicación y producción Android. Políticas de Play, privacidad y licencias en orden. Objetivo del nivel: Cumplir los requisitos básicos de Play Console.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "cumplimiento-politicas"
  nivel: basico
  stack: "Play Store, firmas, CI, testing, releases"
---

# Cumplimiento y políticas — Básico

## Qué hace este skill

Políticas de Play, privacidad y licencias en orden. En este nivel se entrega: **Cumplir los requisitos básicos de Play Console.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Publicación y producción Android** (Play Store, firmas, CI, testing, releases) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Cumplimiento y políticas** dentro de Publicación y producción Android.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Play Store, firmas, CI, testing, releases**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Completar los datos de ficha requeridos
2. Configurar la declaración de privacidad
3. Revisar la política de contenido
4. Verificar la elegibilidad de la app

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Cumplir los requisitos básicos de Play Console. | texto | sí | resultado medible |
| $stack | Publicación y producción Android | texto | sí | 09-kotlin-android/android-produccion |
| $tecnologias | Play Store, firmas, CI, testing, releases | texto | sí | Play Store, firmas, CI, testing, releases |
| $tareas_clave | Completar los datos de ficha requeridos · Configurar la declaración de privacidad · Revisar la política de contenido · Verificar la elegibilidad de la app | lista | sí | 3-4 pasos |
| $criterios_clave | La ficha cumple los requisitos de Play · La declaración de privacidad está configurada | lista | sí | calidad verificable |
| $prompt_guia | Completá los requisitos de Play de Ryutify: ficha, declaración de privacidad y políticas de contenido. | texto | no | "Cumplimiento y políticas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La ficha cumple los requisitos de Play
- [ ] La declaración de privacidad está configurada

## Ejemplos de prompts

- "Completá los requisitos de Play de Ryutify: ficha, declaración de privacidad y políticas de contenido."
- "Aplica Cumplimiento y políticas (nivel basico) a mi trabajo actual con Publicación y producción Android: prioriza La ficha cumple los requisitos de Play"
- "Revisa mi android-produccion y dime qué pasos de Cumplimiento y políticas me faltan en este nivel"