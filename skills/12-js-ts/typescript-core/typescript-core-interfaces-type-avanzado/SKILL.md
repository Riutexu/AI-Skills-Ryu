---
name: typescript-core-interfaces-type-avanzado
description: Interfaces y type · nivel Avanzado · TypeScript: tipado profesional. Definís contratos con interfaces y aliases de tipo, sabiendo cuándo usar cada uno. Objetivo del nivel: Combinar interfaces con herencia y extensión de tipos
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "interfaces-type"
  nivel: avanzado
  stack: "TypeScript 5.x, tsc, Vite, Vitest"
---

# Interfaces y type — Avanzado

## Qué hace este skill

Definís contratos con interfaces y aliases de tipo, sabiendo cuándo usar cada uno. En este nivel se entrega: **Combinar interfaces con herencia y extensión de tipos**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **TypeScript: tipado profesional** (TypeScript 5.x, tsc, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Interfaces y type** dentro de TypeScript: tipado profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **TypeScript 5.x, tsc, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Extender interfaces para especializar entidades
2. Componer types con intersección
3. Usar propiedades index signature con criterio
4. Elegir entre interface y type según el caso

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Combinar interfaces con herencia y extensión de tipos | texto | sí | resultado medible |
| $stack | TypeScript: tipado profesional | texto | sí | 12-js-ts/typescript-core |
| $tecnologias | TypeScript 5.x, tsc, Vite, Vitest | texto | sí | TypeScript 5.x, tsc, Vite, Vitest |
| $tareas_clave | Extender interfaces para especializar entidades · Componer types con intersección · Usar propiedades index signature con criterio · Elegir entre interface y type según el caso | lista | sí | 3-4 pasos |
| $criterios_clave | La herencia refleja la jerarquía real del dominio · No hay index signatures sin validación de valores | lista | sí | calidad verificable |
| $prompt_guia | Modelá la jerarquía de entidades de facturación: extendé la interfaz base Documento para Factura y NotaCredito, y justificá en comentarios por qué elegiste interface o type. | texto | no | "Interfaces y type" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La herencia refleja la jerarquía real del dominio
- [ ] No hay index signatures sin validación de valores

## Ejemplos de prompts

- "Modelá la jerarquía de entidades de facturación: extendé la interfaz base Documento para Factura y NotaCredito, y justificá en comentarios por qué elegiste interface o type."
- "Aplica Interfaces y type (nivel avanzado) a mi trabajo actual con TypeScript: tipado profesional: prioriza La herencia refleja la jerarquía real del dominio"
- "Revisa mi typescript-core y dime qué pasos de Interfaces y type me faltan en este nivel"