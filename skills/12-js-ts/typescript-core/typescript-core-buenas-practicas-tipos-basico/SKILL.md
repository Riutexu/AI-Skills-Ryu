---
name: typescript-core-buenas-practicas-tipos-basico
description: Buenas prácticas de tipos · nivel Básico · TypeScript: tipado profesional. Escribís tipos que comunican, evitan any y mantienen el tipado honesto en todo el proyecto. Objetivo del nivel: Evitar any y escribir tipos que comunican
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "buenas-practicas-tipos"
  nivel: basico
  stack: "TypeScript 5.x, tsc, Vite, Vitest"
---

# Buenas prácticas de tipos — Básico

## Qué hace este skill

Escribís tipos que comunican, evitan any y mantienen el tipado honesto en todo el proyecto. En este nivel se entrega: **Evitar any y escribir tipos que comunican**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **TypeScript: tipado profesional** (TypeScript 5.x, tsc, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Buenas prácticas de tipos** dentro de TypeScript: tipado profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **TypeScript 5.x, tsc, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Reemplazar any por unknown donde no se conoce
2. Eliminar casts innecesarios
3. Nombrar tipos con la terminología del dominio
4. Usar as const para literales

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Evitar any y escribir tipos que comunican | texto | sí | resultado medible |
| $stack | TypeScript: tipado profesional | texto | sí | 12-js-ts/typescript-core |
| $tecnologias | TypeScript 5.x, tsc, Vite, Vitest | texto | sí | TypeScript 5.x, tsc, Vite, Vitest |
| $tareas_clave | Reemplazar any por unknown donde no se conoce · Eliminar casts innecesarios · Nombrar tipos con la terminología del dominio · Usar as const para literales | lista | sí | 3-4 pasos |
| $criterios_clave | No hay any nuevos en los commits · Los nombres de tipos se entienden sin contexto extra | lista | sí | calidad verificable |
| $prompt_guia | Auditá este módulo: reemplazá los any por unknown con narrowing, sacá los casts de más y renombrá los tipos a lenguaje de negocio. | texto | no | "Buenas prácticas de tipos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] No hay any nuevos en los commits
- [ ] Los nombres de tipos se entienden sin contexto extra

## Ejemplos de prompts

- "Auditá este módulo: reemplazá los any por unknown con narrowing, sacá los casts de más y renombrá los tipos a lenguaje de negocio."
- "Aplica Buenas prácticas de tipos (nivel basico) a mi trabajo actual con TypeScript: tipado profesional: prioriza No hay any nuevos en los commits"
- "Revisa mi typescript-core y dime qué pasos de Buenas prácticas de tipos me faltan en este nivel"