---
name: typescript-core-interfaces-type-profesional
description: Interfaces y type · nivel Profesional · TypeScript: tipado profesional. Definís contratos con interfaces y aliases de tipo, sabiendo cuándo usar cada uno. Objetivo del nivel: Definir contratos públicos estables entre módulos
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "interfaces-type"
  nivel: profesional
  stack: "TypeScript 5.x, tsc, Vite, Vitest"
---

# Interfaces y type — Profesional

## Qué hace este skill

Definís contratos con interfaces y aliases de tipo, sabiendo cuándo usar cada uno. En este nivel se entrega: **Definir contratos públicos estables entre módulos**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **TypeScript: tipado profesional** (TypeScript 5.x, tsc, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Interfaces y type** dentro de TypeScript: tipado profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **TypeScript 5.x, tsc, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar interfaces de API pública de los módulos
2. Versionar contratos de tipos compartidos
3. Evitar types acoplados a implementación interna
4. Documentar contratos con ejemplos de uso

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Definir contratos públicos estables entre módulos | texto | sí | resultado medible |
| $stack | TypeScript: tipado profesional | texto | sí | 12-js-ts/typescript-core |
| $tecnologias | TypeScript 5.x, tsc, Vite, Vitest | texto | sí | TypeScript 5.x, tsc, Vite, Vitest |
| $tareas_clave | Diseñar interfaces de API pública de los módulos · Versionar contratos de tipos compartidos · Evitar types acoplados a implementación interna · Documentar contratos con ejemplos de uso | lista | sí | 3-4 pasos |
| $criterios_clave | Los módulos dependen solo de contratos públicos · Cambiar la implementación no rompe los contratos | lista | sí | calidad verificable |
| $prompt_guia | Diseñá las interfaces públicas del módulo de pagos que consumirán otros módulos: estables, documentadas y sin exponer la implementación interna. | texto | no | "Interfaces y type" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los módulos dependen solo de contratos públicos
- [ ] Cambiar la implementación no rompe los contratos

## Ejemplos de prompts

- "Diseñá las interfaces públicas del módulo de pagos que consumirán otros módulos: estables, documentadas y sin exponer la implementación interna."
- "Aplica Interfaces y type (nivel profesional) a mi trabajo actual con TypeScript: tipado profesional: prioriza Los módulos dependen solo de contratos públicos"
- "Revisa mi typescript-core y dime qué pasos de Interfaces y type me faltan en este nivel"