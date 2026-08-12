---
name: php-advanced-internacionalizacion-profesional
description: Internacionalización y localización · nivel Profesional · PHP avanzado: metaprogramación y sistemas. Apps en varios idiomas: traducciones, formatos locales, fechas y plurales. Objetivo del nivel: plataforma i18n
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "internacionalizacion"
  nivel: profesional
  stack: "PHP 8.3, Reflection, Attributes, streams, pcntl, phar"
---

# Internacionalización y localización — Profesional

## Qué hace este skill

Apps en varios idiomas: traducciones, formatos locales, fechas y plurales. En este nivel se entrega: **plataforma i18n**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **PHP avanzado: metaprogramación y sistemas** (PHP 8.3, Reflection, Attributes, streams, pcntl, phar) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Internacionalización y localización** dentro de PHP avanzado: metaprogramación y sistemas.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Reflection, Attributes, streams, pcntl, phar**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar el flujo de traducción con el equipo (glosario, revisores)
2. Versionar las traducciones y detectar cadenas huérfanas
3. Soportar RTL y locales complejos
4. Medir cobertura de traducción en CI

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | plataforma i18n | texto | sí | resultado medible |
| $stack | PHP avanzado: metaprogramación y sistemas | texto | sí | 08-php/php-advanced |
| $tecnologias | PHP 8.3, Reflection, Attributes, streams, pcntl, phar | texto | sí | PHP 8.3, Reflection, Attributes, streams, pcntl, phar |
| $tareas_clave | Diseñar el flujo de traducción con el equipo (glosario, revisores) · Versionar las traducciones y detectar cadenas huérfanas · Soportar RTL y locales complejos · Medir cobertura de traducción en CI | lista | sí | 3-4 pasos |
| $criterios_clave | El flujo de traducción está automatizado y versionado · La cobertura de traducción se mide en CI | lista | sí | calidad verificable |
| $prompt_guia | Diseña el flujo de i18n de mi plataforma: glosario, versionado, RTL y cobertura en CI | texto | no | "Internacionalización y localización" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El flujo de traducción está automatizado y versionado
- [ ] La cobertura de traducción se mide en CI

## Ejemplos de prompts

- "Diseña el flujo de i18n de mi plataforma: glosario, versionado, RTL y cobertura en CI"
- "Aplica Internacionalización y localización (nivel profesional) a mi trabajo actual con PHP avanzado: metaprogramación y sistemas: prioriza El flujo de traducción está automatizado y versionado"
- "Revisa mi php-advanced y dime qué pasos de Internacionalización y localización me faltan en este nivel"