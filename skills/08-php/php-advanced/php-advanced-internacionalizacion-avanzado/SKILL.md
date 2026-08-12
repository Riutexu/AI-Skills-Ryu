---
name: php-advanced-internacionalizacion-avanzado
description: Internacionalización y localización · nivel Avanzado · PHP avanzado: metaprogramación y sistemas. Apps en varios idiomas: traducciones, formatos locales, fechas y plurales. Objetivo del nivel: plurales y formatos completos
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "internacionalizacion"
  nivel: avanzado
  stack: "PHP 8.3, Reflection, Attributes, streams, pcntl, phar"
---

# Internacionalización y localización — Avanzado

## Qué hace este skill

Apps en varios idiomas: traducciones, formatos locales, fechas y plurales. En este nivel se entrega: **plurales y formatos completos**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **PHP avanzado: metaprogramación y sistemas** (PHP 8.3, Reflection, Attributes, streams, pcntl, phar) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Internacionalización y localización** dentro de PHP avanzado: metaprogramación y sistemas.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Reflection, Attributes, streams, pcntl, phar**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Manejar plurales con reglas (gettext ICU)
2. Formatear moneda, fechas y tiempo por locale
3. Gestionar el idioma por URL/cookie/header
4. Traducir mensajes de validación y errores

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | plurales y formatos completos | texto | sí | resultado medible |
| $stack | PHP avanzado: metaprogramación y sistemas | texto | sí | 08-php/php-advanced |
| $tecnologias | PHP 8.3, Reflection, Attributes, streams, pcntl, phar | texto | sí | PHP 8.3, Reflection, Attributes, streams, pcntl, phar |
| $tareas_clave | Manejar plurales con reglas (gettext ICU) · Formatear moneda, fechas y tiempo por locale · Gestionar el idioma por URL/cookie/header · Traducir mensajes de validación y errores | lista | sí | 3-4 pasos |
| $criterios_clave | Los plurales funcionan en español e inglés · El formato de moneda/fecha es correcto por locale | lista | sí | calidad verificable |
| $prompt_guia | Completa la i18n de mi app: plurales ICU, formatos por locale y traducciones de errores | texto | no | "Internacionalización y localización" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los plurales funcionan en español e inglés
- [ ] El formato de moneda/fecha es correcto por locale

## Ejemplos de prompts

- "Completa la i18n de mi app: plurales ICU, formatos por locale y traducciones de errores"
- "Aplica Internacionalización y localización (nivel avanzado) a mi trabajo actual con PHP avanzado: metaprogramación y sistemas: prioriza Los plurales funcionan en español e inglés"
- "Revisa mi php-advanced y dime qué pasos de Internacionalización y localización me faltan en este nivel"