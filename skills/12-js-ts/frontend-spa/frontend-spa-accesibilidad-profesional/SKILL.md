---
name: frontend-spa-accesibilidad-profesional
description: Accesibilidad · nivel Profesional · SPAs vanilla y Vite. Hacés la SPA accesible: ARIA, navegación por teclado, contraste y foco gestionado. Objetivo del nivel: Incorporar accesibilidad como estándar del proceso
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "accesibilidad"
  nivel: profesional
  stack: "Vite, Custom Elements, Fetch, PHP 8.3"
---

# Accesibilidad — Profesional

## Qué hace este skill

Hacés la SPA accesible: ARIA, navegación por teclado, contraste y foco gestionado. En este nivel se entrega: **Incorporar accesibilidad como estándar del proceso**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **SPAs vanilla y Vite** (Vite, Custom Elements, Fetch, PHP 8.3) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Accesibilidad** dentro de SPAs vanilla y Vite.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, Custom Elements, Fetch, PHP 8.3**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear la checklist de accesibilidad para cada release
2. Agregar pruebas de accesibilidad automatizadas al pipeline
3. Formar al equipo con una guía práctica
4. Auditar la app completa y documentar el plan de remediación

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Incorporar accesibilidad como estándar del proceso | texto | sí | resultado medible |
| $stack | SPAs vanilla y Vite | texto | sí | 12-js-ts/frontend-spa |
| $tecnologias | Vite, Custom Elements, Fetch, PHP 8.3 | texto | sí | Vite, Custom Elements, Fetch, PHP 8.3 |
| $tareas_clave | Crear la checklist de accesibilidad para cada release · Agregar pruebas de accesibilidad automatizadas al pipeline · Formar al equipo con una guía práctica · Auditar la app completa y documentar el plan de remediación | lista | sí | 3-4 pasos |
| $criterios_clave | La checklist se usa en cada release · Las auditorías automáticas corren en el pipeline | lista | sí | calidad verificable |
| $prompt_guia | Armá la estrategia de accesibilidad del proyecto: checklist de release, auditorías automatizadas con axe en el pipeline y guía práctica para el equipo con los 10 errores más comunes. | texto | no | "Accesibilidad" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La checklist se usa en cada release
- [ ] Las auditorías automáticas corren en el pipeline

## Ejemplos de prompts

- "Armá la estrategia de accesibilidad del proyecto: checklist de release, auditorías automatizadas con axe en el pipeline y guía práctica para el equipo con los 10 errores más comunes."
- "Aplica Accesibilidad (nivel profesional) a mi trabajo actual con SPAs vanilla y Vite: prioriza La checklist se usa en cada release"
- "Revisa mi frontend-spa y dime qué pasos de Accesibilidad me faltan en este nivel"