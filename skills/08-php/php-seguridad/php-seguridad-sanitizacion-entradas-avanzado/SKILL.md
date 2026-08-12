---
name: php-seguridad-sanitizacion-entradas-avanzado
description: Saneamiento de entradas · nivel Avanzado · Seguridad web en PHP. Tratar toda entrada como hostil: filtrar, validar y sanear sin romper la funcionalidad. Objetivo del nivel: saneamiento contextual
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "sanitizacion-entradas"
  nivel: avanzado
  stack: "PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF"
---

# Saneamiento de entradas — Avanzado

## Qué hace este skill

Tratar toda entrada como hostil: filtrar, validar y sanear sin romper la funcionalidad. En este nivel se entrega: **saneamiento contextual**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Seguridad web en PHP** (PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Saneamiento de entradas** dentro de Seguridad web en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Distinguir sanitización por contexto (HTML, SQL, shell, URL)
2. Construir un validador centralizado por tipo de dato
3. Manejar entradas de archivos (tipos, tamaños, contenidos)
4. Proteger contra length/overflow y abusos de escala

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | saneamiento contextual | texto | sí | resultado medible |
| $stack | Seguridad web en PHP | texto | sí | 08-php/php-seguridad |
| $tecnologias | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF | texto | sí | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF |
| $tareas_clave | Distinguir sanitización por contexto (HTML, SQL, shell, URL) · Construir un validador centralizado por tipo de dato · Manejar entradas de archivos (tipos, tamaños, contenidos) · Proteger contra length/overflow y abusos de escala | lista | sí | 3-4 pasos |
| $criterios_clave | El saneamiento es contextual, no global mágico · Los archivos se validan por contenido, no solo por extensión | lista | sí | calidad verificable |
| $prompt_guia | Implementa saneamiento contextual por tipo de entrada y validación real de archivos | texto | no | "Saneamiento de entradas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El saneamiento es contextual, no global mágico
- [ ] Los archivos se validan por contenido, no solo por extensión

## Ejemplos de prompts

- "Implementa saneamiento contextual por tipo de entrada y validación real de archivos"
- "Aplica Saneamiento de entradas (nivel avanzado) a mi trabajo actual con Seguridad web en PHP: prioriza El saneamiento es contextual, no global mágico"
- "Revisa mi php-seguridad y dime qué pasos de Saneamiento de entradas me faltan en este nivel"