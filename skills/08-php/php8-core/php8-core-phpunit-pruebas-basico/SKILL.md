---
name: php8-core-phpunit-pruebas-basico
description: PHPUnit: pruebas unitarias · nivel Básico · PHP 8.3: fundamentos profesionales. Escribir pruebas unitarias limpias, rápidas y útiles que protejan el comportamiento real del código. Objetivo del nivel: primeras pruebas unitarias de funciones puras
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "phpunit-pruebas"
  nivel: basico
  stack: "PHP 8.3, Composer, php.ini, WAMP, MariaDB"
---

# PHPUnit: pruebas unitarias — Básico

## Qué hace este skill

Escribir pruebas unitarias limpias, rápidas y útiles que protejan el comportamiento real del código. En este nivel se entrega: **primeras pruebas unitarias de funciones puras**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **PHP 8.3: fundamentos profesionales** (PHP 8.3, Composer, php.ini, WAMP, MariaDB) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **PHPUnit: pruebas unitarias** dentro de PHP 8.3: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, php.ini, WAMP, MariaDB**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Configurar PHPUnit 11 con phpunit.xml y un test de humo
2. Escribir pruebas de funciones puras (calculadora, validadores, formateadores)
3. Correr la suite y leer un fallo con assertStringEqualsString

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | primeras pruebas unitarias de funciones puras | texto | sí | resultado medible |
| $stack | PHP 8.3: fundamentos profesionales | texto | sí | 08-php/php8-core |
| $tecnologias | PHP 8.3, Composer, php.ini, WAMP, MariaDB | texto | sí | PHP 8.3, Composer, php.ini, WAMP, MariaDB |
| $tareas_clave | Configurar PHPUnit 11 con phpunit.xml y un test de humo · Escribir pruebas de funciones puras (calculadora, validadores, formateadores) · Correr la suite y leer un fallo con assertStringEqualsString | lista | sí | 3-4 pasos |
| $criterios_clave | Suite verde y un test que falla al romper el comportamiento cubierto · Naming de tests en español claro: debeHacerX cuandoY | lista | sí | calidad verificable |
| $prompt_guia | Configura PHPUnit en mi proyecto y escribe pruebas para mis funciones puras de validación y formato | texto | no | "PHPUnit: pruebas unitarias" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Suite verde y un test que falla al romper el comportamiento cubierto
- [ ] Naming de tests en español claro: debeHacerX cuandoY

## Ejemplos de prompts

- "Configura PHPUnit en mi proyecto y escribe pruebas para mis funciones puras de validación y formato"
- "Aplica PHPUnit: pruebas unitarias (nivel basico) a mi trabajo actual con PHP 8.3: fundamentos profesionales: prioriza Suite verde y un test que falla al romper el comportamiento cubierto"
- "Revisa mi php8-core y dime qué pasos de PHPUnit: pruebas unitarias me faltan en este nivel"