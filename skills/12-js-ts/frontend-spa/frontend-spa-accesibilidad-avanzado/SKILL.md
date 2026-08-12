---
name: frontend-spa-accesibilidad-avanzado
description: Accesibilidad · nivel Avanzado · SPAs vanilla y Vite. Hacés la SPA accesible: ARIA, navegación por teclado, contraste y foco gestionado. Objetivo del nivel: Implementar patrones accesibles completos
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "accesibilidad"
  nivel: avanzado
  stack: "Vite, Custom Elements, Fetch, PHP 8.3"
---

# Accesibilidad — Avanzado

## Qué hace este skill

Hacés la SPA accesible: ARIA, navegación por teclado, contraste y foco gestionado. En este nivel se entrega: **Implementar patrones accesibles completos**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **SPAs vanilla y Vite** (Vite, Custom Elements, Fetch, PHP 8.3) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Accesibilidad** dentro de SPAs vanilla y Vite.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, Custom Elements, Fetch, PHP 8.3**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Implementar el patrón de dialog accesible con foco gestionado
2. Manejar aria-live para mensajes dinámicos
3. Navegar tablas y listas con teclado
4. Asegurar la accesibilidad de los formularios con errores

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Implementar patrones accesibles completos | texto | sí | resultado medible |
| $stack | SPAs vanilla y Vite | texto | sí | 12-js-ts/frontend-spa |
| $tecnologias | Vite, Custom Elements, Fetch, PHP 8.3 | texto | sí | Vite, Custom Elements, Fetch, PHP 8.3 |
| $tareas_clave | Implementar el patrón de dialog accesible con foco gestionado · Manejar aria-live para mensajes dinámicos · Navegar tablas y listas con teclado · Asegurar la accesibilidad de los formularios con errores | lista | sí | 3-4 pasos |
| $criterios_clave | El dialog atrapa el foco y lo devuelve al cerrar · Los anuncios dinámicos se comunican con aria-live | lista | sí | calidad verificable |
| $prompt_guia | Implementá el modal de confirmación accesible: foco gestionado, Escape para cerrar, aria-modal y el estado de los errores del form anunciado con aria-live. | texto | no | "Accesibilidad" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El dialog atrapa el foco y lo devuelve al cerrar
- [ ] Los anuncios dinámicos se comunican con aria-live

## Ejemplos de prompts

- "Implementá el modal de confirmación accesible: foco gestionado, Escape para cerrar, aria-modal y el estado de los errores del form anunciado con aria-live."
- "Aplica Accesibilidad (nivel avanzado) a mi trabajo actual con SPAs vanilla y Vite: prioriza El dialog atrapa el foco y lo devuelve al cerrar"
- "Revisa mi frontend-spa y dime qué pasos de Accesibilidad me faltan en este nivel"