---
name: mvc-propio-patrones-diseno-php-basico
description: Patrones de diseño útiles · nivel Básico · Framework MVC propio. Los patrones que de verdad se usan en PHP: Factory, Repository, Strategy, Observer y más. Objetivo del nivel: entender y usar patrones simples
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "patrones-diseno-php"
  nivel: basico
  stack: "PHP 8.3, Composer, PDO, PHPUnit, Nginx"
---

# Patrones de diseño útiles — Básico

## Qué hace este skill

Los patrones que de verdad se usan en PHP: Factory, Repository, Strategy, Observer y más. En este nivel se entrega: **entender y usar patrones simples**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Framework MVC propio** (PHP 8.3, Composer, PDO, PHPUnit, Nginx) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Patrones de diseño útiles** dentro de Framework MVC propio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, PDO, PHPUnit, Nginx**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Explicar con ejemplos: Factory, Repository, Strategy
2. Aplicar Factory y Repository en un módulo pequeño
3. Refactorizar switch/case grande con Strategy

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | entender y usar patrones simples | texto | sí | resultado medible |
| $stack | Framework MVC propio | texto | sí | 08-php/mvc-propio |
| $tecnologias | PHP 8.3, Composer, PDO, PHPUnit, Nginx | texto | sí | PHP 8.3, Composer, PDO, PHPUnit, Nginx |
| $tareas_clave | Explicar con ejemplos: Factory, Repository, Strategy · Aplicar Factory y Repository en un módulo pequeño · Refactorizar switch/case grande con Strategy | lista | sí | 3-4 pasos |
| $criterios_clave | El módulo usa los patrones sin sobre-ingeniería · Los patrones se explican al usuario sin jerga | lista | sí | calidad verificable |
| $prompt_guia | Aplica Factory/Repository/Strategy a mi módulo de pagos sin sobre-ingeniería y explícamelo | texto | no | "Patrones de diseño útiles" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El módulo usa los patrones sin sobre-ingeniería
- [ ] Los patrones se explican al usuario sin jerga

## Ejemplos de prompts

- "Aplica Factory/Repository/Strategy a mi módulo de pagos sin sobre-ingeniería y explícamelo"
- "Aplica Patrones de diseño útiles (nivel basico) a mi trabajo actual con Framework MVC propio: prioriza El módulo usa los patrones sin sobre-ingeniería"
- "Revisa mi mvc-propio y dime qué pasos de Patrones de diseño útiles me faltan en este nivel"