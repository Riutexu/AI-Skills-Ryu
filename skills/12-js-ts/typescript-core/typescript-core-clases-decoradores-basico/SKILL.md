---
name: typescript-core-clases-decoradores-basico
description: Clases y decoradores · nivel Básico · TypeScript: tipado profesional. Modelás con clases tipadas, encapsulamiento y decoradores modernos donde aportan valor. Objetivo del nivel: Definir clases tipadas con encapsulamiento básico
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "clases-decoradores"
  nivel: basico
  stack: "TypeScript 5.x, tsc, Vite, Vitest"
---

# Clases y decoradores — Básico

## Qué hace este skill

Modelás con clases tipadas, encapsulamiento y decoradores modernos donde aportan valor. En este nivel se entrega: **Definir clases tipadas con encapsulamiento básico**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **TypeScript: tipado profesional** (TypeScript 5.x, tsc, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Clases y decoradores** dentro de TypeScript: tipado profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **TypeScript 5.x, tsc, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Declarar clases con propiedades tipadas y constructor
2. Usar private y readonly en propiedades
3. Implementar métodos tipados con acceso
4. Crear subclases con herencia tipada

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Definir clases tipadas con encapsulamiento básico | texto | sí | resultado medible |
| $stack | TypeScript: tipado profesional | texto | sí | 12-js-ts/typescript-core |
| $tecnologias | TypeScript 5.x, tsc, Vite, Vitest | texto | sí | TypeScript 5.x, tsc, Vite, Vitest |
| $tareas_clave | Declarar clases con propiedades tipadas y constructor · Usar private y readonly en propiedades · Implementar métodos tipados con acceso · Crear subclases con herencia tipada | lista | sí | 3-4 pasos |
| $criterios_clave | Las propiedades privadas no se acceden desde fuera · Los tipos de las propiedades cubren todos los estados | lista | sí | calidad verificable |
| $prompt_guia | Modelá la clase Usuario de la SPA con propiedades tipadas, privadas donde haga falta y métodos de acceso; que el compilador no deje pasar accesos indebidos. | texto | no | "Clases y decoradores" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las propiedades privadas no se acceden desde fuera
- [ ] Los tipos de las propiedades cubren todos los estados

## Ejemplos de prompts

- "Modelá la clase Usuario de la SPA con propiedades tipadas, privadas donde haga falta y métodos de acceso; que el compilador no deje pasar accesos indebidos."
- "Aplica Clases y decoradores (nivel basico) a mi trabajo actual con TypeScript: tipado profesional: prioriza Las propiedades privadas no se acceden desde fuera"
- "Revisa mi typescript-core y dime qué pasos de Clases y decoradores me faltan en este nivel"