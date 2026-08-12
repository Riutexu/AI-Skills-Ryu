---
name: php-advanced-atributos-php8-basico
description: Atributos PHP 8 · nivel Básico · PHP avanzado: metaprogramación y sistemas. Metadata declarativa en código: atributos nativos y propios, lectura con reflection. Objetivo del nivel: usar atributos nativos
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "atributos-php8"
  nivel: basico
  stack: "PHP 8.3, Reflection, Attributes, streams, pcntl, phar"
---

# Atributos PHP 8 — Básico

## Qué hace este skill

Metadata declarativa en código: atributos nativos y propios, lectura con reflection. En este nivel se entrega: **usar atributos nativos**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **PHP avanzado: metaprogramación y sistemas** (PHP 8.3, Reflection, Attributes, streams, pcntl, phar) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Atributos PHP 8** dentro de PHP avanzado: metaprogramación y sistemas.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Reflection, Attributes, streams, pcntl, phar**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar #[Deprecated] y #[Override] correctamente
2. Explicar qué hace cada atributo nativo
3. Añadir #[Pure] donde aplique

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | usar atributos nativos | texto | sí | resultado medible |
| $stack | PHP avanzado: metaprogramación y sistemas | texto | sí | 08-php/php-advanced |
| $tecnologias | PHP 8.3, Reflection, Attributes, streams, pcntl, phar | texto | sí | PHP 8.3, Reflection, Attributes, streams, pcntl, phar |
| $tareas_clave | Usar #[Deprecated] y #[Override] correctamente · Explicar qué hace cada atributo nativo · Añadir #[Pure] donde aplique | lista | sí | 3-4 pasos |
| $criterios_clave | Los atributos nativos se aplican con sentido · Las deprecaciones se ven en el IDE | lista | sí | calidad verificable |
| $prompt_guia | Aplica atributos nativos (Deprecated, Override, Pure) a mi código con criterio | texto | no | "Atributos PHP 8" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los atributos nativos se aplican con sentido
- [ ] Las deprecaciones se ven en el IDE

## Ejemplos de prompts

- "Aplica atributos nativos (Deprecated, Override, Pure) a mi código con criterio"
- "Aplica Atributos PHP 8 (nivel basico) a mi trabajo actual con PHP avanzado: metaprogramación y sistemas: prioriza Los atributos nativos se aplican con sentido"
- "Revisa mi php-advanced y dime qué pasos de Atributos PHP 8 me faltan en este nivel"