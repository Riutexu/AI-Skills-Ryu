---
name: javascript-moderno-esm-modulos-basico
description: ESM y módulos · nivel Básico · JavaScript moderno: ES2024. Organizás el código en módulos ES con imports/exports explícitos y resolución de dependencias clara. Objetivo del nivel: Exportar e importar funciones y valores entre módulos ESM
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "esm-modulos"
  nivel: basico
  stack: "Node 22, ESM, Vite, Vitest"
---

# ESM y módulos — Básico

## Qué hace este skill

Organizás el código en módulos ES con imports/exports explícitos y resolución de dependencias clara. En este nivel se entrega: **Exportar e importar funciones y valores entre módulos ESM**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **JavaScript moderno: ES2024** (Node 22, ESM, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **ESM y módulos** dentro de JavaScript moderno: ES2024.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, ESM, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear un módulo con exports nombrados y por defecto
2. Importar ambos tipos de export en otro archivo
3. Usar import dinámico para cargar un módulo bajo demanda
4. Resolver rutas relativas y alias de importación

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Exportar e importar funciones y valores entre módulos ESM | texto | sí | resultado medible |
| $stack | JavaScript moderno: ES2024 | texto | sí | 12-js-ts/javascript-moderno |
| $tecnologias | Node 22, ESM, Vite, Vitest | texto | sí | Node 22, ESM, Vite, Vitest |
| $tareas_clave | Crear un módulo con exports nombrados y por defecto · Importar ambos tipos de export en otro archivo · Usar import dinámico para cargar un módulo bajo demanda · Resolver rutas relativas y alias de importación | lista | sí | 3-4 pasos |
| $criterios_clave | Todas las importaciones usan rutas correctas · El proyecto corre con package.json type module | lista | sí | calidad verificable |
| $prompt_guia | Creá un módulo utils.mjs con una función sumar y un export default con configuración; importalo en index.mjs y usalo en un script de Node 22. | texto | no | "ESM y módulos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Todas las importaciones usan rutas correctas
- [ ] El proyecto corre con package.json type module

## Ejemplos de prompts

- "Creá un módulo utils.mjs con una función sumar y un export default con configuración; importalo en index.mjs y usalo en un script de Node 22."
- "Aplica ESM y módulos (nivel basico) a mi trabajo actual con JavaScript moderno: ES2024: prioriza Todas las importaciones usan rutas correctas"
- "Revisa mi javascript-moderno y dime qué pasos de ESM y módulos me faltan en este nivel"