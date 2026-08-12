---
name: php-advanced-expresiones-regulares-basico
description: Expresiones regulares · nivel Básico · PHP avanzado: metaprogramación y sistemas. Regex con responsabilidad: patrones correctos, legibles y con rendimiento controlado. Objetivo del nivel: regex básicas seguras
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "expresiones-regulares"
  nivel: basico
  stack: "PHP 8.3, Reflection, Attributes, streams, pcntl, phar"
---

# Expresiones regulares — Básico

## Qué hace este skill

Regex con responsabilidad: patrones correctos, legibles y con rendimiento controlado. En este nivel se entrega: **regex básicas seguras**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **PHP avanzado: metaprogramación y sistemas** (PHP 8.3, Reflection, Attributes, streams, pcntl, phar) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Expresiones regulares** dentro de PHP avanzado: metaprogramación y sistemas.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Reflection, Attributes, streams, pcntl, phar**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar preg_match/preg_replace con patrones simples
2. Escapar caracteres y usar delimitadores correctos
3. Evitar regex donde strpos/str_replace sirven

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | regex básicas seguras | texto | sí | resultado medible |
| $stack | PHP avanzado: metaprogramación y sistemas | texto | sí | 08-php/php-advanced |
| $tecnologias | PHP 8.3, Reflection, Attributes, streams, pcntl, phar | texto | sí | PHP 8.3, Reflection, Attributes, streams, pcntl, phar |
| $tareas_clave | Usar preg_match/preg_replace con patrones simples · Escapar caracteres y usar delimitadores correctos · Evitar regex donde strpos/str_replace sirven | lista | sí | 3-4 pasos |
| $criterios_clave | Los patrones están escapados y con delimitadores válidos · No hay regex innecesarias en el código | lista | sí | calidad verificable |
| $prompt_guia | Reemplaza mis regex innecesarias por funciones de string y deja solo las que aportan | texto | no | "Expresiones regulares" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los patrones están escapados y con delimitadores válidos
- [ ] No hay regex innecesarias en el código

## Ejemplos de prompts

- "Reemplaza mis regex innecesarias por funciones de string y deja solo las que aportan"
- "Aplica Expresiones regulares (nivel basico) a mi trabajo actual con PHP avanzado: metaprogramación y sistemas: prioriza Los patrones están escapados y con delimitadores válidos"
- "Revisa mi php-advanced y dime qué pasos de Expresiones regulares me faltan en este nivel"