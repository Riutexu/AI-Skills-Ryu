---
name: frontend-spa-formularios-validacion-avanzado
description: Formularios y validación · nivel Avanzado · SPAs vanilla y Vite. Construís formularios robustos con validación en vivo, en submit y contra el backend. Objetivo del nivel: Crear un sistema de validación reutilizable y en vivo
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "formularios-validacion"
  nivel: avanzado
  stack: "Vite, Custom Elements, Fetch, PHP 8.3"
---

# Formularios y validación — Avanzado

## Qué hace este skill

Construís formularios robustos con validación en vivo, en submit y contra el backend. En este nivel se entrega: **Crear un sistema de validación reutilizable y en vivo**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **SPAs vanilla y Vite** (Vite, Custom Elements, Fetch, PHP 8.3) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Formularios y validación** dentro de SPAs vanilla y Vite.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, Custom Elements, Fetch, PHP 8.3**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir reglas de validación declarativas por campo
2. Validar en vivo con debounce mientras se escribe
3. Sincronizar errores con el estado del form
4. Validar campos dependientes (confirmar contraseña)

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Crear un sistema de validación reutilizable y en vivo | texto | sí | resultado medible |
| $stack | SPAs vanilla y Vite | texto | sí | 12-js-ts/frontend-spa |
| $tecnologias | Vite, Custom Elements, Fetch, PHP 8.3 | texto | sí | Vite, Custom Elements, Fetch, PHP 8.3 |
| $tareas_clave | Definir reglas de validación declarativas por campo · Validar en vivo con debounce mientras se escribe · Sincronizar errores con el estado del form · Validar campos dependientes (confirmar contraseña) | lista | sí | 3-4 pasos |
| $criterios_clave | Las reglas se reutilizan entre formularios · La validación en vivo no se dispara a cada tecla | lista | sí | calidad verificable |
| $prompt_guia | Implementá el sistema de validación declarativo del proyecto: reglas por campo, debounce en vivo, campos dependientes y errores sincronizados con el estado del form. | texto | no | "Formularios y validación" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las reglas se reutilizan entre formularios
- [ ] La validación en vivo no se dispara a cada tecla

## Ejemplos de prompts

- "Implementá el sistema de validación declarativo del proyecto: reglas por campo, debounce en vivo, campos dependientes y errores sincronizados con el estado del form."
- "Aplica Formularios y validación (nivel avanzado) a mi trabajo actual con SPAs vanilla y Vite: prioriza Las reglas se reutilizan entre formularios"
- "Revisa mi frontend-spa y dime qué pasos de Formularios y validación me faltan en este nivel"