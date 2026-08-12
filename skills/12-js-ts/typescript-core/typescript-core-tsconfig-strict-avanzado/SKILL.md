---
name: typescript-core-tsconfig-strict-avanzado
description: tsconfig y strict · nivel Avanzado · TypeScript: tipado profesional. Configurás el compilador con strict mode y opciones que endurecen el tipado. Objetivo del nivel: Ajustar opciones de check estricto para un codebase real
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "tsconfig-strict"
  nivel: avanzado
  stack: "TypeScript 5.x, tsc, Vite, Vitest"
---

# tsconfig y strict — Avanzado

## Qué hace este skill

Configurás el compilador con strict mode y opciones que endurecen el tipado. En este nivel se entrega: **Ajustar opciones de check estricto para un codebase real**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **TypeScript: tipado profesional** (TypeScript 5.x, tsc, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **tsconfig y strict** dentro de TypeScript: tipado profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **TypeScript 5.x, tsc, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Configurar noUncheckedIndexedAccess y ajustar el código
2. Habilitar exactOptionalPropertyTypes y corregir optionales
3. Configurar paths y baseUrl para alias
4. Decidir qué flags de strict valen la pena y cuáles no

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Ajustar opciones de check estricto para un codebase real | texto | sí | resultado medible |
| $stack | TypeScript: tipado profesional | texto | sí | 12-js-ts/typescript-core |
| $tecnologias | TypeScript 5.x, tsc, Vite, Vitest | texto | sí | TypeScript 5.x, tsc, Vite, Vitest |
| $tareas_clave | Configurar noUncheckedIndexedAccess y ajustar el código · Habilitar exactOptionalPropertyTypes y corregir optionales · Configurar paths y baseUrl para alias · Decidir qué flags de strict valen la pena y cuáles no | lista | sí | 3-4 pasos |
| $criterios_clave | El acceso a índices queda cubierto ante undefined · El proyecto compila en modo producción sin errores | lista | sí | calidad verificable |
| $prompt_guia | Habilitá noUncheckedIndexedAccess y exactOptionalPropertyTypes en el tsconfig y refactorizá el código que rompa, manteniendo el comportamiento en runtime. | texto | no | "tsconfig y strict" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El acceso a índices queda cubierto ante undefined
- [ ] El proyecto compila en modo producción sin errores

## Ejemplos de prompts

- "Habilitá noUncheckedIndexedAccess y exactOptionalPropertyTypes en el tsconfig y refactorizá el código que rompa, manteniendo el comportamiento en runtime."
- "Aplica tsconfig y strict (nivel avanzado) a mi trabajo actual con TypeScript: tipado profesional: prioriza El acceso a índices queda cubierto ante undefined"
- "Revisa mi typescript-core y dime qué pasos de tsconfig y strict me faltan en este nivel"