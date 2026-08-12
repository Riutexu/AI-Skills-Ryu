---
name: php-advanced-atributos-php8-avanzado
description: Atributos PHP 8 · nivel Avanzado · PHP avanzado: metaprogramación y sistemas. Metadata declarativa en código: atributos nativos y propios, lectura con reflection. Objetivo del nivel: atributos propios
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "atributos-php8"
  nivel: avanzado
  stack: "PHP 8.3, Reflection, Attributes, streams, pcntl, phar"
---

# Atributos PHP 8 — Avanzado

## Qué hace este skill

Metadata declarativa en código: atributos nativos y propios, lectura con reflection. En este nivel se entrega: **atributos propios**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **PHP avanzado: metaprogramación y sistemas** (PHP 8.3, Reflection, Attributes, streams, pcntl, phar) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Atributos PHP 8** dentro de PHP avanzado: metaprogramación y sistemas.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Reflection, Attributes, streams, pcntl, phar**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir atributos propios (#[Route], #[Validator])
2. Leerlos con reflection en runtime
3. Combinar atributos con contenedor/registro
4. Documentar su uso en la librería

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | atributos propios | texto | sí | resultado medible |
| $stack | PHP avanzado: metaprogramación y sistemas | texto | sí | 08-php/php-advanced |
| $tecnologias | PHP 8.3, Reflection, Attributes, streams, pcntl, phar | texto | sí | PHP 8.3, Reflection, Attributes, streams, pcntl, phar |
| $tareas_clave | Definir atributos propios (#[Route], #[Validator]) · Leerlos con reflection en runtime · Combinar atributos con contenedor/registro · Documentar su uso en la librería | lista | sí | 3-4 pasos |
| $criterios_clave | El registro de rutas/validaciones funciona vía atributos · Los atributos propios están tipados y documentados | lista | sí | calidad verificable |
| $prompt_guia | Crea atributos #[Route] y #[Validar] propios y regístralos con reflection | texto | no | "Atributos PHP 8" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El registro de rutas/validaciones funciona vía atributos
- [ ] Los atributos propios están tipados y documentados

## Ejemplos de prompts

- "Crea atributos #[Route] y #[Validar] propios y regístralos con reflection"
- "Aplica Atributos PHP 8 (nivel avanzado) a mi trabajo actual con PHP avanzado: metaprogramación y sistemas: prioriza El registro de rutas/validaciones funciona vía atributos"
- "Revisa mi php-advanced y dime qué pasos de Atributos PHP 8 me faltan en este nivel"