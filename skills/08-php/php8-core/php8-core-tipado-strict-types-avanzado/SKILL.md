---
name: php8-core-tipado-strict-types-avanzado
description: Tipado fuerte y strict_types · nivel Avanzado · PHP 8.3: fundamentos profesionales. Declarar tipos en parámetros, retornos y propiedades para eliminar bugs silenciosos y ganar autocompletado y refactor seguro. Objetivo del nivel: aplicar tipos avanzados (unión, nullable, never, readonly, enum)
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "tipado-strict-types"
  nivel: avanzado
  stack: "PHP 8.3, Composer, php.ini, WAMP, MariaDB"
---

# Tipado fuerte y strict_types — Avanzado

## Qué hace este skill

Declarar tipos en parámetros, retornos y propiedades para eliminar bugs silenciosos y ganar autocompletado y refactor seguro. En este nivel se entrega: **aplicar tipos avanzados (unión, nullable, never, readonly, enum)**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **PHP 8.3: fundamentos profesionales** (PHP 8.3, Composer, php.ini, WAMP, MariaDB) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Tipado fuerte y strict_types** dentro de PHP 8.3: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, php.ini, WAMP, MariaDB**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Sustituir docblocks ambiguos por tipos de unión (int|string) y nullable correctos
2. Introducir enums tipados para estados de dominio (Pago, Orden, Rol)
3. Aplicar readonly properties para DTOs inmutables y enums backed
4. Usar tipos never/void/mixed con criterio real de cuándo aplica cada uno

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | aplicar tipos avanzados (unión, nullable, never, readonly, enum) | texto | sí | resultado medible |
| $stack | PHP 8.3: fundamentos profesionales | texto | sí | 08-php/php8-core |
| $tecnologias | PHP 8.3, Composer, php.ini, WAMP, MariaDB | texto | sí | PHP 8.3, Composer, php.ini, WAMP, MariaDB |
| $tareas_clave | Sustituir docblocks ambiguos por tipos de unión (int|string) y nullable correctos · Introducir enums tipados para estados de dominio (Pago, Orden, Rol) · Aplicar readonly properties para DTOs inmutables y enums backed · Usar tipos never/void/mixed con criterio real de cuándo aplica cada uno | lista | sí | 3-4 pasos |
| $criterios_clave | El proyecto compila sin errores de tipo con PHPStan nivel 6 · Los estados del dominio son enums tipados, no cadenas mágicas | lista | sí | calidad verificable |
| $prompt_guia | Audita mi modelo de datos y sustituye cadenas mágicas por enums tipados y DTOs readonly de PHP 8.3 | texto | no | "Tipado fuerte y strict_types" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El proyecto compila sin errores de tipo con PHPStan nivel 6
- [ ] Los estados del dominio son enums tipados, no cadenas mágicas

## Ejemplos de prompts

- "Audita mi modelo de datos y sustituye cadenas mágicas por enums tipados y DTOs readonly de PHP 8.3"
- "Aplica Tipado fuerte y strict_types (nivel avanzado) a mi trabajo actual con PHP 8.3: fundamentos profesionales: prioriza El proyecto compila sin errores de tipo con PHPStan nivel 6"
- "Revisa mi php8-core y dime qué pasos de Tipado fuerte y strict_types me faltan en este nivel"