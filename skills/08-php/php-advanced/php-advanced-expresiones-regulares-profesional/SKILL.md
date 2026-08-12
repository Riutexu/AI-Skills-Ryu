---
name: php-advanced-expresiones-regulares-profesional
description: Expresiones regulares · nivel Profesional · PHP avanzado: metaprogramación y sistemas. Regex con responsabilidad: patrones correctos, legibles y con rendimiento controlado. Objetivo del nivel: regex como herramienta de dominio
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "expresiones-regulares"
  nivel: profesional
  stack: "PHP 8.3, Reflection, Attributes, streams, pcntl, phar"
---

# Expresiones regulares — Profesional

## Qué hace este skill

Regex con responsabilidad: patrones correctos, legibles y con rendimiento controlado. En este nivel se entrega: **regex como herramienta de dominio**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **PHP avanzado: metaprogramación y sistemas** (PHP 8.3, Reflection, Attributes, streams, pcntl, phar) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Expresiones regulares** dentro de PHP avanzado: metaprogramación y sistemas.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Reflection, Attributes, streams, pcntl, phar**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear la caja de herramientas regex del proyecto (patrones versionados)
2. Proteger contra ReDoS (límites, atomic groups)
3. Equilibrar regex vs parsers (cuándo no usar regex)
4. Documentar cada patrón con ejemplos

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | regex como herramienta de dominio | texto | sí | resultado medible |
| $stack | PHP avanzado: metaprogramación y sistemas | texto | sí | 08-php/php-advanced |
| $tecnologias | PHP 8.3, Reflection, Attributes, streams, pcntl, phar | texto | sí | PHP 8.3, Reflection, Attributes, streams, pcntl, phar |
| $tareas_clave | Crear la caja de herramientas regex del proyecto (patrones versionados) · Proteger contra ReDoS (límites, atomic groups) · Equilibrar regex vs parsers (cuándo no usar regex) · Documentar cada patrón con ejemplos | lista | sí | 3-4 pasos |
| $criterios_clave | Los patrones centrales están versionados y probados · Ningún parser complejo usa regex inadecuadas | lista | sí | calidad verificable |
| $prompt_guia | Construye la librería de patrones regex de mi proyecto con tests anti-ReDoS y documentación | texto | no | "Expresiones regulares" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los patrones centrales están versionados y probados
- [ ] Ningún parser complejo usa regex inadecuadas

## Ejemplos de prompts

- "Construye la librería de patrones regex de mi proyecto con tests anti-ReDoS y documentación"
- "Aplica Expresiones regulares (nivel profesional) a mi trabajo actual con PHP avanzado: metaprogramación y sistemas: prioriza Los patrones centrales están versionados y probados"
- "Revisa mi php-advanced y dime qué pasos de Expresiones regulares me faltan en este nivel"