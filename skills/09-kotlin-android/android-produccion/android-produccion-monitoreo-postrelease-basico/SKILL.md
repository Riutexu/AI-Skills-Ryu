---
name: android-produccion-monitoreo-postrelease-basico
description: Monitoreo post-release · nivel Básico · Publicación y producción Android. Vigila la salud de cada release después del lanzamiento. Objetivo del nivel: Revisar la salud básica después de lanzar.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "monitoreo-postrelease"
  nivel: basico
  stack: "Play Store, firmas, CI, testing, releases"
---

# Monitoreo post-release — Básico

## Qué hace este skill

Vigila la salud de cada release después del lanzamiento. En este nivel se entrega: **Revisar la salud básica después de lanzar.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Publicación y producción Android** (Play Store, firmas, CI, testing, releases) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Monitoreo post-release** dentro de Publicación y producción Android.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Play Store, firmas, CI, testing, releases**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Revisar los crashes del nuevo release
2. Revisar las reseñas y los reportes
3. Comparar la estabilidad con el release anterior
4. Documentar el estado del release

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Revisar la salud básica después de lanzar. | texto | sí | resultado medible |
| $stack | Publicación y producción Android | texto | sí | 09-kotlin-android/android-produccion |
| $tecnologias | Play Store, firmas, CI, testing, releases | texto | sí | Play Store, firmas, CI, testing, releases |
| $tareas_clave | Revisar los crashes del nuevo release · Revisar las reseñas y los reportes · Comparar la estabilidad con el release anterior · Documentar el estado del release | lista | sí | 3-4 pasos |
| $criterios_clave | El release nuevo se compara con el anterior · Los reportes de usuarios se revisan | lista | sí | calidad verificable |
| $prompt_guia | Lanzamos Ryutify y quiero revisar la salud del release: crashes, reseñas y comparación con el anterior. | texto | no | "Monitoreo post-release" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El release nuevo se compara con el anterior
- [ ] Los reportes de usuarios se revisan

## Ejemplos de prompts

- "Lanzamos Ryutify y quiero revisar la salud del release: crashes, reseñas y comparación con el anterior."
- "Aplica Monitoreo post-release (nivel basico) a mi trabajo actual con Publicación y producción Android: prioriza El release nuevo se compara con el anterior"
- "Revisa mi android-produccion y dime qué pasos de Monitoreo post-release me faltan en este nivel"