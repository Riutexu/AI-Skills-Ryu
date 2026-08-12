---
name: frontend-spa-formularios-validacion-basico
description: Formularios y validación · nivel Básico · SPAs vanilla y Vite. Construís formularios robustos con validación en vivo, en submit y contra el backend. Objetivo del nivel: Construir formularios con validación básica de campos
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "formularios-validacion"
  nivel: basico
  stack: "Vite, Custom Elements, Fetch, PHP 8.3"
---

# Formularios y validación — Básico

## Qué hace este skill

Construís formularios robustos con validación en vivo, en submit y contra el backend. En este nivel se entrega: **Construir formularios con validación básica de campos**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **SPAs vanilla y Vite** (Vite, Custom Elements, Fetch, PHP 8.3) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Formularios y validación** dentro de SPAs vanilla y Vite.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, Custom Elements, Fetch, PHP 8.3**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Validar campos obligatorios y formatos con regex simples
2. Mostrar mensajes de error por campo
3. Validar al submit y bloquear el envío
4. Limpiar errores al corregir el campo

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Construir formularios con validación básica de campos | texto | sí | resultado medible |
| $stack | SPAs vanilla y Vite | texto | sí | 12-js-ts/frontend-spa |
| $tecnologias | Vite, Custom Elements, Fetch, PHP 8.3 | texto | sí | Vite, Custom Elements, Fetch, PHP 8.3 |
| $tareas_clave | Validar campos obligatorios y formatos con regex simples · Mostrar mensajes de error por campo · Validar al submit y bloquear el envío · Limpiar errores al corregir el campo | lista | sí | 3-4 pasos |
| $criterios_clave | Ningún formulario se envía inválido · Los mensajes se muestran junto al campo | lista | sí | calidad verificable |
| $prompt_guia | Armá el formulario de alta de cliente con validación de nombre, email y CUIT: mensajes por campo, validación al submit y limpieza al corregir. | texto | no | "Formularios y validación" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Ningún formulario se envía inválido
- [ ] Los mensajes se muestran junto al campo

## Ejemplos de prompts

- "Armá el formulario de alta de cliente con validación de nombre, email y CUIT: mensajes por campo, validación al submit y limpieza al corregir."
- "Aplica Formularios y validación (nivel basico) a mi trabajo actual con SPAs vanilla y Vite: prioriza Ningún formulario se envía inválido"
- "Revisa mi frontend-spa y dime qué pasos de Formularios y validación me faltan en este nivel"