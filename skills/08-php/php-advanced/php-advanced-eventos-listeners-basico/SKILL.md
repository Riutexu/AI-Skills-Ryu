---
name: php-advanced-eventos-listeners-basico
description: Eventos y listeners · nivel Básico · PHP avanzado: metaprogramación y sistemas. Desacoplar efectos: dispatcher de eventos, listeners y el modelo correcto de dominio. Objetivo del nivel: dispatcher simple
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "eventos-listeners"
  nivel: basico
  stack: "PHP 8.3, Reflection, Attributes, streams, pcntl, phar"
---

# Eventos y listeners — Básico

## Qué hace este skill

Desacoplar efectos: dispatcher de eventos, listeners y el modelo correcto de dominio. En este nivel se entrega: **dispatcher simple**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **PHP avanzado: metaprogramación y sistemas** (PHP 8.3, Reflection, Attributes, streams, pcntl, phar) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Eventos y listeners** dentro de PHP avanzado: metaprogramación y sistemas.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Reflection, Attributes, streams, pcntl, phar**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear una clase EventDispatcher
2. Emitir eventos y registrar listeners
3. Pasar datos del evento a los listeners

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | dispatcher simple | texto | sí | resultado medible |
| $stack | PHP avanzado: metaprogramación y sistemas | texto | sí | 08-php/php-advanced |
| $tecnologias | PHP 8.3, Reflection, Attributes, streams, pcntl, phar | texto | sí | PHP 8.3, Reflection, Attributes, streams, pcntl, phar |
| $tareas_clave | Crear una clase EventDispatcher · Emitir eventos y registrar listeners · Pasar datos del evento a los listeners | lista | sí | 3-4 pasos |
| $criterios_clave | Los listeners reciben el evento tipado · La emisión no rompe si no hay listeners | lista | sí | calidad verificable |
| $prompt_guia | Implementa un EventDispatcher simple y úsalo para loguear pedidos | texto | no | "Eventos y listeners" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los listeners reciben el evento tipado
- [ ] La emisión no rompe si no hay listeners

## Ejemplos de prompts

- "Implementa un EventDispatcher simple y úsalo para loguear pedidos"
- "Aplica Eventos y listeners (nivel basico) a mi trabajo actual con PHP avanzado: metaprogramación y sistemas: prioriza Los listeners reciben el evento tipado"
- "Revisa mi php-advanced y dime qué pasos de Eventos y listeners me faltan en este nivel"