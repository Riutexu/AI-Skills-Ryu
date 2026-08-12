---
name: php8-core-tipado-strict-types-basico
description: Tipado fuerte y strict_types · nivel Básico · PHP 8.3: fundamentos profesionales. Declarar tipos en parámetros, retornos y propiedades para eliminar bugs silenciosos y ganar autocompletado y refactor seguro. Objetivo del nivel: declarar tipos simples en funciones y variables
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "tipado-strict-types"
  nivel: basico
  stack: "PHP 8.3, Composer, php.ini, WAMP, MariaDB"
---

# Tipado fuerte y strict_types — Básico

## Qué hace este skill

Declarar tipos en parámetros, retornos y propiedades para eliminar bugs silenciosos y ganar autocompletado y refactor seguro. En este nivel se entrega: **declarar tipos simples en funciones y variables**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **PHP 8.3: fundamentos profesionales** (PHP 8.3, Composer, php.ini, WAMP, MariaDB) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Tipado fuerte y strict_types** dentro de PHP 8.3: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, php.ini, WAMP, MariaDB**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Explicar la diferencia entre PHP 5 (sin tipos), PHP 7 (tipos en funciones) y PHP 8 (tipos en propiedades)
2. Añadir declaración de tipos a un CRUD pequeño existente
3. Habilitar declare(strict_types=1) y explicar qué cambia en llamadas

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | declarar tipos simples en funciones y variables | texto | sí | resultado medible |
| $stack | PHP 8.3: fundamentos profesionales | texto | sí | 08-php/php8-core |
| $tecnologias | PHP 8.3, Composer, php.ini, WAMP, MariaDB | texto | sí | PHP 8.3, Composer, php.ini, WAMP, MariaDB |
| $tareas_clave | Explicar la diferencia entre PHP 5 (sin tipos), PHP 7 (tipos en funciones) y PHP 8 (tipos en propiedades) · Añadir declaración de tipos a un CRUD pequeño existente · Habilitar declare(strict_types=1) y explicar qué cambia en llamadas | lista | sí | 3-4 pasos |
| $criterios_clave | Todas las funciones nuevas tienen tipos de parámetro y retorno · El script corre sin warnings y con strict_types de prueba en un archivo | lista | sí | calidad verificable |
| $prompt_guia | Convierte este CRUD a PHP 8 con tipos declarados en funciones y propiedades, y activa strict_types | texto | no | "Tipado fuerte y strict_types" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Todas las funciones nuevas tienen tipos de parámetro y retorno
- [ ] El script corre sin warnings y con strict_types de prueba en un archivo

## Ejemplos de prompts

- "Convierte este CRUD a PHP 8 con tipos declarados en funciones y propiedades, y activa strict_types"
- "Aplica Tipado fuerte y strict_types (nivel basico) a mi trabajo actual con PHP 8.3: fundamentos profesionales: prioriza Todas las funciones nuevas tienen tipos de parámetro y retorno"
- "Revisa mi php8-core y dime qué pasos de Tipado fuerte y strict_types me faltan en este nivel"