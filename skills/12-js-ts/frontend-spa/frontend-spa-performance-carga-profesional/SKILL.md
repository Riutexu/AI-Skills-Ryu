---
name: frontend-spa-performance-carga-profesional
description: Performance de carga · nivel Profesional · SPAs vanilla y Vite. Optimizás la carga inicial con lazy loading, assets livianos y métricas de rendimiento. Objetivo del nivel: Definir presupuestos de rendimiento y medirlos en CI
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "performance-carga"
  nivel: profesional
  stack: "Vite, Custom Elements, Fetch, PHP 8.3"
---

# Performance de carga — Profesional

## Qué hace este skill

Optimizás la carga inicial con lazy loading, assets livianos y métricas de rendimiento. En este nivel se entrega: **Definir presupuestos de rendimiento y medirlos en CI**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **SPAs vanilla y Vite** (Vite, Custom Elements, Fetch, PHP 8.3) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Performance de carga** dentro de SPAs vanilla y Vite.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, Custom Elements, Fetch, PHP 8.3**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Establecer presupuestos de bundle y tiempo de carga
2. Medir Web Vitals en producción
3. Automatizar la medición de performance en el pipeline
4. Crear el plan de optimización con prioridades

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Definir presupuestos de rendimiento y medirlos en CI | texto | sí | resultado medible |
| $stack | SPAs vanilla y Vite | texto | sí | 12-js-ts/frontend-spa |
| $tecnologias | Vite, Custom Elements, Fetch, PHP 8.3 | texto | sí | Vite, Custom Elements, Fetch, PHP 8.3 |
| $tareas_clave | Establecer presupuestos de bundle y tiempo de carga · Medir Web Vitals en producción · Automatizar la medición de performance en el pipeline · Crear el plan de optimización con prioridades | lista | sí | 3-4 pasos |
| $criterios_clave | Los presupuestos se verifican automáticamente · Las Web Vitals se reportan con regularidad | lista | sí | calidad verificable |
| $prompt_guia | Establecé los presupuestos de rendimiento del proyecto (bundle, LCP, CLS), medí Web Vitals en producción y automatizá la verificación en el pipeline de CI. | texto | no | "Performance de carga" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los presupuestos se verifican automáticamente
- [ ] Las Web Vitals se reportan con regularidad

## Ejemplos de prompts

- "Establecé los presupuestos de rendimiento del proyecto (bundle, LCP, CLS), medí Web Vitals en producción y automatizá la verificación en el pipeline de CI."
- "Aplica Performance de carga (nivel profesional) a mi trabajo actual con SPAs vanilla y Vite: prioriza Los presupuestos se verifican automáticamente"
- "Revisa mi frontend-spa y dime qué pasos de Performance de carga me faltan en este nivel"