---
name: node-servicios-empaquetado-publicacion-avanzado
description: Empaquetado y publicación · nivel Avanzado · Node.js: servicios y CLIs. Empaquetás y publicás paquetes npm y binarios con versionado y verificación. Objetivo del nivel: Publicar paquetes con versionado semver y compatibilidad
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "empaquetado-publicacion"
  nivel: avanzado
  stack: "Node 22, npm, streams, workers"
---

# Empaquetado y publicación — Avanzado

## Qué hace este skill

Empaquetás y publicás paquetes npm y binarios con versionado y verificación. En este nivel se entrega: **Publicar paquetes con versionado semver y compatibilidad**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Node.js: servicios y CLIs** (Node 22, npm, streams, workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Empaquetado y publicación** dentro de Node.js: servicios y CLIs.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, npm, streams, workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir la estrategia de versionado semver
2. Generar changelogs con conventional commits
3. Publicar desde CI con autenticación segura
4. Declarar peerDependencies correctamente

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Publicar paquetes con versionado semver y compatibilidad | texto | sí | resultado medible |
| $stack | Node.js: servicios y CLIs | texto | sí | 12-js-ts/node-servicios |
| $tecnologias | Node 22, npm, streams, workers | texto | sí | Node 22, npm, streams, workers |
| $tareas_clave | Definir la estrategia de versionado semver · Generar changelogs con conventional commits · Publicar desde CI con autenticación segura · Declarar peerDependencies correctamente | lista | sí | 3-4 pasos |
| $criterios_clave | Los releases siguen semver sin ambigüedad · El paquete publica desde CI sin credenciales locales | lista | sí | calidad verificable |
| $prompt_guia | Automatizá la publicación del paquete desde CI: versionado semver con conventional commits, changelog y publish con credenciales del pipeline. | texto | no | "Empaquetado y publicación" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los releases siguen semver sin ambigüedad
- [ ] El paquete publica desde CI sin credenciales locales

## Ejemplos de prompts

- "Automatizá la publicación del paquete desde CI: versionado semver con conventional commits, changelog y publish con credenciales del pipeline."
- "Aplica Empaquetado y publicación (nivel avanzado) a mi trabajo actual con Node.js: servicios y CLIs: prioriza Los releases siguen semver sin ambigüedad"
- "Revisa mi node-servicios y dime qué pasos de Empaquetado y publicación me faltan en este nivel"