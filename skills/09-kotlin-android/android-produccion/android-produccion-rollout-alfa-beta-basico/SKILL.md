---
name: android-produccion-rollout-alfa-beta-basico
description: Rollout alfa, beta y staged · nivel Básico · Publicación y producción Android. Lanza gradualmente con alfa, beta y rollout staged. Objetivo del nivel: Configurar los tracks de alfa y beta.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "rollout-alfa-beta"
  nivel: basico
  stack: "Play Store, firmas, CI, testing, releases"
---

# Rollout alfa, beta y staged — Básico

## Qué hace este skill

Lanza gradualmente con alfa, beta y rollout staged. En este nivel se entrega: **Configurar los tracks de alfa y beta.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Publicación y producción Android** (Play Store, firmas, CI, testing, releases) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Rollout alfa, beta y staged** dentro de Publicación y producción Android.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Play Store, firmas, CI, testing, releases**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear el track alfa con probadores internos
2. Crear el track beta abierto
3. Subir el mismo AAB a ambos tracks
4. Recolectar el feedback de los probadores

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Configurar los tracks de alfa y beta. | texto | sí | resultado medible |
| $stack | Publicación y producción Android | texto | sí | 09-kotlin-android/android-produccion |
| $tecnologias | Play Store, firmas, CI, testing, releases | texto | sí | Play Store, firmas, CI, testing, releases |
| $tareas_clave | Crear el track alfa con probadores internos · Crear el track beta abierto · Subir el mismo AAB a ambos tracks · Recolectar el feedback de los probadores | lista | sí | 3-4 pasos |
| $criterios_clave | Los probadores reciben el build alfa · El feedback se recolecta | lista | sí | calidad verificable |
| $prompt_guia | Configurá los tracks alfa y beta de Ryutify con los probadores y el proceso de feedback. | texto | no | "Rollout alfa, beta y staged" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los probadores reciben el build alfa
- [ ] El feedback se recolecta

## Ejemplos de prompts

- "Configurá los tracks alfa y beta de Ryutify con los probadores y el proceso de feedback."
- "Aplica Rollout alfa, beta y staged (nivel basico) a mi trabajo actual con Publicación y producción Android: prioriza Los probadores reciben el build alfa"
- "Revisa mi android-produccion y dime qué pasos de Rollout alfa, beta y staged me faltan en este nivel"