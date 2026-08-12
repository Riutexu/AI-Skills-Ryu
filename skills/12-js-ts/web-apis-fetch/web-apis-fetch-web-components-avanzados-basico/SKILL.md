---
name: web-apis-fetch-web-components-avanzados-basico
description: Web components avanzados · nivel Básico · APIs del navegador. Llevás custom elements al límite: composition, forms, lazy upgrade y frameworks externos. Objetivo del nivel: Usar declarative shadow DOM y atributos reflejados
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "web-components-avanzados"
  nivel: basico
  stack: "Fetch, SSE, WebSockets, IndexedDB, Service Workers"
---

# Web components avanzados — Básico

## Qué hace este skill

Llevás custom elements al límite: composition, forms, lazy upgrade y frameworks externos. En este nivel se entrega: **Usar declarative shadow DOM y atributos reflejados**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **APIs del navegador** (Fetch, SSE, WebSockets, IndexedDB, Service Workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Web components avanzados** dentro de APIs del navegador.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Fetch, SSE, WebSockets, IndexedDB, Service Workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar declarative shadow DOM donde aplique
2. Reflejar propiedades a atributos y viceversa
3. Manejar la interacción con el DOM ligero
4. Definir eventos con detalles ricos

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Usar declarative shadow DOM y atributos reflejados | texto | sí | resultado medible |
| $stack | APIs del navegador | texto | sí | 12-js-ts/web-apis-fetch |
| $tecnologias | Fetch, SSE, WebSockets, IndexedDB, Service Workers | texto | sí | Fetch, SSE, WebSockets, IndexedDB, Service Workers |
| $tareas_clave | Usar declarative shadow DOM donde aplique · Reflejar propiedades a atributos y viceversa · Manejar la interacción con el DOM ligero · Definir eventos con detalles ricos | lista | sí | 3-4 pasos |
| $criterios_clave | Las propiedades se reflejan en atributos correctamente · Los eventos exponen datos útiles en detail | lista | sí | calidad verificable |
| $prompt_guia | Mejorá el componente mi-select: reflejá propiedades a atributos, usá declarative shadow DOM y emití eventos con el valor y el índice en detail. | texto | no | "Web components avanzados" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las propiedades se reflejan en atributos correctamente
- [ ] Los eventos exponen datos útiles en detail

## Ejemplos de prompts

- "Mejorá el componente mi-select: reflejá propiedades a atributos, usá declarative shadow DOM y emití eventos con el valor y el índice en detail."
- "Aplica Web components avanzados (nivel basico) a mi trabajo actual con APIs del navegador: prioriza Las propiedades se reflejan en atributos correctamente"
- "Revisa mi web-apis-fetch y dime qué pasos de Web components avanzados me faltan en este nivel"