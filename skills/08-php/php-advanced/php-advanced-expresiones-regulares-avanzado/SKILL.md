---
name: php-advanced-expresiones-regulares-avanzado
description: Expresiones regulares · nivel Avanzado · PHP avanzado: metaprogramación y sistemas. Regex con responsabilidad: patrones correctos, legibles y con rendimiento controlado. Objetivo del nivel: patrones complejos
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "expresiones-regulares"
  nivel: avanzado
  stack: "PHP 8.3, Reflection, Attributes, streams, pcntl, phar"
---

# Expresiones regulares — Avanzado

## Qué hace este skill

Regex con responsabilidad: patrones correctos, legibles y con rendimiento controlado. En este nivel se entrega: **patrones complejos**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **PHP avanzado: metaprogramación y sistemas** (PHP 8.3, Reflection, Attributes, streams, pcntl, phar) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Expresiones regulares** dentro de PHP avanzado: metaprogramación y sistemas.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Reflection, Attributes, streams, pcntl, phar**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar grupos nombrados y lookarounds con moderación
2. Aplicar ungreedy y flags correctamente
3. Validar entradas reales (emails, URLs, fechas) con casos
4. Testar patrones con casos de borde

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | patrones complejos | texto | sí | resultado medible |
| $stack | PHP avanzado: metaprogramación y sistemas | texto | sí | 08-php/php-advanced |
| $tecnologias | PHP 8.3, Reflection, Attributes, streams, pcntl, phar | texto | sí | PHP 8.3, Reflection, Attributes, streams, pcntl, phar |
| $tareas_clave | Usar grupos nombrados y lookarounds con moderación · Aplicar ungreedy y flags correctamente · Validar entradas reales (emails, URLs, fechas) con casos · Testar patrones con casos de borde | lista | sí | 3-4 pasos |
| $criterios_clave | Los patrones pasan casos de borde documentados · Ningún patrón catastrófico (reDoS) en código | lista | sí | calidad verificable |
| $prompt_guia | Revisa mis patrones regex: grupos nombrados, ungreedy y casos de borde, eliminando reDoS | texto | no | "Expresiones regulares" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los patrones pasan casos de borde documentados
- [ ] Ningún patrón catastrófico (reDoS) en código

## Ejemplos de prompts

- "Revisa mis patrones regex: grupos nombrados, ungreedy y casos de borde, eliminando reDoS"
- "Aplica Expresiones regulares (nivel avanzado) a mi trabajo actual con PHP avanzado: metaprogramación y sistemas: prioriza Los patrones pasan casos de borde documentados"
- "Revisa mi php-advanced y dime qué pasos de Expresiones regulares me faltan en este nivel"