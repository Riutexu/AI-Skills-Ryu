---
name: typescript-core-interfaces-type-basico
description: Interfaces y type · nivel Básico · TypeScript: tipado profesional. Definís contratos con interfaces y aliases de tipo, sabiendo cuándo usar cada uno. Objetivo del nivel: Definir interfaces y aliases de tipo para objetos
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "interfaces-type"
  nivel: basico
  stack: "TypeScript 5.x, tsc, Vite, Vitest"
---

# Interfaces y type — Básico

## Qué hace este skill

Definís contratos con interfaces y aliases de tipo, sabiendo cuándo usar cada uno. En este nivel se entrega: **Definir interfaces y aliases de tipo para objetos**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **TypeScript: tipado profesional** (TypeScript 5.x, tsc, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Interfaces y type** dentro de TypeScript: tipado profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **TypeScript 5.x, tsc, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear una interfaz con propiedades y opcionales
2. Definir un type alias para objetos y uniones
3. Usar propiedades readonly en interfaces
4. Implementar una interfaz en un objeto literal

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Definir interfaces y aliases de tipo para objetos | texto | sí | resultado medible |
| $stack | TypeScript: tipado profesional | texto | sí | 12-js-ts/typescript-core |
| $tecnologias | TypeScript 5.x, tsc, Vite, Vitest | texto | sí | TypeScript 5.x, tsc, Vite, Vitest |
| $tareas_clave | Crear una interfaz con propiedades y opcionales · Definir un type alias para objetos y uniones · Usar propiedades readonly en interfaces · Implementar una interfaz en un objeto literal | lista | sí | 3-4 pasos |
| $criterios_clave | Los objetos literales cumplen el contrato declarado · Las interfaces tienen nombres descriptivos de dominio | lista | sí | calidad verificable |
| $prompt_guia | Definí una interfaz Usuario y un type alias EstadoPedido, y usalos para tipar los datos que llegan del backend PHP en este módulo. | texto | no | "Interfaces y type" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los objetos literales cumplen el contrato declarado
- [ ] Las interfaces tienen nombres descriptivos de dominio

## Ejemplos de prompts

- "Definí una interfaz Usuario y un type alias EstadoPedido, y usalos para tipar los datos que llegan del backend PHP en este módulo."
- "Aplica Interfaces y type (nivel basico) a mi trabajo actual con TypeScript: tipado profesional: prioriza Los objetos literales cumplen el contrato declarado"
- "Revisa mi typescript-core y dime qué pasos de Interfaces y type me faltan en este nivel"