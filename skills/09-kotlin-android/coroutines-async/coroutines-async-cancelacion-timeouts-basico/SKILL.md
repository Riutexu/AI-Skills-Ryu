---
name: coroutines-async-cancelacion-timeouts-basico
description: Cancelación y timeouts · nivel Básico · Coroutines y concurrencia. Cancela coroutines de forma cooperativa y evita operaciones eternas. Objetivo del nivel: Cancelar coroutines y entender la cancelación cooperativa.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "cancelacion-timeouts"
  nivel: basico
  stack: "coroutines, Flow, channels, Dispatchers, structured concurrency"
---

# Cancelación y timeouts — Básico

## Qué hace este skill

Cancela coroutines de forma cooperativa y evita operaciones eternas. En este nivel se entrega: **Cancelar coroutines y entender la cancelación cooperativa.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Coroutines y concurrencia** (coroutines, Flow, channels, Dispatchers, structured concurrency) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Cancelación y timeouts** dentro de Coroutines y concurrencia.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **coroutines, Flow, channels, Dispatchers, structured concurrency**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Cancelar un scope completo
2. Verificar la cancelación con isActive
3. Usar yield en loops largos
4. Limpiar recursos en finally al cancelar

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Cancelar coroutines y entender la cancelación cooperativa. | texto | sí | resultado medible |
| $stack | Coroutines y concurrencia | texto | sí | 09-kotlin-android/coroutines-async |
| $tecnologias | coroutines, Flow, channels, Dispatchers, structured concurrency | texto | sí | coroutines, Flow, channels, Dispatchers, structured concurrency |
| $tareas_clave | Cancelar un scope completo · Verificar la cancelación con isActive · Usar yield en loops largos · Limpiar recursos en finally al cancelar | lista | sí | 3-4 pasos |
| $criterios_clave | La cancelación del scope detiene todas las hijas · El finally de limpieza corre al cancelar | lista | sí | calidad verificable |
| $prompt_guia | Al salir de la pantalla de búsqueda de Ryutify las coroutines siguen corriendo. Cancelá el scope y verificá la limpieza con finally. | texto | no | "Cancelación y timeouts" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La cancelación del scope detiene todas las hijas
- [ ] El finally de limpieza corre al cancelar

## Ejemplos de prompts

- "Al salir de la pantalla de búsqueda de Ryutify las coroutines siguen corriendo. Cancelá el scope y verificá la limpieza con finally."
- "Aplica Cancelación y timeouts (nivel basico) a mi trabajo actual con Coroutines y concurrencia: prioriza La cancelación del scope detiene todas las hijas"
- "Revisa mi coroutines-async y dime qué pasos de Cancelación y timeouts me faltan en este nivel"