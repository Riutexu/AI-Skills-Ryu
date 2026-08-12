---
name: node-servicios-empaquetado-publicacion-basico
description: Empaquetado y publicación · nivel Básico · Node.js: servicios y CLIs. Empaquetás y publicás paquetes npm y binarios con versionado y verificación. Objetivo del nivel: Empaquetar un paquete npm básico
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "empaquetado-publicacion"
  nivel: basico
  stack: "Node 22, npm, streams, workers"
---

# Empaquetado y publicación — Básico

## Qué hace este skill

Empaquetás y publicás paquetes npm y binarios con versionado y verificación. En este nivel se entrega: **Empaquetar un paquete npm básico**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Node.js: servicios y CLIs** (Node 22, npm, streams, workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Empaquetado y publicación** dentro de Node.js: servicios y CLIs.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, npm, streams, workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Configurar main, bin y files en package.json
2. Verificar el contenido con npm pack
3. Publicar una versión con npm publish
4. Probar el paquete instalado en otro proyecto

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Empaquetar un paquete npm básico | texto | sí | resultado medible |
| $stack | Node.js: servicios y CLIs | texto | sí | 12-js-ts/node-servicios |
| $tecnologias | Node 22, npm, streams, workers | texto | sí | Node 22, npm, streams, workers |
| $tareas_clave | Configurar main, bin y files en package.json · Verificar el contenido con npm pack · Publicar una versión con npm publish · Probar el paquete instalado en otro proyecto | lista | sí | 3-4 pasos |
| $criterios_clave | El paquete contiene solo los archivos necesarios · El binario se ejecuta tras la instalación | lista | sí | calidad verificable |
| $prompt_guia | Empaquetá la herramienta interna como paquete npm: bin, files y verificación con npm pack antes de publicar la primera versión. | texto | no | "Empaquetado y publicación" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El paquete contiene solo los archivos necesarios
- [ ] El binario se ejecuta tras la instalación

## Ejemplos de prompts

- "Empaquetá la herramienta interna como paquete npm: bin, files y verificación con npm pack antes de publicar la primera versión."
- "Aplica Empaquetado y publicación (nivel basico) a mi trabajo actual con Node.js: servicios y CLIs: prioriza El paquete contiene solo los archivos necesarios"
- "Revisa mi node-servicios y dime qué pasos de Empaquetado y publicación me faltan en este nivel"