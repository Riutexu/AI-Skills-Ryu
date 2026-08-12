---
name: frontend-spa-performance-carga-avanzado
description: Performance de carga · nivel Avanzado · SPAs vanilla y Vite. Optimizás la carga inicial con lazy loading, assets livianos y métricas de rendimiento. Objetivo del nivel: Aplicar code splitting y lazy loading reales
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "performance-carga"
  nivel: avanzado
  stack: "Vite, Custom Elements, Fetch, PHP 8.3"
---

# Performance de carga — Avanzado

## Qué hace este skill

Optimizás la carga inicial con lazy loading, assets livianos y métricas de rendimiento. En este nivel se entrega: **Aplicar code splitting y lazy loading reales**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **SPAs vanilla y Vite** (Vite, Custom Elements, Fetch, PHP 8.3) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Performance de carga** dentro de SPAs vanilla y Vite.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, Custom Elements, Fetch, PHP 8.3**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Dividir los bundles por ruta con import dinámico
2. Cargar librerías pesadas bajo demanda
3. Usar preload para recursos críticos
4. Implementar loading placeholder mientras cargan las vistas

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Aplicar code splitting y lazy loading reales | texto | sí | resultado medible |
| $stack | SPAs vanilla y Vite | texto | sí | 12-js-ts/frontend-spa |
| $tecnologias | Vite, Custom Elements, Fetch, PHP 8.3 | texto | sí | Vite, Custom Elements, Fetch, PHP 8.3 |
| $tareas_clave | Dividir los bundles por ruta con import dinámico · Cargar librerías pesadas bajo demanda · Usar preload para recursos críticos · Implementar loading placeholder mientras cargan las vistas | lista | sí | 3-4 pasos |
| $criterios_clave | El bundle inicial no incluye vistas no visitadas · Las vistas cargan con placeholder visible | lista | sí | calidad verificable |
| $prompt_guia | La SPA carga 400KB en el primer paint: dividí los bundles por ruta, cargá la librería de charts solo cuando se visita la sección y agregá placeholders de carga. | texto | no | "Performance de carga" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El bundle inicial no incluye vistas no visitadas
- [ ] Las vistas cargan con placeholder visible

## Ejemplos de prompts

- "La SPA carga 400KB en el primer paint: dividí los bundles por ruta, cargá la librería de charts solo cuando se visita la sección y agregá placeholders de carga."
- "Aplica Performance de carga (nivel avanzado) a mi trabajo actual con SPAs vanilla y Vite: prioriza El bundle inicial no incluye vistas no visitadas"
- "Revisa mi frontend-spa y dime qué pasos de Performance de carga me faltan en este nivel"