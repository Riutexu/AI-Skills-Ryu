---
name: mvc-propio-repositorios-dao-profesional
description: Repositorios y DAOs · nivel Profesional · Framework MVC propio. Separar la persistencia del dominio: repositorios con contratos, mapeo y testeo sin BD. Objetivo del nivel: arquitectura de datos robusta
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "repositorios-dao"
  nivel: profesional
  stack: "PHP 8.3, Composer, PDO, PHPUnit, Nginx"
---

# Repositorios y DAOs — Profesional

## Qué hace este skill

Separar la persistencia del dominio: repositorios con contratos, mapeo y testeo sin BD. En este nivel se entrega: **arquitectura de datos robusta**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Framework MVC propio** (PHP 8.3, Composer, PDO, PHPUnit, Nginx) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Repositorios y DAOs** dentro de Framework MVC propio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, PDO, PHPUnit, Nginx**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar la frontera dominio-persistencia con mapeadores explícitos
2. Implementar optimizaciones (bulk inserts, batching) sin violar el contrato
3. Transacciones a través de varios repositorios (unit of work)
4. Benchmark los accesos y documentar índices

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | arquitectura de datos robusta | texto | sí | resultado medible |
| $stack | Framework MVC propio | texto | sí | 08-php/mvc-propio |
| $tecnologias | PHP 8.3, Composer, PDO, PHPUnit, Nginx | texto | sí | PHP 8.3, Composer, PDO, PHPUnit, Nginx |
| $tareas_clave | Diseñar la frontera dominio-persistencia con mapeadores explícitos · Implementar optimizaciones (bulk inserts, batching) sin violar el contrato · Transacciones a través de varios repositorios (unit of work) · Benchmark los accesos y documentar índices | lista | sí | 3-4 pasos |
| $criterios_clave | El unit of work agrupa transacciones multi-repositorio · Las operaciones masivas cumplen presupuestos de tiempo | lista | sí | calidad verificable |
| $prompt_guia | Diseña la frontera dominio-persistencia con unit of work, bulk operations y documentación de índices | texto | no | "Repositorios y DAOs" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El unit of work agrupa transacciones multi-repositorio
- [ ] Las operaciones masivas cumplen presupuestos de tiempo

## Ejemplos de prompts

- "Diseña la frontera dominio-persistencia con unit of work, bulk operations y documentación de índices"
- "Aplica Repositorios y DAOs (nivel profesional) a mi trabajo actual con Framework MVC propio: prioriza El unit of work agrupa transacciones multi-repositorio"
- "Revisa mi mvc-propio y dime qué pasos de Repositorios y DAOs me faltan en este nivel"