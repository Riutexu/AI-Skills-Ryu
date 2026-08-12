---
name: php-advanced-internacionalizacion-basico
description: Internacionalización y localización · nivel Básico · PHP avanzado: metaprogramación y sistemas. Apps en varios idiomas: traducciones, formatos locales, fechas y plurales. Objetivo del nivel: traducciones básicas
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "internacionalizacion"
  nivel: basico
  stack: "PHP 8.3, Reflection, Attributes, streams, pcntl, phar"
---

# Internacionalización y localización — Básico

## Qué hace este skill

Apps en varios idiomas: traducciones, formatos locales, fechas y plurales. En este nivel se entrega: **traducciones básicas**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **PHP avanzado: metaprogramación y sistemas** (PHP 8.3, Reflection, Attributes, streams, pcntl, phar) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Internacionalización y localización** dentro de PHP avanzado: metaprogramación y sistemas.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Reflection, Attributes, streams, pcntl, phar**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Extraer strings a archivos de traducción
2. Cambiar idioma en runtime
3. Mostrar fechas y números con formato

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | traducciones básicas | texto | sí | resultado medible |
| $stack | PHP avanzado: metaprogramación y sistemas | texto | sí | 08-php/php-advanced |
| $tecnologias | PHP 8.3, Reflection, Attributes, streams, pcntl, phar | texto | sí | PHP 8.3, Reflection, Attributes, streams, pcntl, phar |
| $tareas_clave | Extraer strings a archivos de traducción · Cambiar idioma en runtime · Mostrar fechas y números con formato | lista | sí | 3-4 pasos |
| $criterios_clave | Las cadenas principales viven en archivos de idioma · El idioma se cambia sin tocar código | lista | sí | calidad verificable |
| $prompt_guia | Internacionaliza mi app: archivos de traducción y selector de idioma | texto | no | "Internacionalización y localización" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las cadenas principales viven en archivos de idioma
- [ ] El idioma se cambia sin tocar código

## Ejemplos de prompts

- "Internacionaliza mi app: archivos de traducción y selector de idioma"
- "Aplica Internacionalización y localización (nivel basico) a mi trabajo actual con PHP avanzado: metaprogramación y sistemas: prioriza Las cadenas principales viven en archivos de idioma"
- "Revisa mi php-advanced y dime qué pasos de Internacionalización y localización me faltan en este nivel"