---
name: typescript-core-integracion-js-existente-basico
description: Integración con JS existente · nivel Básico · TypeScript: tipado profesional. Convivís con código JS legacy y librerías sin tipos sin perder la seguridad del tipado. Objetivo del nivel: Integrar archivos JS en un proyecto TS con check graduado
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "integracion-js-existente"
  nivel: basico
  stack: "TypeScript 5.x, tsc, Vite, Vitest"
---

# Integración con JS existente — Básico

## Qué hace este skill

Convivís con código JS legacy y librerías sin tipos sin perder la seguridad del tipado. En este nivel se entrega: **Integrar archivos JS en un proyecto TS con check graduado**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **TypeScript: tipado profesional** (TypeScript 5.x, tsc, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Integración con JS existente** dentro de TypeScript: tipado profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **TypeScript 5.x, tsc, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Configurar allowJs y checkJs para el proyecto
2. Importar módulos JS desde TS y tiparlos al usar
3. Crear un .d.ts simple para una librería sin tipos
4. Decidir el modo de compilación del JS existente

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Integrar archivos JS en un proyecto TS con check graduado | texto | sí | resultado medible |
| $stack | TypeScript: tipado profesional | texto | sí | 12-js-ts/typescript-core |
| $tecnologias | TypeScript 5.x, tsc, Vite, Vitest | texto | sí | TypeScript 5.x, tsc, Vite, Vitest |
| $tareas_clave | Configurar allowJs y checkJs para el proyecto · Importar módulos JS desde TS y tiparlos al usar · Crear un .d.ts simple para una librería sin tipos · Decidir el modo de compilación del JS existente | lista | sí | 3-4 pasos |
| $criterios_clave | La integración compila sin romper el build · Los módulos JS quedan documentados con tipos mínimos | lista | sí | calidad verificable |
| $prompt_guia | Agregá módulos JS existentes al proyecto TS con allowJs, y creá un .d.ts manual para la librería de gráficos que no trae tipos. | texto | no | "Integración con JS existente" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La integración compila sin romper el build
- [ ] Los módulos JS quedan documentados con tipos mínimos

## Ejemplos de prompts

- "Agregá módulos JS existentes al proyecto TS con allowJs, y creá un .d.ts manual para la librería de gráficos que no trae tipos."
- "Aplica Integración con JS existente (nivel basico) a mi trabajo actual con TypeScript: tipado profesional: prioriza La integración compila sin romper el build"
- "Revisa mi typescript-core y dime qué pasos de Integración con JS existente me faltan en este nivel"