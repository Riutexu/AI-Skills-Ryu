---
name: coroutines-async-dispatchers-main-profesional
description: Dispatchers y el hilo principal · nivel Profesional · Coroutines y concurrencia. Elige el dispatcher correcto y nunca bloquees el main. Objetivo del nivel: Política de dispatchers del producto: presupuesto de hilos y bloqueo cero.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "dispatchers-main"
  nivel: profesional
  stack: "coroutines, Flow, channels, Dispatchers, structured concurrency"
---

# Dispatchers y el hilo principal — Profesional

## Qué hace este skill

Elige el dispatcher correcto y nunca bloquees el main. En este nivel se entrega: **Política de dispatchers del producto: presupuesto de hilos y bloqueo cero.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Coroutines y concurrencia** (coroutines, Flow, channels, Dispatchers, structured concurrency) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Dispatchers y el hilo principal** dentro de Coroutines y concurrencia.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **coroutines, Flow, channels, Dispatchers, structured concurrency**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir el presupuesto de hilos por capa
2. Auditar los bloqueos del hilo principal
3. Establecer la regla de no bloqueo en el CI
4. Medir el impacto de la política en el rendimiento

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Política de dispatchers del producto: presupuesto de hilos y bloqueo cero. | texto | sí | resultado medible |
| $stack | Coroutines y concurrencia | texto | sí | 09-kotlin-android/coroutines-async |
| $tecnologias | coroutines, Flow, channels, Dispatchers, structured concurrency | texto | sí | coroutines, Flow, channels, Dispatchers, structured concurrency |
| $tareas_clave | Definir el presupuesto de hilos por capa · Auditar los bloqueos del hilo principal · Establecer la regla de no bloqueo en el CI · Medir el impacto de la política en el rendimiento | lista | sí | 3-4 pasos |
| $criterios_clave | El hilo principal no se bloquea en ningún flujo crítico · La auditoría de bloqueos está automatizada | lista | sí | calidad verificable |
| $prompt_guia | Quiero cero bloqueos del hilo principal en Ryutify: auditá los bloqueos, definí el presupuesto de hilos por capa y automatizá el chequeo en el CI. | texto | no | "Dispatchers y el hilo principal" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El hilo principal no se bloquea en ningún flujo crítico
- [ ] La auditoría de bloqueos está automatizada

## Ejemplos de prompts

- "Quiero cero bloqueos del hilo principal en Ryutify: auditá los bloqueos, definí el presupuesto de hilos por capa y automatizá el chequeo en el CI."
- "Aplica Dispatchers y el hilo principal (nivel profesional) a mi trabajo actual con Coroutines y concurrencia: prioriza El hilo principal no se bloquea en ningún flujo crítico"
- "Revisa mi coroutines-async y dime qué pasos de Dispatchers y el hilo principal me faltan en este nivel"