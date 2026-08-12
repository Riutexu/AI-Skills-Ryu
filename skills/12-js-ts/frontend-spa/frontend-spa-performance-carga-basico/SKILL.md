---
name: frontend-spa-performance-carga-basico
description: Performance de carga · nivel Básico · SPAs vanilla y Vite. Optimizás la carga inicial con lazy loading, assets livianos y métricas de rendimiento. Objetivo del nivel: Optimizar la carga básica de la SPA
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "performance-carga"
  nivel: basico
  stack: "Vite, Custom Elements, Fetch, PHP 8.3"
---

# Performance de carga — Básico

## Qué hace este skill

Optimizás la carga inicial con lazy loading, assets livianos y métricas de rendimiento. En este nivel se entrega: **Optimizar la carga básica de la SPA**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **SPAs vanilla y Vite** (Vite, Custom Elements, Fetch, PHP 8.3) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Performance de carga** dentro de SPAs vanilla y Vite.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, Custom Elements, Fetch, PHP 8.3**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Cargar scripts con defer y module en el HTML
2. Comprimir y dimensionar imágenes
3. Eliminar recursos no usados de la página
4. Medir tiempos de carga con el panel Network

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Optimizar la carga básica de la SPA | texto | sí | resultado medible |
| $stack | SPAs vanilla y Vite | texto | sí | 12-js-ts/frontend-spa |
| $tecnologias | Vite, Custom Elements, Fetch, PHP 8.3 | texto | sí | Vite, Custom Elements, Fetch, PHP 8.3 |
| $tareas_clave | Cargar scripts con defer y module en el HTML · Comprimir y dimensionar imágenes · Eliminar recursos no usados de la página · Medir tiempos de carga con el panel Network | lista | sí | 3-4 pasos |
| $criterios_clave | Los recursos críticos cargan sin bloquear el render · El peso de la página inicial baja significativamente | lista | sí | calidad verificable |
| $prompt_guia | Auditá la carga inicial de la SPA: módulos con defer, imágenes comprimidas, recursos huérfanos eliminados y un reporte de tiempos con el panel Network. | texto | no | "Performance de carga" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los recursos críticos cargan sin bloquear el render
- [ ] El peso de la página inicial baja significativamente

## Ejemplos de prompts

- "Auditá la carga inicial de la SPA: módulos con defer, imágenes comprimidas, recursos huérfanos eliminados y un reporte de tiempos con el panel Network."
- "Aplica Performance de carga (nivel basico) a mi trabajo actual con SPAs vanilla y Vite: prioriza Los recursos críticos cargan sin bloquear el render"
- "Revisa mi frontend-spa y dime qué pasos de Performance de carga me faltan en este nivel"