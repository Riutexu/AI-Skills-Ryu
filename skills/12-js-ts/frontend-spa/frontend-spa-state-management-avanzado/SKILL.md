---
name: frontend-spa-state-management-avanzado
description: State management simple · nivel Avanzado · SPAs vanilla y Vite. Manejás el estado de la SPA con stores simples, suscripciones y actualizaciones inmutables. Objetivo del nivel: Componer stores y derivar estado sin acoplar
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "state-management"
  nivel: avanzado
  stack: "Vite, Custom Elements, Fetch, PHP 8.3"
---

# State management simple — Avanzado

## Qué hace este skill

Manejás el estado de la SPA con stores simples, suscripciones y actualizaciones inmutables. En este nivel se entrega: **Componer stores y derivar estado sin acoplar**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **SPAs vanilla y Vite** (Vite, Custom Elements, Fetch, PHP 8.3) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **State management simple** dentro de SPAs vanilla y Vite.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, Custom Elements, Fetch, PHP 8.3**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Derivar valores con selectores calculados
2. Componer stores de dominio entre sí
3. Persistir el estado en localStorage con sincronización
4. Manejar estados de carga y error en el store

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Componer stores y derivar estado sin acoplar | texto | sí | resultado medible |
| $stack | SPAs vanilla y Vite | texto | sí | 12-js-ts/frontend-spa |
| $tecnologias | Vite, Custom Elements, Fetch, PHP 8.3 | texto | sí | Vite, Custom Elements, Fetch, PHP 8.3 |
| $tareas_clave | Derivar valores con selectores calculados · Componer stores de dominio entre sí · Persistir el estado en localStorage con sincronización · Manejar estados de carga y error en el store | lista | sí | 3-4 pasos |
| $criterios_clave | Los selectores calculan sin duplicar estado · La persistencia restaura el estado al recargar | lista | sí | calidad verificable |
| $prompt_guia | Extendé el store con selectores derivados (total, cantidad de ítems), persistencia en localStorage y estados de carga para el checkout. | texto | no | "State management simple" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los selectores calculan sin duplicar estado
- [ ] La persistencia restaura el estado al recargar

## Ejemplos de prompts

- "Extendé el store con selectores derivados (total, cantidad de ítems), persistencia en localStorage y estados de carga para el checkout."
- "Aplica State management simple (nivel avanzado) a mi trabajo actual con SPAs vanilla y Vite: prioriza Los selectores calculan sin duplicar estado"
- "Revisa mi frontend-spa y dime qué pasos de State management simple me faltan en este nivel"