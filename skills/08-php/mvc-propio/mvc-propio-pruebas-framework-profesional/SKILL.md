---
name: mvc-propio-pruebas-framework-profesional
description: Testing del framework · nivel Profesional · Framework MVC propio. Probar el framework como librería: tests unitarios del núcleo, acceptance y CI. Objetivo del nivel: calidad de librería
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "pruebas-framework"
  nivel: profesional
  stack: "PHP 8.3, Composer, PDO, PHPUnit, Nginx"
---

# Testing del framework — Profesional

## Qué hace este skill

Probar el framework como librería: tests unitarios del núcleo, acceptance y CI. En este nivel se entrega: **calidad de librería**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Framework MVC propio** (PHP 8.3, Composer, PDO, PHPUnit, Nginx) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Testing del framework** dentro de Framework MVC propio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, PDO, PHPUnit, Nginx**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Establecer CI completo (lint, tipos, tests, coverage)
2. Mutation testing del núcleo del framework
3. Probar la compatibilidad de versiones (PHP matrix)
4. Documentar la estrategia de testing para usuarios del framework

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | calidad de librería | texto | sí | resultado medible |
| $stack | Framework MVC propio | texto | sí | 08-php/mvc-propio |
| $tecnologias | PHP 8.3, Composer, PDO, PHPUnit, Nginx | texto | sí | PHP 8.3, Composer, PDO, PHPUnit, Nginx |
| $tareas_clave | Establecer CI completo (lint, tipos, tests, coverage) · Mutation testing del núcleo del framework · Probar la compatibilidad de versiones (PHP matrix) · Documentar la estrategia de testing para usuarios del framework | lista | sí | 3-4 pasos |
| $criterios_clave | El CI valida tipos, tests y cobertura en cada cambio · La matriz de PHP corre sin regresiones | lista | sí | calidad verificable |
| $prompt_guia | Monta el CI de calidad de mi framework: matriz de PHP, lint, tipo, tests y mutation testing | texto | no | "Testing del framework" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El CI valida tipos, tests y cobertura en cada cambio
- [ ] La matriz de PHP corre sin regresiones

## Ejemplos de prompts

- "Monta el CI de calidad de mi framework: matriz de PHP, lint, tipo, tests y mutation testing"
- "Aplica Testing del framework (nivel profesional) a mi trabajo actual con Framework MVC propio: prioriza El CI valida tipos, tests y cobertura en cada cambio"
- "Revisa mi mvc-propio y dime qué pasos de Testing del framework me faltan en este nivel"