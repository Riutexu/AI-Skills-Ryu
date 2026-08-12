---
name: js-seguridad-xss-sanitizacion-profesional
description: XSS y sanitización · nivel Profesional · Seguridad web JS. Prevenís XSS con escapes, sanitización y reglas estrictas de inserción al DOM. Objetivo del nivel: Diseñar la estrategia de sanitización del proyecto
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "xss-sanitizacion"
  nivel: profesional
  stack: "CSP, fetch, storage seguro, npm audit"
---

# XSS y sanitización — Profesional

## Qué hace este skill

Prevenís XSS con escapes, sanitización y reglas estrictas de inserción al DOM. En este nivel se entrega: **Diseñar la estrategia de sanitización del proyecto**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Seguridad web JS** (CSP, fetch, storage seguro, npm audit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **XSS y sanitización** dentro de Seguridad web JS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **CSP, fetch, storage seguro, npm audit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir la política de contenido del usuario
2. Crear helpers centralizados de escape y sanitización
3. Verificar la sanitización con tests automatizados
4. Documentar los vectores de XSS cubiertos

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar la estrategia de sanitización del proyecto | texto | sí | resultado medible |
| $stack | Seguridad web JS | texto | sí | 12-js-ts/js-seguridad |
| $tecnologias | CSP, fetch, storage seguro, npm audit | texto | sí | CSP, fetch, storage seguro, npm audit |
| $tareas_clave | Definir la política de contenido del usuario · Crear helpers centralizados de escape y sanitización · Verificar la sanitización con tests automatizados · Documentar los vectores de XSS cubiertos | lista | sí | 3-4 pasos |
| $criterios_clave | Toda inserción de datos pasa por los helpers centrales · La política cubre texto, HTML, URLs y atributos | lista | sí | calidad verificable |
| $prompt_guia | Diseñá la estrategia anti-XSS del proyecto: helpers centralizados, política de contenido por campo, tests de penetración básicos y la documentación de vectores cubiertos. | texto | no | "XSS y sanitización" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Toda inserción de datos pasa por los helpers centrales
- [ ] La política cubre texto, HTML, URLs y atributos

## Ejemplos de prompts

- "Diseñá la estrategia anti-XSS del proyecto: helpers centralizados, política de contenido por campo, tests de penetración básicos y la documentación de vectores cubiertos."
- "Aplica XSS y sanitización (nivel profesional) a mi trabajo actual con Seguridad web JS: prioriza Toda inserción de datos pasa por los helpers centrales"
- "Revisa mi js-seguridad y dime qué pasos de XSS y sanitización me faltan en este nivel"