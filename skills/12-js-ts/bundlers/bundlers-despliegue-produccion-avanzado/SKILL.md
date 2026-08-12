---
name: bundlers-despliegue-produccion-avanzado
description: Despliegue a producción · nivel Avanzado · Bundlers y tooling. Desplegás el frontend a producción con estrategias de cache, rollback y verificación. Objetivo del nivel: Desplegar con estrategias de cache y cero downtime
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "despliegue-produccion"
  nivel: avanzado
  stack: "Vite, esbuild, Rollup, ESLint, Prettier"
---

# Despliegue a producción — Avanzado

## Qué hace este skill

Desplegás el frontend a producción con estrategias de cache, rollback y verificación. En este nivel se entrega: **Desplegar con estrategias de cache y cero downtime**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Bundlers y tooling** (Vite, esbuild, Rollup, ESLint, Prettier) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Despliegue a producción** dentro de Bundlers y tooling.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, esbuild, Rollup, ESLint, Prettier**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Implementar deploys con inmutabilidad de assets
2. Configurar cache largo de assets con hash
3. Estrategias de migración progresiva (blue/green)
4. Automatizar el deploy desde el pipeline

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Desplegar con estrategias de cache y cero downtime | texto | sí | resultado medible |
| $stack | Bundlers y tooling | texto | sí | 12-js-ts/bundlers |
| $tecnologias | Vite, esbuild, Rollup, ESLint, Prettier | texto | sí | Vite, esbuild, Rollup, ESLint, Prettier |
| $tareas_clave | Implementar deploys con inmutabilidad de assets · Configurar cache largo de assets con hash · Estrategias de migración progresiva (blue/green) · Automatizar el deploy desde el pipeline | lista | sí | 3-4 pasos |
| $criterios_clave | Los assets con hash se cachean por largo tiempo · El deploy se automatiza sin downtime | lista | sí | calidad verificable |
| $prompt_guia | La SPA se desplegaba con cache rota: implementá assets inmutables con cache largo, deploy automatizado blue/green y verificá el cambio de versión. | texto | no | "Despliegue a producción" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los assets con hash se cachean por largo tiempo
- [ ] El deploy se automatiza sin downtime

## Ejemplos de prompts

- "La SPA se desplegaba con cache rota: implementá assets inmutables con cache largo, deploy automatizado blue/green y verificá el cambio de versión."
- "Aplica Despliegue a producción (nivel avanzado) a mi trabajo actual con Bundlers y tooling: prioriza Los assets con hash se cachean por largo tiempo"
- "Revisa mi bundlers y dime qué pasos de Despliegue a producción me faltan en este nivel"