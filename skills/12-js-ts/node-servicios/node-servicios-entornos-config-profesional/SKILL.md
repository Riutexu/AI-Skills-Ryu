---
name: node-servicios-entornos-config-profesional
description: Entornos y config · nivel Profesional · Node.js: servicios y CLIs. Gestionás configuración por entorno con variables de entorno y validación. Objetivo del nivel: Diseñar el sistema de configuración del proyecto completo
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "entornos-config"
  nivel: profesional
  stack: "Node 22, npm, streams, workers"
---

# Entornos y config — Profesional

## Qué hace este skill

Gestionás configuración por entorno con variables de entorno y validación. En este nivel se entrega: **Diseñar el sistema de configuración del proyecto completo**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Node.js: servicios y CLIs** (Node 22, npm, streams, workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Entornos y config** dentro de Node.js: servicios y CLIs.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, npm, streams, workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir la estrategia de secrets en CI y producción
2. Crear un módulo de config tipado y centralizado
3. Documentar la matriz de variables por entorno
4. Implementar auditoría de configuración en el pipeline

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar el sistema de configuración del proyecto completo | texto | sí | resultado medible |
| $stack | Node.js: servicios y CLIs | texto | sí | 12-js-ts/node-servicios |
| $tecnologias | Node 22, npm, streams, workers | texto | sí | Node 22, npm, streams, workers |
| $tareas_clave | Definir la estrategia de secrets en CI y producción · Crear un módulo de config tipado y centralizado · Documentar la matriz de variables por entorno · Implementar auditoría de configuración en el pipeline | lista | sí | 3-4 pasos |
| $criterios_clave | Los secrets se inyectan sin estar en el código · El módulo de config valida y tipa todo el sistema | lista | sí | calidad verificable |
| $prompt_guia | Diseñá el sistema de configuración completo: módulo tipado centralizado, manejo de secrets en CI y producción sin exponerlos, y documentación de la matriz de variables. | texto | no | "Entornos y config" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los secrets se inyectan sin estar en el código
- [ ] El módulo de config valida y tipa todo el sistema

## Ejemplos de prompts

- "Diseñá el sistema de configuración completo: módulo tipado centralizado, manejo de secrets en CI y producción sin exponerlos, y documentación de la matriz de variables."
- "Aplica Entornos y config (nivel profesional) a mi trabajo actual con Node.js: servicios y CLIs: prioriza Los secrets se inyectan sin estar en el código"
- "Revisa mi node-servicios y dime qué pasos de Entornos y config me faltan en este nivel"