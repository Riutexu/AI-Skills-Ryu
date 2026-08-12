---
name: php-advanced-atributos-php8-profesional
description: Atributos PHP 8 · nivel Profesional · PHP avanzado: metaprogramación y sistemas. Metadata declarativa en código: atributos nativos y propios, lectura con reflection. Objetivo del nivel: atributos como contrato
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "atributos-php8"
  nivel: profesional
  stack: "PHP 8.3, Reflection, Attributes, streams, pcntl, phar"
---

# Atributos PHP 8 — Profesional

## Qué hace este skill

Metadata declarativa en código: atributos nativos y propios, lectura con reflection. En este nivel se entrega: **atributos como contrato**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **PHP avanzado: metaprogramación y sistemas** (PHP 8.3, Reflection, Attributes, streams, pcntl, phar) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Atributos PHP 8** dentro de PHP avanzado: metaprogramación y sistemas.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Reflection, Attributes, streams, pcntl, phar**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar el vocabulario de atributos de la plataforma
2. Validar atributos en compile-time de tests (schema)
3. Integrar con static analysis (PHPStan aware)
4. Documentar la compatibilidad semántica entre versiones

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | atributos como contrato | texto | sí | resultado medible |
| $stack | PHP avanzado: metaprogramación y sistemas | texto | sí | 08-php/php-advanced |
| $tecnologias | PHP 8.3, Reflection, Attributes, streams, pcntl, phar | texto | sí | PHP 8.3, Reflection, Attributes, streams, pcntl, phar |
| $tareas_clave | Diseñar el vocabulario de atributos de la plataforma · Validar atributos en compile-time de tests (schema) · Integrar con static analysis (PHPStan aware) · Documentar la compatibilidad semántica entre versiones | lista | sí | 3-4 pasos |
| $criterios_clave | El vocabulario de atributos está documentado y versionado · Los tests detectan atributos malformados | lista | sí | calidad verificable |
| $prompt_guia | Diseña el vocabulario de atributos de mi plataforma con validación de tests y documentación | texto | no | "Atributos PHP 8" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El vocabulario de atributos está documentado y versionado
- [ ] Los tests detectan atributos malformados

## Ejemplos de prompts

- "Diseña el vocabulario de atributos de mi plataforma con validación de tests y documentación"
- "Aplica Atributos PHP 8 (nivel profesional) a mi trabajo actual con PHP avanzado: metaprogramación y sistemas: prioriza El vocabulario de atributos está documentado y versionado"
- "Revisa mi php-advanced y dime qué pasos de Atributos PHP 8 me faltan en este nivel"