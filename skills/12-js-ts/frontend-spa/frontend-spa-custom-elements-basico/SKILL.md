---
name: frontend-spa-custom-elements-basico
description: Componentes web (custom elements) · nivel Básico · SPAs vanilla y Vite. Creás componentes reutilizables con custom elements, shadow DOM y atributos observables. Objetivo del nivel: Crear custom elements con atributos y ciclo de vida
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "custom-elements"
  nivel: basico
  stack: "Vite, Custom Elements, Fetch, PHP 8.3"
---

# Componentes web (custom elements) — Básico

## Qué hace este skill

Creás componentes reutilizables con custom elements, shadow DOM y atributos observables. En este nivel se entrega: **Crear custom elements con atributos y ciclo de vida**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **SPAs vanilla y Vite** (Vite, Custom Elements, Fetch, PHP 8.3) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Componentes web (custom elements)** dentro de SPAs vanilla y Vite.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, Custom Elements, Fetch, PHP 8.3**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir un custom element extendiendo HTMLElement
2. Usar connectedCallback y attributeChangedCallback
3. Declarar observedAttributes
4. Registrar el componente con customElements.define

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Crear custom elements con atributos y ciclo de vida | texto | sí | resultado medible |
| $stack | SPAs vanilla y Vite | texto | sí | 12-js-ts/frontend-spa |
| $tecnologias | Vite, Custom Elements, Fetch, PHP 8.3 | texto | sí | Vite, Custom Elements, Fetch, PHP 8.3 |
| $tareas_clave | Definir un custom element extendiendo HTMLElement · Usar connectedCallback y attributeChangedCallback · Declarar observedAttributes · Registrar el componente con customElements.define | lista | sí | 3-4 pasos |
| $criterios_clave | El componente se instancia correctamente en el DOM · Los atributos observados reaccionan al cambio | lista | sí | calidad verificable |
| $prompt_guia | Creá el componente mi-boton con atributo label y evento click propio, usando el ciclo de vida de custom elements; mostralo funcionando en la página principal. | texto | no | "Componentes web (custom elements)" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El componente se instancia correctamente en el DOM
- [ ] Los atributos observados reaccionan al cambio

## Ejemplos de prompts

- "Creá el componente mi-boton con atributo label y evento click propio, usando el ciclo de vida de custom elements; mostralo funcionando en la página principal."
- "Aplica Componentes web (custom elements) (nivel basico) a mi trabajo actual con SPAs vanilla y Vite: prioriza El componente se instancia correctamente en el DOM"
- "Revisa mi frontend-spa y dime qué pasos de Componentes web (custom elements) me faltan en este nivel"