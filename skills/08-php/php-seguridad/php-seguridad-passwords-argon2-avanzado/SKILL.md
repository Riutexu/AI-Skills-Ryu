---
name: php-seguridad-passwords-argon2-avanzado
description: Contraseñas con Argon2ID · nivel Avanzado · Seguridad web en PHP. Almacenar contraseñas con el estándar moderno: Argon2ID, costes y políticas de rotación. Objetivo del nivel: costes y rehash
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "passwords-argon2"
  nivel: avanzado
  stack: "PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF"
---

# Contraseñas con Argon2ID — Avanzado

## Qué hace este skill

Almacenar contraseñas con el estándar moderno: Argon2ID, costes y políticas de rotación. En este nivel se entrega: **costes y rehash**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Seguridad web en PHP** (PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Contraseñas con Argon2ID** dentro de Seguridad web en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Ajustar costes de Argon2ID según el hardware
2. Implementar rehash automático en login
3. Requerir contraseñas fuertes con política real
4. Proteger contra fuerza bruta (rate limit por cuenta)

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | costes y rehash | texto | sí | resultado medible |
| $stack | Seguridad web en PHP | texto | sí | 08-php/php-seguridad |
| $tecnologias | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF | texto | sí | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF |
| $tareas_clave | Ajustar costes de Argon2ID según el hardware · Implementar rehash automático en login · Requerir contraseñas fuertes con política real · Proteger contra fuerza bruta (rate limit por cuenta) | lista | sí | 3-4 pasos |
| $criterios_clave | El rehash automático actualiza hashes viejos · El login limita intentos por cuenta | lista | sí | calidad verificable |
| $prompt_guia | Mejora mis contraseñas: costes Argon2ID ajustados, rehash automático y política de fuerza | texto | no | "Contraseñas con Argon2ID" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El rehash automático actualiza hashes viejos
- [ ] El login limita intentos por cuenta

## Ejemplos de prompts

- "Mejora mis contraseñas: costes Argon2ID ajustados, rehash automático y política de fuerza"
- "Aplica Contraseñas con Argon2ID (nivel avanzado) a mi trabajo actual con Seguridad web en PHP: prioriza El rehash automático actualiza hashes viejos"
- "Revisa mi php-seguridad y dime qué pasos de Contraseñas con Argon2ID me faltan en este nivel"