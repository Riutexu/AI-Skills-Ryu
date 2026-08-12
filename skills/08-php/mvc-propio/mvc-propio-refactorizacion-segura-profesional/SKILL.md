---
name: mvc-propio-refactorizacion-segura-profesional
description: Refactorización segura · nivel Profesional · Framework MVC propio. Mejorar código sin romper comportamiento: red de tests, malos olores y migración gradual. Objetivo del nivel: refactor como disciplina
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "refactorizacion-segura"
  nivel: profesional
  stack: "PHP 8.3, Composer, PDO, PHPUnit, Nginx"
---

# Refactorización segura — Profesional

## Qué hace este skill

Mejorar código sin romper comportamiento: red de tests, malos olores y migración gradual. En este nivel se entrega: **refactor como disciplina**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Framework MVC propio** (PHP 8.3, Composer, PDO, PHPUnit, Nginx) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Refactorización segura** dentro de Framework MVC propio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, PDO, PHPUnit, Nginx**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir la estrategia de refactor continuo (boy-scout + frontiers)
2. Refactorizar guiado por métricas (complejidad, acoplamiento)
3. Cambiar arquitectura con strangler (incremental)
4. Enseñar y documentar el proceso para el equipo

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | refactor como disciplina | texto | sí | resultado medible |
| $stack | Framework MVC propio | texto | sí | 08-php/mvc-propio |
| $tecnologias | PHP 8.3, Composer, PDO, PHPUnit, Nginx | texto | sí | PHP 8.3, Composer, PDO, PHPUnit, Nginx |
| $tareas_clave | Definir la estrategia de refactor continuo (boy-scout + frontiers) · Refactorizar guiado por métricas (complejidad, acoplamiento) · Cambiar arquitectura con strangler (incremental) · Enseñar y documentar el proceso para el equipo | lista | sí | 3-4 pasos |
| $criterios_clave | Las métricas de complejidad mejoran de forma medible el trimestre · Una migración arquitectónica se completa con strangler sin downtime | lista | sí | calidad verificable |
| $prompt_guia | Lidera la refactorización de mi código guiada por métricas con estrategia strangler y proceso documentado | texto | no | "Refactorización segura" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las métricas de complejidad mejoran de forma medible el trimestre
- [ ] Una migración arquitectónica se completa con strangler sin downtime

## Ejemplos de prompts

- "Lidera la refactorización de mi código guiada por métricas con estrategia strangler y proceso documentado"
- "Aplica Refactorización segura (nivel profesional) a mi trabajo actual con Framework MVC propio: prioriza Las métricas de complejidad mejoran de forma medible el trimestre"
- "Revisa mi mvc-propio y dime qué pasos de Refactorización segura me faltan en este nivel"