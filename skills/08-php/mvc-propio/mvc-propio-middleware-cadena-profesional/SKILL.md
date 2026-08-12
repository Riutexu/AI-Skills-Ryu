---
name: mvc-propio-middleware-cadena-profesional
description: Middleware y pipelines · nivel Profesional · Framework MVC propio. Petición procesada por capas: autenticación, logging, CSRF y más como piezas intercambiables. Objetivo del nivel: middleware como arquitectura
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "middleware-cadena"
  nivel: profesional
  stack: "PHP 8.3, Composer, PDO, PHPUnit, Nginx"
---

# Middleware y pipelines — Profesional

## Qué hace este skill

Petición procesada por capas: autenticación, logging, CSRF y más como piezas intercambiables. En este nivel se entrega: **middleware como arquitectura**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Framework MVC propio** (PHP 8.3, Composer, PDO, PHPUnit, Nginx) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Middleware y pipelines** dentro de Framework MVC propio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, PDO, PHPUnit, Nginx**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir el contrato formal de middleware (psr-15 compatible)
2. Componer capas de seguridad, observabilidad y negocio sin acoplar
3. Testar cada middleware aislado y la composición completa
4. Documentar el orden y el coste de cada capa

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | middleware como arquitectura | texto | sí | resultado medible |
| $stack | Framework MVC propio | texto | sí | 08-php/mvc-propio |
| $tecnologias | PHP 8.3, Composer, PDO, PHPUnit, Nginx | texto | sí | PHP 8.3, Composer, PDO, PHPUnit, Nginx |
| $tareas_clave | Definir el contrato formal de middleware (psr-15 compatible) · Componer capas de seguridad, observabilidad y negocio sin acoplar · Testar cada middleware aislado y la composición completa · Documentar el orden y el coste de cada capa | lista | sí | 3-4 pasos |
| $criterios_clave | La composición de 5+ capas no degrada el testeo común · El orden de capas está documentado y justificado | lista | sí | calidad verificable |
| $prompt_guia | Formaliza mi pipeline de middlewares como arquitectura PSR-15 con capas testadas y orden documentado | texto | no | "Middleware y pipelines" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La composición de 5+ capas no degrada el testeo común
- [ ] El orden de capas está documentado y justificado

## Ejemplos de prompts

- "Formaliza mi pipeline de middlewares como arquitectura PSR-15 con capas testadas y orden documentado"
- "Aplica Middleware y pipelines (nivel profesional) a mi trabajo actual con Framework MVC propio: prioriza La composición de 5+ capas no degrada el testeo común"
- "Revisa mi mvc-propio y dime qué pasos de Middleware y pipelines me faltan en este nivel"