---
name: node-servicios-entornos-config-basico
description: Entornos y config · nivel Básico · Node.js: servicios y CLIs. Gestionás configuración por entorno con variables de entorno y validación. Objetivo del nivel: Usar variables de entorno en Node
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "entornos-config"
  nivel: basico
  stack: "Node 22, npm, streams, workers"
---

# Entornos y config — Básico

## Qué hace este skill

Gestionás configuración por entorno con variables de entorno y validación. En este nivel se entrega: **Usar variables de entorno en Node**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Node.js: servicios y CLIs** (Node 22, npm, streams, workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Entornos y config** dentro de Node.js: servicios y CLIs.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, npm, streams, workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Leer variables con process.env
2. Crear archivos .env y .env.example
3. Cargar el .env con Node 22 nativo
4. No commitear secrets al repositorio

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Usar variables de entorno en Node | texto | sí | resultado medible |
| $stack | Node.js: servicios y CLIs | texto | sí | 12-js-ts/node-servicios |
| $tecnologias | Node 22, npm, streams, workers | texto | sí | Node 22, npm, streams, workers |
| $tareas_clave | Leer variables con process.env · Crear archivos .env y .env.example · Cargar el .env con Node 22 nativo · No commitear secrets al repositorio | lista | sí | 3-4 pasos |
| $criterios_clave | El .env está en gitignore · El .env.example documenta todas las variables | lista | sí | calidad verificable |
| $prompt_guia | Configurá las variables de entorno del proyecto: .env con .env.example documentado, carga nativa de Node 22 y verificación de que no haya secrets en el repo. | texto | no | "Entornos y config" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El .env está en gitignore
- [ ] El .env.example documenta todas las variables

## Ejemplos de prompts

- "Configurá las variables de entorno del proyecto: .env con .env.example documentado, carga nativa de Node 22 y verificación de que no haya secrets en el repo."
- "Aplica Entornos y config (nivel basico) a mi trabajo actual con Node.js: servicios y CLIs: prioriza El .env está en gitignore"
- "Revisa mi node-servicios y dime qué pasos de Entornos y config me faltan en este nivel"