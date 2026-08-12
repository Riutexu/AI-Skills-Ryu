---
name: media3-exoplayer-servicio-audio-fondo-profesional
description: Servicio de audio en segundo plano · nivel Profesional · Media3/ExoPlayer: reproducción de audio. Reproducción en background con MediaSessionService sin matar la app. Objetivo del nivel: Arquitectura de reproducción en background del producto: robusta y sin fugas.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "servicio-audio-fondo"
  nivel: profesional
  stack: "Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering"
---

# Servicio de audio en segundo plano — Profesional

## Qué hace este skill

Reproducción en background con MediaSessionService sin matar la app. En este nivel se entrega: **Arquitectura de reproducción en background del producto: robusta y sin fugas.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Media3/ExoPlayer: reproducción de audio** (Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Servicio de audio en segundo plano** dentro de Media3/ExoPlayer: reproducción de audio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir el contrato entre el servicio y el ViewModel
2. Manejar el arranque del servicio desde la cola persistida
3. Testear el proceso muerto con reproducción activa
4. Medir el consumo de batería de la reproducción en background

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Arquitectura de reproducción en background del producto: robusta y sin fugas. | texto | sí | resultado medible |
| $stack | Media3/ExoPlayer: reproducción de audio | texto | sí | 09-kotlin-android/media3-exoplayer |
| $tecnologias | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering | texto | sí | Media3 ExoPlayer, MediaSessionService, audio focus, notifications, buffering |
| $tareas_clave | Definir el contrato entre el servicio y el ViewModel · Manejar el arranque del servicio desde la cola persistida · Testear el proceso muerto con reproducción activa · Medir el consumo de batería de la reproducción en background | lista | sí | 3-4 pasos |
| $criterios_clave | La reproducción sobrevive al proceso muerto y restaura la cola · El consumo de batería de una hora de background está dentro del presupuesto | lista | sí | calidad verificable |
| $prompt_guia | Quiero que Ryutify siga sonando aunque el sistema mate el proceso y que al volver restaure la cola. Diseñá la arquitectura del servicio de reproducción y medí la batería. | texto | no | "Servicio de audio en segundo plano" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La reproducción sobrevive al proceso muerto y restaura la cola
- [ ] El consumo de batería de una hora de background está dentro del presupuesto

## Ejemplos de prompts

- "Quiero que Ryutify siga sonando aunque el sistema mate el proceso y que al volver restaure la cola. Diseñá la arquitectura del servicio de reproducción y medí la batería."
- "Aplica Servicio de audio en segundo plano (nivel profesional) a mi trabajo actual con Media3/ExoPlayer: reproducción de audio: prioriza La reproducción sobrevive al proceso muerto y restaura la cola"
- "Revisa mi media3-exoplayer y dime qué pasos de Servicio de audio en segundo plano me faltan en este nivel"