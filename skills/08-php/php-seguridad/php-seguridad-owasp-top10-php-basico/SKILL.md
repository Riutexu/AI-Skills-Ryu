---
name: php-seguridad-owasp-top10-php-basico
description: OWASP Top 10 aplicado · nivel Básico · Seguridad web en PHP. Los diez riesgos críticos aplicados a tu código PHP concreto, uno por uno. Objetivo del nivel: conocer y localizar los riesgos
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "owasp-top10-php"
  nivel: basico
  stack: "PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF"
---

# OWASP Top 10 aplicado — Básico

## Qué hace este skill

Los diez riesgos críticos aplicados a tu código PHP concreto, uno por uno. En este nivel se entrega: **conocer y localizar los riesgos**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Seguridad web en PHP** (PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **OWASP Top 10 aplicado** dentro de Seguridad web en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Recorrer el OWASP Top 10 (2021) con ejemplos
2. Identificar los riesgos presentes en mi código
3. Corregir los fáciles (config, headers, básicos)

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | conocer y localizar los riesgos | texto | sí | resultado medible |
| $stack | Seguridad web en PHP | texto | sí | 08-php/php-seguridad |
| $tecnologias | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF | texto | sí | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF |
| $tareas_clave | Recorrer el OWASP Top 10 (2021) con ejemplos · Identificar los riesgos presentes en mi código · Corregir los fáciles (config, headers, básicos) | lista | sí | 3-4 pasos |
| $criterios_clave | El usuario explica cada riesgo con su caso · Los riesgos triviales están corregidos | lista | sí | calidad verificable |
| $prompt_guia | Recorre el OWASP Top 10 con mi código e identifica los riesgos presentes | texto | no | "OWASP Top 10 aplicado" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El usuario explica cada riesgo con su caso
- [ ] Los riesgos triviales están corregidos

## Ejemplos de prompts

- "Recorre el OWASP Top 10 con mi código e identifica los riesgos presentes"
- "Aplica OWASP Top 10 aplicado (nivel basico) a mi trabajo actual con Seguridad web en PHP: prioriza El usuario explica cada riesgo con su caso"
- "Revisa mi php-seguridad y dime qué pasos de OWASP Top 10 aplicado me faltan en este nivel"