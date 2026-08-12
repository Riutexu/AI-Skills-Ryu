---
name: testing-js-fixtures-helpers-basico
description: Fixtures y helpers · nivel Básico · Testing JS/TS. Creás datos de prueba realistas y helpers que hacen los tests legibles y fáciles de mantener. Objetivo del nivel: Crear fixtures y datos de prueba básicos
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "fixtures-helpers"
  nivel: basico
  stack: "Vitest, Playwright, jsdom, CI"
---

# Fixtures y helpers — Básico

## Qué hace este skill

Creás datos de prueba realistas y helpers que hacen los tests legibles y fáciles de mantener. En este nivel se entrega: **Crear fixtures y datos de prueba básicos**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Testing JS/TS** (Vitest, Playwright, jsdom, CI) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Fixtures y helpers** dentro de Testing JS/TS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vitest, Playwright, jsdom, CI**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear fixtures de datos del dominio (usuarios, pedidos)
2. Usar factories simples para generar objetos
3. Definir datos de borde en los fixtures
4. Reutilizar fixtures entre tests

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Crear fixtures y datos de prueba básicos | texto | sí | resultado medible |
| $stack | Testing JS/TS | texto | sí | 12-js-ts/testing-js |
| $tecnologias | Vitest, Playwright, jsdom, CI | texto | sí | Vitest, Playwright, jsdom, CI |
| $tareas_clave | Crear fixtures de datos del dominio (usuarios, pedidos) · Usar factories simples para generar objetos · Definir datos de borde en los fixtures · Reutilizar fixtures entre tests | lista | sí | 3-4 pasos |
| $criterios_clave | Los fixtures reflejan el shape real de la API · Los datos de borde están incluidos | lista | sí | calidad verificable |
| $prompt_guia | Creá los fixtures de usuarios y pedidos con el shape real de la API, incluyendo casos de borde, y usalos en los tests de servicios. | texto | no | "Fixtures y helpers" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los fixtures reflejan el shape real de la API
- [ ] Los datos de borde están incluidos

## Ejemplos de prompts

- "Creá los fixtures de usuarios y pedidos con el shape real de la API, incluyendo casos de borde, y usalos en los tests de servicios."
- "Aplica Fixtures y helpers (nivel basico) a mi trabajo actual con Testing JS/TS: prioriza Los fixtures reflejan el shape real de la API"
- "Revisa mi testing-js y dime qué pasos de Fixtures y helpers me faltan en este nivel"