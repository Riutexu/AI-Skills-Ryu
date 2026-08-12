---
name: php8-core-tipado-strict-types-profesional
description: Tipado fuerte y strict_types · nivel Profesional · PHP 8.3: fundamentos profesionales. Declarar tipos en parámetros, retornos y propiedades para eliminar bugs silenciosos y ganar autocompletado y refactor seguro. Objetivo del nivel: diseñar contratos de tipo a nivel de librería y API
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "tipado-strict-types"
  nivel: profesional
  stack: "PHP 8.3, Composer, php.ini, WAMP, MariaDB"
---

# Tipado fuerte y strict_types — Profesional

## Qué hace este skill

Declarar tipos en parámetros, retornos y propiedades para eliminar bugs silenciosos y ganar autocompletado y refactor seguro. En este nivel se entrega: **diseñar contratos de tipo a nivel de librería y API**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **PHP 8.3: fundamentos profesionales** (PHP 8.3, Composer, php.ini, WAMP, MariaDB) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Tipado fuerte y strict_types** dentro de PHP 8.3: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, php.ini, WAMP, MariaDB**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir tipos como contrato público de una librería propia
2. Explotar covariance/contravariance y tipos estáticos (static, self) correctamente
3. Integrar análisis estático (PHPStan/PHP Psalm nivel max) en CI
4. Documentar decisiones de tipo en ADR cuando el diseño lo exige

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | diseñar contratos de tipo a nivel de librería y API | texto | sí | resultado medible |
| $stack | PHP 8.3: fundamentos profesionales | texto | sí | 08-php/php8-core |
| $tecnologias | PHP 8.3, Composer, php.ini, WAMP, MariaDB | texto | sí | PHP 8.3, Composer, php.ini, WAMP, MariaDB |
| $tareas_clave | Definir tipos como contrato público de una librería propia · Explotar covariance/contravariance y tipos estáticos (static, self) correctamente · Integrar análisis estático (PHPStan/PHP Psalm nivel max) en CI · Documentar decisiones de tipo en ADR cuando el diseño lo exige | lista | sí | 3-4 pasos |
| $criterios_clave | La librería pasa análisis estático nivel máximo en CI sin supresores · Los tipos no filtran implementaciones (API estable v1 publicada) | lista | sí | calidad verificable |
| $prompt_guia | Diseña los tipos públicos de mi librería PHP como contrato estable, con PHPStan nivel max en CI y un ADR de las decisiones | texto | no | "Tipado fuerte y strict_types" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La librería pasa análisis estático nivel máximo en CI sin supresores
- [ ] Los tipos no filtran implementaciones (API estable v1 publicada)

## Ejemplos de prompts

- "Diseña los tipos públicos de mi librería PHP como contrato estable, con PHPStan nivel max en CI y un ADR de las decisiones"
- "Aplica Tipado fuerte y strict_types (nivel profesional) a mi trabajo actual con PHP 8.3: fundamentos profesionales: prioriza La librería pasa análisis estático nivel máximo en CI sin supresores"
- "Revisa mi php8-core y dime qué pasos de Tipado fuerte y strict_types me faltan en este nivel"