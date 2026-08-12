---
name: web-apis-fetch-web-components-avanzados-avanzado
description: Web components avanzados · nivel Avanzado · APIs del navegador. Llevás custom elements al límite: composition, forms, lazy upgrade y frameworks externos. Objetivo del nivel: Crear componentes de formulario con integración al form nativo
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "web-components-avanzados"
  nivel: avanzado
  stack: "Fetch, SSE, WebSockets, IndexedDB, Service Workers"
---

# Web components avanzados — Avanzado

## Qué hace este skill

Llevás custom elements al límite: composition, forms, lazy upgrade y frameworks externos. En este nivel se entrega: **Crear componentes de formulario con integración al form nativo**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **APIs del navegador** (Fetch, SSE, WebSockets, IndexedDB, Service Workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Web components avanzados** dentro de APIs del navegador.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Fetch, SSE, WebSockets, IndexedDB, Service Workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Implementar form-associated custom elements
2. Exponer value y validity al form nativo
3. Manejar la validación del componente
4. Integrar con el submit del formulario padre

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Crear componentes de formulario con integración al form nativo | texto | sí | resultado medible |
| $stack | APIs del navegador | texto | sí | 12-js-ts/web-apis-fetch |
| $tecnologias | Fetch, SSE, WebSockets, IndexedDB, Service Workers | texto | sí | Fetch, SSE, WebSockets, IndexedDB, Service Workers |
| $tareas_clave | Implementar form-associated custom elements · Exponer value y validity al form nativo · Manejar la validación del componente · Integrar con el submit del formulario padre | lista | sí | 3-4 pasos |
| $criterios_clave | El componente participa del form como un input nativo · La validación reporta al form correctamente | lista | sí | calidad verificable |
| $prompt_guia | Convertí mi-input-fecha en un form-associated custom element que valide el formato y participe del submit y la validación del form nativo. | texto | no | "Web components avanzados" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El componente participa del form como un input nativo
- [ ] La validación reporta al form correctamente

## Ejemplos de prompts

- "Convertí mi-input-fecha en un form-associated custom element que valide el formato y participe del submit y la validación del form nativo."
- "Aplica Web components avanzados (nivel avanzado) a mi trabajo actual con APIs del navegador: prioriza El componente participa del form como un input nativo"
- "Revisa mi web-apis-fetch y dime qué pasos de Web components avanzados me faltan en este nivel"