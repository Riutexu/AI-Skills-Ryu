---
name: php-advanced-patrones-gof-php-basico
description: Patrones GoF en PHP · nivel Básico · PHP avanzado: metaprogramación y sistemas. Los 23 patrones del GoF con ejemplos PHP reales y el criterio de cuándo aplicarlos. Objetivo del nivel: creacionales prácticos
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "patrones-gof-php"
  nivel: basico
  stack: "PHP 8.3, Reflection, Attributes, streams, pcntl, phar"
---

# Patrones GoF en PHP — Básico

## Qué hace este skill

Los 23 patrones del GoF con ejemplos PHP reales y el criterio de cuándo aplicarlos. En este nivel se entrega: **creacionales prácticos**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **PHP avanzado: metaprogramación y sistemas** (PHP 8.3, Reflection, Attributes, streams, pcntl, phar) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Patrones GoF en PHP** dentro de PHP avanzado: metaprogramación y sistemas.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Reflection, Attributes, streams, pcntl, phar**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Implementar Factory Method y Abstract Factory en un módulo
2. Usar Builder para objetos complejos
3. Reconocer cuándo un patrón es sobre-ingeniería

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | creacionales prácticos | texto | sí | resultado medible |
| $stack | PHP avanzado: metaprogramación y sistemas | texto | sí | 08-php/php-advanced |
| $tecnologias | PHP 8.3, Reflection, Attributes, streams, pcntl, phar | texto | sí | PHP 8.3, Reflection, Attributes, streams, pcntl, phar |
| $tareas_clave | Implementar Factory Method y Abstract Factory en un módulo · Usar Builder para objetos complejos · Reconocer cuándo un patrón es sobre-ingeniería | lista | sí | 3-4 pasos |
| $criterios_clave | Los patrones creacionales se aplican donde aportan · El usuario explica el patrón sin jerga | lista | sí | calidad verificable |
| $prompt_guia | Aplica patrones creacionales (Factory, Builder) a mi módulo de reportes | texto | no | "Patrones GoF en PHP" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los patrones creacionales se aplican donde aportan
- [ ] El usuario explica el patrón sin jerga

## Ejemplos de prompts

- "Aplica patrones creacionales (Factory, Builder) a mi módulo de reportes"
- "Aplica Patrones GoF en PHP (nivel basico) a mi trabajo actual con PHP avanzado: metaprogramación y sistemas: prioriza Los patrones creacionales se aplican donde aportan"
- "Revisa mi php-advanced y dime qué pasos de Patrones GoF en PHP me faltan en este nivel"