---
name: php8-core-generadores-iteradores-basico
description: Generadores e iteradores · nivel Básico · PHP 8.3: fundamentos profesionales. Procesar datos grandes sin explotar la memoria con generators, iterators y yield. Objetivo del nivel: yield y primeros generadores
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "generadores-iteradores"
  nivel: basico
  stack: "PHP 8.3, Composer, php.ini, WAMP, MariaDB"
---

# Generadores e iteradores — Básico

## Qué hace este skill

Procesar datos grandes sin explotar la memoria con generators, iterators y yield. En este nivel se entrega: **yield y primeros generadores**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **PHP 8.3: fundamentos profesionales** (PHP 8.3, Composer, php.ini, WAMP, MariaDB) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Generadores e iteradores** dentro de PHP 8.3: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, php.ini, WAMP, MariaDB**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear un generador con yield y consumirlo con foreach
2. Transformar un bucle de archivo grande a generador
3. Explicar cuándo un generador ahorra memoria de verdad

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | yield y primeros generadores | texto | sí | resultado medible |
| $stack | PHP 8.3: fundamentos profesionales | texto | sí | 08-php/php8-core |
| $tecnologias | PHP 8.3, Composer, php.ini, WAMP, MariaDB | texto | sí | PHP 8.3, Composer, php.ini, WAMP, MariaDB |
| $tareas_clave | Crear un generador con yield y consumirlo con foreach · Transformar un bucle de archivo grande a generador · Explicar cuándo un generador ahorra memoria de verdad | lista | sí | 3-4 pasos |
| $criterios_clave | El bucle de archivo funciona sin consumir el archivo entero en memoria · El ejemplo con yield está comentado para aprendizaje | lista | sí | calidad verificable |
| $prompt_guia | Convierte el procesamiento de este archivo CSV grande a un generador con yield | texto | no | "Generadores e iteradores" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El bucle de archivo funciona sin consumir el archivo entero en memoria
- [ ] El ejemplo con yield está comentado para aprendizaje

## Ejemplos de prompts

- "Convierte el procesamiento de este archivo CSV grande a un generador con yield"
- "Aplica Generadores e iteradores (nivel basico) a mi trabajo actual con PHP 8.3: fundamentos profesionales: prioriza El bucle de archivo funciona sin consumir el archivo entero en memoria"
- "Revisa mi php8-core y dime qué pasos de Generadores e iteradores me faltan en este nivel"