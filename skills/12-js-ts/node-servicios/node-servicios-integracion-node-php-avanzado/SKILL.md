---
name: node-servicios-integracion-node-php-avanzado
description: Integración con PHP · nivel Avanzado · Node.js: servicios y CLIs. Hacés que las herramientas Node y el backend PHP convivan: scripts de build, deploy y dev. Objetivo del nivel: Compartir configuración y contratos entre Node y PHP
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "integracion-node-php"
  nivel: avanzado
  stack: "Node 22, npm, streams, workers"
---

# Integración con PHP — Avanzado

## Qué hace este skill

Hacés que las herramientas Node y el backend PHP convivan: scripts de build, deploy y dev. En este nivel se entrega: **Compartir configuración y contratos entre Node y PHP**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Node.js: servicios y CLIs** (Node 22, npm, streams, workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Integración con PHP** dentro de Node.js: servicios y CLIs.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, npm, streams, workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Generar config compartida desde Node consumida por PHP
2. Validar el contrato JSON de la API en ambos lados
3. Sincronizar versiones entre frontend y backend
4. Crear tareas de dev que levanten ambos servers

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Compartir configuración y contratos entre Node y PHP | texto | sí | resultado medible |
| $stack | Node.js: servicios y CLIs | texto | sí | 12-js-ts/node-servicios |
| $tecnologias | Node 22, npm, streams, workers | texto | sí | Node 22, npm, streams, workers |
| $tareas_clave | Generar config compartida desde Node consumida por PHP · Validar el contrato JSON de la API en ambos lados · Sincronizar versiones entre frontend y backend · Crear tareas de dev que levanten ambos servers | lista | sí | 3-4 pasos |
| $criterios_clave | La config compartida se genera y consume sin duplicación · Un comando levanta frontend y backend juntos | lista | sí | calidad verificable |
| $prompt_guia | Creá el script de dev integrado: levantar Vite y el server PHP juntos, generar la config compartida desde un fuente único y validar el contrato API en ambos. | texto | no | "Integración con PHP" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La config compartida se genera y consume sin duplicación
- [ ] Un comando levanta frontend y backend juntos

## Ejemplos de prompts

- "Creá el script de dev integrado: levantar Vite y el server PHP juntos, generar la config compartida desde un fuente único y validar el contrato API en ambos."
- "Aplica Integración con PHP (nivel avanzado) a mi trabajo actual con Node.js: servicios y CLIs: prioriza La config compartida se genera y consume sin duplicación"
- "Revisa mi node-servicios y dime qué pasos de Integración con PHP me faltan en este nivel"