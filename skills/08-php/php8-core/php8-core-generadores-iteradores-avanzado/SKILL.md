---
name: php8-core-generadores-iteradores-avanzado
description: Generadores e iteradores · nivel Avanzado · PHP 8.3: fundamentos profesionales. Procesar datos grandes sin explotar la memoria con generators, iterators y yield. Objetivo del nivel: iteradores personalizados y composición
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "generadores-iteradores"
  nivel: avanzado
  stack: "PHP 8.3, Composer, php.ini, WAMP, MariaDB"
---

# Generadores e iteradores — Avanzado

## Qué hace este skill

Procesar datos grandes sin explotar la memoria con generators, iterators y yield. En este nivel se entrega: **iteradores personalizados y composición**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **PHP 8.3: fundamentos profesionales** (PHP 8.3, Composer, php.ini, WAMP, MariaDB) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Generadores e iteradores** dentro de PHP 8.3: fundamentos profesionales.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, php.ini, WAMP, MariaDB**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Implementar Iterator/IteratorAggregate para una colección de dominio
2. Componer generadores (encadenar transformaciones sin arrays intermedios)
3. Usar yield from para delegar y aplanar estructuras
4. Combinar generadores con filtros y límites sin cálculo prematuro

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | iteradores personalizados y composición | texto | sí | resultado medible |
| $stack | PHP 8.3: fundamentos profesionales | texto | sí | 08-php/php8-core |
| $tecnologias | PHP 8.3, Composer, php.ini, WAMP, MariaDB | texto | sí | PHP 8.3, Composer, php.ini, WAMP, MariaDB |
| $tareas_clave | Implementar Iterator/IteratorAggregate para una colección de dominio · Componer generadores (encadenar transformaciones sin arrays intermedios) · Usar yield from para delegar y aplanar estructuras · Combinar generadores con filtros y límites sin cálculo prematuro | lista | sí | 3-4 pasos |
| $criterios_clave | La composición de generadores procesa datos en streaming · La colección de dominio es iterable con foreach nativo | lista | sí | calidad verificable |
| $prompt_guia | Implementa iteradores personalizados para mi dominio y compón generadores para el export CSV en streaming | texto | no | "Generadores e iteradores" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La composición de generadores procesa datos en streaming
- [ ] La colección de dominio es iterable con foreach nativo

## Ejemplos de prompts

- "Implementa iteradores personalizados para mi dominio y compón generadores para el export CSV en streaming"
- "Aplica Generadores e iteradores (nivel avanzado) a mi trabajo actual con PHP 8.3: fundamentos profesionales: prioriza La composición de generadores procesa datos en streaming"
- "Revisa mi php8-core y dime qué pasos de Generadores e iteradores me faltan en este nivel"