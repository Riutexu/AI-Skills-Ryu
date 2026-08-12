---
name: node-servicios-logging-basico
description: Logging · nivel Básico · Node.js: servicios y CLIs. Logueás con niveles, formato estructurado y sin exponer datos sensibles. Objetivo del nivel: Implementar logging con niveles y contexto
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "logging"
  nivel: basico
  stack: "Node 22, npm, streams, workers"
---

# Logging — Básico

## Qué hace este skill

Logueás con niveles, formato estructurado y sin exponer datos sensibles. En este nivel se entrega: **Implementar logging con niveles y contexto**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Node.js: servicios y CLIs** (Node 22, npm, streams, workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Logging** dentro de Node.js: servicios y CLIs.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, npm, streams, workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir niveles de log (debug, info, warn, error)
2. Crear una utilidad de log con contexto del módulo
3. Diferenciar la salida en dev y producción
4. Evitar loguear datos sensibles

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Implementar logging con niveles y contexto | texto | sí | resultado medible |
| $stack | Node.js: servicios y CLIs | texto | sí | 12-js-ts/node-servicios |
| $tecnologias | Node 22, npm, streams, workers | texto | sí | Node 22, npm, streams, workers |
| $tareas_clave | Definir niveles de log (debug, info, warn, error) · Crear una utilidad de log con contexto del módulo · Diferenciar la salida en dev y producción · Evitar loguear datos sensibles | lista | sí | 3-4 pasos |
| $criterios_clave | Los niveles se filtran según el entorno · No hay datos sensibles en los logs | lista | sí | calidad verificable |
| $prompt_guia | Creá la utilidad de logging del proyecto con niveles y prefijo de módulo, que en producción solo muestre warn y error, y nunca tokens ni contraseñas. | texto | no | "Logging" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los niveles se filtran según el entorno
- [ ] No hay datos sensibles en los logs

## Ejemplos de prompts

- "Creá la utilidad de logging del proyecto con niveles y prefijo de módulo, que en producción solo muestre warn y error, y nunca tokens ni contraseñas."
- "Aplica Logging (nivel basico) a mi trabajo actual con Node.js: servicios y CLIs: prioriza Los niveles se filtran según el entorno"
- "Revisa mi node-servicios y dime qué pasos de Logging me faltan en este nivel"