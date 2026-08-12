---
name: bundlers-despliegue-produccion-profesional
description: Despliegue a producción · nivel Profesional · Bundlers y tooling. Desplegás el frontend a producción con estrategias de cache, rollback y verificación. Objetivo del nivel: Diseñar el sistema de despliegue del proyecto
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "despliegue-produccion"
  nivel: profesional
  stack: "Vite, esbuild, Rollup, ESLint, Prettier"
---

# Despliegue a producción — Profesional

## Qué hace este skill

Desplegás el frontend a producción con estrategias de cache, rollback y verificación. En este nivel se entrega: **Diseñar el sistema de despliegue del proyecto**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Bundlers y tooling** (Vite, esbuild, Rollup, ESLint, Prettier) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Despliegue a producción** dentro de Bundlers y tooling.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, esbuild, Rollup, ESLint, Prettier**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir el flujo de release con staging y canary
2. Implementar rollback automático con métricas
3. Crear el runbook de despliegue del equipo
4. Documentar la estrategia de despliegue

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar el sistema de despliegue del proyecto | texto | sí | resultado medible |
| $stack | Bundlers y tooling | texto | sí | 12-js-ts/bundlers |
| $tecnologias | Vite, esbuild, Rollup, ESLint, Prettier | texto | sí | Vite, esbuild, Rollup, ESLint, Prettier |
| $tareas_clave | Definir el flujo de release con staging y canary · Implementar rollback automático con métricas · Crear el runbook de despliegue del equipo · Documentar la estrategia de despliegue | lista | sí | 3-4 pasos |
| $criterios_clave | Los rollbacks se disparan con métricas y vuelven atrás · El runbook cubre incidentes de deploy | lista | sí | calidad verificable |
| $prompt_guia | Diseñá el sistema de despliegue: canary para cambios riesgosos, rollback automático con métricas de error y el runbook de deploy para el equipo. | texto | no | "Despliegue a producción" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los rollbacks se disparan con métricas y vuelven atrás
- [ ] El runbook cubre incidentes de deploy

## Ejemplos de prompts

- "Diseñá el sistema de despliegue: canary para cambios riesgosos, rollback automático con métricas de error y el runbook de deploy para el equipo."
- "Aplica Despliegue a producción (nivel profesional) a mi trabajo actual con Bundlers y tooling: prioriza Los rollbacks se disparan con métricas y vuelven atrás"
- "Revisa mi bundlers y dime qué pasos de Despliegue a producción me faltan en este nivel"