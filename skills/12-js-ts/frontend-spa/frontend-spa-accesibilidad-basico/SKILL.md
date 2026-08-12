---
name: frontend-spa-accesibilidad-basico
description: Accesibilidad · nivel Básico · SPAs vanilla y Vite. Hacés la SPA accesible: ARIA, navegación por teclado, contraste y foco gestionado. Objetivo del nivel: Aplicar atributos ARIA y semántica básica
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "accesibilidad"
  nivel: basico
  stack: "Vite, Custom Elements, Fetch, PHP 8.3"
---

# Accesibilidad — Básico

## Qué hace este skill

Hacés la SPA accesible: ARIA, navegación por teclado, contraste y foco gestionado. En este nivel se entrega: **Aplicar atributos ARIA y semántica básica**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **SPAs vanilla y Vite** (Vite, Custom Elements, Fetch, PHP 8.3) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Accesibilidad** dentro de SPAs vanilla y Vite.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, Custom Elements, Fetch, PHP 8.3**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar landmarks y headings semánticos
2. Agregar alt y aria-label a elementos críticos
3. Manejar focus visible en navegación por teclado
4. Verificar contraste de colores

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Aplicar atributos ARIA y semántica básica | texto | sí | resultado medible |
| $stack | SPAs vanilla y Vite | texto | sí | 12-js-ts/frontend-spa |
| $tecnologias | Vite, Custom Elements, Fetch, PHP 8.3 | texto | sí | Vite, Custom Elements, Fetch, PHP 8.3 |
| $tareas_clave | Usar landmarks y headings semánticos · Agregar alt y aria-label a elementos críticos · Manejar focus visible en navegación por teclado · Verificar contraste de colores | lista | sí | 3-4 pasos |
| $criterios_clave | La estructura semántica es navegable por lectores de pantalla · El contraste supera el mínimo AA | lista | sí | calidad verificable |
| $prompt_guia | Auditá la página de login con la extensión axe: corregí landmarks, aria-label faltantes, focus visible y contraste de los botones. | texto | no | "Accesibilidad" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La estructura semántica es navegable por lectores de pantalla
- [ ] El contraste supera el mínimo AA

## Ejemplos de prompts

- "Auditá la página de login con la extensión axe: corregí landmarks, aria-label faltantes, focus visible y contraste de los botones."
- "Aplica Accesibilidad (nivel basico) a mi trabajo actual con SPAs vanilla y Vite: prioriza La estructura semántica es navegable por lectores de pantalla"
- "Revisa mi frontend-spa y dime qué pasos de Accesibilidad me faltan en este nivel"