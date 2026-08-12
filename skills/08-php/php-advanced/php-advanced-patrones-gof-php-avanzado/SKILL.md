---
name: php-advanced-patrones-gof-php-avanzado
description: Patrones GoF en PHP · nivel Avanzado · PHP avanzado: metaprogramación y sistemas. Los 23 patrones del GoF con ejemplos PHP reales y el criterio de cuándo aplicarlos. Objetivo del nivel: estructurales y de comportamiento
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "patrones-gof-php"
  nivel: avanzado
  stack: "PHP 8.3, Reflection, Attributes, streams, pcntl, phar"
---

# Patrones GoF en PHP — Avanzado

## Qué hace este skill

Los 23 patrones del GoF con ejemplos PHP reales y el criterio de cuándo aplicarlos. En este nivel se entrega: **estructurales y de comportamiento**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **PHP avanzado: metaprogramación y sistemas** (PHP 8.3, Reflection, Attributes, streams, pcntl, phar) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Patrones GoF en PHP** dentro de PHP avanzado: metaprogramación y sistemas.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Reflection, Attributes, streams, pcntl, phar**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Implementar Adapter, Decorator y Proxy en integraciones
2. Usar Strategy, Command y Observer en flujos reales
3. Aplicar State y Template Method donde encajan
4. Documentar cada patrón con ejemplo del proyecto

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | estructurales y de comportamiento | texto | sí | resultado medible |
| $stack | PHP avanzado: metaprogramación y sistemas | texto | sí | 08-php/php-advanced |
| $tecnologias | PHP 8.3, Reflection, Attributes, streams, pcntl, phar | texto | sí | PHP 8.3, Reflection, Attributes, streams, pcntl, phar |
| $tareas_clave | Implementar Adapter, Decorator y Proxy en integraciones · Usar Strategy, Command y Observer en flujos reales · Aplicar State y Template Method donde encajan · Documentar cada patrón con ejemplo del proyecto | lista | sí | 3-4 pasos |
| $criterios_clave | Los patrones estructurales resuelven integraciones reales · Los patrones de comportamiento desacoplan flujos centrales | lista | sí | calidad verificable |
| $prompt_guia | Desacopla mis flujos con los patrones de comportamiento (Strategy, Command, Observer) del proyecto | texto | no | "Patrones GoF en PHP" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los patrones estructurales resuelven integraciones reales
- [ ] Los patrones de comportamiento desacoplan flujos centrales

## Ejemplos de prompts

- "Desacopla mis flujos con los patrones de comportamiento (Strategy, Command, Observer) del proyecto"
- "Aplica Patrones GoF en PHP (nivel avanzado) a mi trabajo actual con PHP avanzado: metaprogramación y sistemas: prioriza Los patrones estructurales resuelven integraciones reales"
- "Revisa mi php-advanced y dime qué pasos de Patrones GoF en PHP me faltan en este nivel"