---
name: frontend-spa-custom-elements-avanzado
description: Componentes web (custom elements) · nivel Avanzado · SPAs vanilla y Vite. Creás componentes reutilizables con custom elements, shadow DOM y atributos observables. Objetivo del nivel: Combinar shadow DOM, slots y estilos encapsulados
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "custom-elements"
  nivel: avanzado
  stack: "Vite, Custom Elements, Fetch, PHP 8.3"
---

# Componentes web (custom elements) — Avanzado

## Qué hace este skill

Creás componentes reutilizables con custom elements, shadow DOM y atributos observables. En este nivel se entrega: **Combinar shadow DOM, slots y estilos encapsulados**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **SPAs vanilla y Vite** (Vite, Custom Elements, Fetch, PHP 8.3) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Componentes web (custom elements)** dentro de SPAs vanilla y Vite.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, Custom Elements, Fetch, PHP 8.3**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar shadow DOM para encapsular estilos
2. Implementar slots para contenido proyectado
3. Exponer propiedades y eventos personalizados
4. Componer componentes anidados

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Combinar shadow DOM, slots y estilos encapsulados | texto | sí | resultado medible |
| $stack | SPAs vanilla y Vite | texto | sí | 12-js-ts/frontend-spa |
| $tecnologias | Vite, Custom Elements, Fetch, PHP 8.3 | texto | sí | Vite, Custom Elements, Fetch, PHP 8.3 |
| $tareas_clave | Usar shadow DOM para encapsular estilos · Implementar slots para contenido proyectado · Exponer propiedades y eventos personalizados · Componer componentes anidados | lista | sí | 3-4 pasos |
| $criterios_clave | Los estilos internos no filtran al documento · Los eventos personalizados llevan datos útiles en detail | lista | sí | calidad verificable |
| $prompt_guia | Refactorizá el componente de tabla a shadow DOM con slots para el header, eventos personalizados de fila seleccionada y estilos encapsulados. | texto | no | "Componentes web (custom elements)" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los estilos internos no filtran al documento
- [ ] Los eventos personalizados llevan datos útiles en detail

## Ejemplos de prompts

- "Refactorizá el componente de tabla a shadow DOM con slots para el header, eventos personalizados de fila seleccionada y estilos encapsulados."
- "Aplica Componentes web (custom elements) (nivel avanzado) a mi trabajo actual con SPAs vanilla y Vite: prioriza Los estilos internos no filtran al documento"
- "Revisa mi frontend-spa y dime qué pasos de Componentes web (custom elements) me faltan en este nivel"