---
name: typescript-core-utility-types-basico
description: Utility types · nivel Básico · TypeScript: tipado profesional. Transformás tipos con Partial, Pick, Omit, Record y los helpers de inferencia. Objetivo del nivel: Aplicar utility types comunes a contratos existentes
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "utility-types"
  nivel: basico
  stack: "TypeScript 5.x, tsc, Vite, Vitest"
---

# Utility types — Básico

## Qué hace este skill

Transformás tipos con Partial, Pick, Omit, Record y los helpers de inferencia. En este nivel se entrega: **Aplicar utility types comunes a contratos existentes**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **TypeScript: tipado profesional** (TypeScript 5.x, tsc, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Utility types** dentro de TypeScript: tipado profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **TypeScript 5.x, tsc, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear versiones parciales con Partial
2. Seleccionar subconjuntos con Pick
3. Excluir propiedades con Omit
4. Definir diccionarios con Record

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Aplicar utility types comunes a contratos existentes | texto | sí | resultado medible |
| $stack | TypeScript: tipado profesional | texto | sí | 12-js-ts/typescript-core |
| $tecnologias | TypeScript 5.x, tsc, Vite, Vitest | texto | sí | TypeScript 5.x, tsc, Vite, Vitest |
| $tareas_clave | Crear versiones parciales con Partial · Seleccionar subconjuntos con Pick · Excluir propiedades con Omit · Definir diccionarios con Record | lista | sí | 3-4 pasos |
| $criterios_clave | Los utility types derivan de tipos existentes sin duplicar · Los campos omitidos no aparecen en el resultado | lista | sí | calidad verificable |
| $prompt_guia | Derivá de la interfaz Usuario: un UsuarioForm con Pick (campos editables), un payload de actualización con Partial y un mapa de estados con Record. | texto | no | "Utility types" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los utility types derivan de tipos existentes sin duplicar
- [ ] Los campos omitidos no aparecen en el resultado

## Ejemplos de prompts

- "Derivá de la interfaz Usuario: un UsuarioForm con Pick (campos editables), un payload de actualización con Partial y un mapa de estados con Record."
- "Aplica Utility types (nivel basico) a mi trabajo actual con TypeScript: tipado profesional: prioriza Los utility types derivan de tipos existentes sin duplicar"
- "Revisa mi typescript-core y dime qué pasos de Utility types me faltan en este nivel"