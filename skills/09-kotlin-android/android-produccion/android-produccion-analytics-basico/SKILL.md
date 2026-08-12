---
name: android-produccion-analytics-basico
description: Analytics y eventos · nivel Básico · Publicación y producción Android. Mide el uso real del producto con eventos bien diseñados. Objetivo del nivel: Integrar analytics y enviar los primeros eventos.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "analytics"
  nivel: basico
  stack: "Play Store, firmas, CI, testing, releases"
---

# Analytics y eventos — Básico

## Qué hace este skill

Mide el uso real del producto con eventos bien diseñados. En este nivel se entrega: **Integrar analytics y enviar los primeros eventos.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Publicación y producción Android** (Play Store, firmas, CI, testing, releases) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Analytics y eventos** dentro de Publicación y producción Android.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Play Store, firmas, CI, testing, releases**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Integrar la librería de analytics
2. Enviar el evento de inicio de sesión
3. Enviar el evento de reproducción
4. Verificar los eventos en el dashboard

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Integrar analytics y enviar los primeros eventos. | texto | sí | resultado medible |
| $stack | Publicación y producción Android | texto | sí | 09-kotlin-android/android-produccion |
| $tecnologias | Play Store, firmas, CI, testing, releases | texto | sí | Play Store, firmas, CI, testing, releases |
| $tareas_clave | Integrar la librería de analytics · Enviar el evento de inicio de sesión · Enviar el evento de reproducción · Verificar los eventos en el dashboard | lista | sí | 3-4 pasos |
| $criterios_clave | Los eventos llegan al dashboard · Los eventos tienen el nombre consistente | lista | sí | calidad verificable |
| $prompt_guia | Integrá analytics en Ryutify y enviá los primeros eventos: inicio de sesión y reproducción de una canción. | texto | no | "Analytics y eventos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los eventos llegan al dashboard
- [ ] Los eventos tienen el nombre consistente

## Ejemplos de prompts

- "Integrá analytics en Ryutify y enviá los primeros eventos: inicio de sesión y reproducción de una canción."
- "Aplica Analytics y eventos (nivel basico) a mi trabajo actual con Publicación y producción Android: prioriza Los eventos llegan al dashboard"
- "Revisa mi android-produccion y dime qué pasos de Analytics y eventos me faltan en este nivel"