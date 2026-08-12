---
name: typescript-core-clases-decoradores-avanzado
description: Clases y decoradores · nivel Avanzado · TypeScript: tipado profesional. Modelás con clases tipadas, encapsulamiento y decoradores modernos donde aportan valor. Objetivo del nivel: Aplicar getters, setters, parámetros de propiedad y composición
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "clases-decoradores"
  nivel: avanzado
  stack: "TypeScript 5.x, tsc, Vite, Vitest"
---

# Clases y decoradores — Avanzado

## Qué hace este skill

Modelás con clases tipadas, encapsulamiento y decoradores modernos donde aportan valor. En este nivel se entrega: **Aplicar getters, setters, parámetros de propiedad y composición**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **TypeScript: tipado profesional** (TypeScript 5.x, tsc, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Clases y decoradores** dentro de TypeScript: tipado profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **TypeScript 5.x, tsc, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar parameter properties en el constructor
2. Implementar getters y setters con validación
3. Componer clases con inyección tipada de dependencias
4. Usar abstract classes para contratos base

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Aplicar getters, setters, parámetros de propiedad y composición | texto | sí | resultado medible |
| $stack | TypeScript: tipado profesional | texto | sí | 12-js-ts/typescript-core |
| $tecnologias | TypeScript 5.x, tsc, Vite, Vitest | texto | sí | TypeScript 5.x, tsc, Vite, Vitest |
| $tareas_clave | Usar parameter properties en el constructor · Implementar getters y setters con validación · Componer clases con inyección tipada de dependencias · Usar abstract classes para contratos base | lista | sí | 3-4 pasos |
| $criterios_clave | Los setters validan antes de asignar · Las clases abstractas obligan a implementar el contrato | lista | sí | calidad verificable |
| $prompt_guia | Refactorizá esta clase de repositorio a una clase abstracta con inyección de dependencias tipada y parameter properties, manteniendo la API de uso. | texto | no | "Clases y decoradores" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los setters validan antes de asignar
- [ ] Las clases abstractas obligan a implementar el contrato

## Ejemplos de prompts

- "Refactorizá esta clase de repositorio a una clase abstracta con inyección de dependencias tipada y parameter properties, manteniendo la API de uso."
- "Aplica Clases y decoradores (nivel avanzado) a mi trabajo actual con TypeScript: tipado profesional: prioriza Los setters validan antes de asignar"
- "Revisa mi typescript-core y dime qué pasos de Clases y decoradores me faltan en este nivel"