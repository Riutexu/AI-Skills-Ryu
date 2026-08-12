---
name: frontend-spa-vite-estructura-profesional
description: Vite y estructura · nivel Profesional · SPAs vanilla y Vite. Organizás el proyecto Vite en capas y carpetas que escalan sin framework. Objetivo del nivel: Definir la arquitectura de la SPA como estándar del equipo
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "vite-estructura"
  nivel: profesional
  stack: "Vite, Custom Elements, Fetch, PHP 8.3"
---

# Vite y estructura — Profesional

## Qué hace este skill

Organizás el proyecto Vite en capas y carpetas que escalan sin framework. En este nivel se entrega: **Definir la arquitectura de la SPA como estándar del equipo**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **SPAs vanilla y Vite** (Vite, Custom Elements, Fetch, PHP 8.3) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Vite y estructura** dentro de SPAs vanilla y Vite.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, Custom Elements, Fetch, PHP 8.3**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Redactar el ADR de arquitectura de la SPA
2. Definir convenciones de carpetas y límites entre capas
3. Crear un template de proyecto nuevo a partir de la estructura
4. Revisar periódicamente el cumplimiento de los límites

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Definir la arquitectura de la SPA como estándar del equipo | texto | sí | resultado medible |
| $stack | SPAs vanilla y Vite | texto | sí | 12-js-ts/frontend-spa |
| $tecnologias | Vite, Custom Elements, Fetch, PHP 8.3 | texto | sí | Vite, Custom Elements, Fetch, PHP 8.3 |
| $tareas_clave | Redactar el ADR de arquitectura de la SPA · Definir convenciones de carpetas y límites entre capas · Crear un template de proyecto nuevo a partir de la estructura · Revisar periódicamente el cumplimiento de los límites | lista | sí | 3-4 pasos |
| $criterios_clave | Los ADRs documentan las decisiones clave · Nuevos proyectos arrancan desde el template | lista | sí | calidad verificable |
| $prompt_guia | Escribí el ADR de arquitectura de la SPA (capas, dominios, límites y reglas de dependencia) y generá el template de proyecto nuevo para los próximos clientes. | texto | no | "Vite y estructura" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los ADRs documentan las decisiones clave
- [ ] Nuevos proyectos arrancan desde el template

## Ejemplos de prompts

- "Escribí el ADR de arquitectura de la SPA (capas, dominios, límites y reglas de dependencia) y generá el template de proyecto nuevo para los próximos clientes."
- "Aplica Vite y estructura (nivel profesional) a mi trabajo actual con SPAs vanilla y Vite: prioriza Los ADRs documentan las decisiones clave"
- "Revisa mi frontend-spa y dime qué pasos de Vite y estructura me faltan en este nivel"