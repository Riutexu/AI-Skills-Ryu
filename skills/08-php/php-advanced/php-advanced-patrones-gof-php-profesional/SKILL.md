---
name: php-advanced-patrones-gof-php-profesional
description: Patrones GoF en PHP · nivel Profesional · PHP avanzado: metaprogramación y sistemas. Los 23 patrones del GoF con ejemplos PHP reales y el criterio de cuándo aplicarlos. Objetivo del nivel: maestría con criterio
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "patrones-gof-php"
  nivel: profesional
  stack: "PHP 8.3, Reflection, Attributes, streams, pcntl, phar"
---

# Patrones GoF en PHP — Profesional

## Qué hace este skill

Los 23 patrones del GoF con ejemplos PHP reales y el criterio de cuándo aplicarlos. En este nivel se entrega: **maestría con criterio**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **PHP avanzado: metaprogramación y sistemas** (PHP 8.3, Reflection, Attributes, streams, pcntl, phar) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Patrones GoF en PHP** dentro de PHP avanzado: metaprogramación y sistemas.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Reflection, Attributes, streams, pcntl, phar**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Decidir patrón por trade-off (complejidad, costo, mantenimiento)
2. Combinar patrones (p. ej. Decorator+Factory) con coherencia
3. Reconocer y eliminar patrones aplicados sin necesidad
4. Enseñar el catálogo interno del proyecto al equipo

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | maestría con criterio | texto | sí | resultado medible |
| $stack | PHP avanzado: metaprogramación y sistemas | texto | sí | 08-php/php-advanced |
| $tecnologias | PHP 8.3, Reflection, Attributes, streams, pcntl, phar | texto | sí | PHP 8.3, Reflection, Attributes, streams, pcntl, phar |
| $tareas_clave | Decidir patrón por trade-off (complejidad, costo, mantenimiento) · Combinar patrones (p. ej. Decorator+Factory) con coherencia · Reconocer y eliminar patrones aplicados sin necesidad · Enseñar el catálogo interno del proyecto al equipo | lista | sí | 3-4 pasos |
| $criterios_clave | Los patrones elegidos están justificados en ADRs · La complejidad total no crece sin beneficio | lista | sí | calidad verificable |
| $prompt_guia | Audita el uso de patrones en mi código: manten los que aportan, documenta decisiones y elimina sobre-ingeniería | texto | no | "Patrones GoF en PHP" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los patrones elegidos están justificados en ADRs
- [ ] La complejidad total no crece sin beneficio

## Ejemplos de prompts

- "Audita el uso de patrones en mi código: manten los que aportan, documenta decisiones y elimina sobre-ingeniería"
- "Aplica Patrones GoF en PHP (nivel profesional) a mi trabajo actual con PHP avanzado: metaprogramación y sistemas: prioriza Los patrones elegidos están justificados en ADRs"
- "Revisa mi php-advanced y dime qué pasos de Patrones GoF en PHP me faltan en este nivel"