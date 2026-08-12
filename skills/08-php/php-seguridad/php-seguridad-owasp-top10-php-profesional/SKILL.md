---
name: php-seguridad-owasp-top10-php-profesional
description: OWASP Top 10 aplicado · nivel Profesional · Seguridad web en PHP. Los diez riesgos críticos aplicados a tu código PHP concreto, uno por uno. Objetivo del nivel: programa de seguridad
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "owasp-top10-php"
  nivel: profesional
  stack: "PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF"
---

# OWASP Top 10 aplicado — Profesional

## Qué hace este skill

Los diez riesgos críticos aplicados a tu código PHP concreto, uno por uno. En este nivel se entrega: **programa de seguridad**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Seguridad web en PHP** (PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **OWASP Top 10 aplicado** dentro de Seguridad web en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Construir el plan de aplicación del Top 10 como programa
2. Automatizar escaneos (DAST/SAST) en CI
3. Medir el avance por categoría y reportar
4. Mantener el plan con revisiones anuales

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | programa de seguridad | texto | sí | resultado medible |
| $stack | Seguridad web en PHP | texto | sí | 08-php/php-seguridad |
| $tecnologias | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF | texto | sí | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF |
| $tareas_clave | Construir el plan de aplicación del Top 10 como programa · Automatizar escaneos (DAST/SAST) en CI · Medir el avance por categoría y reportar · Mantener el plan con revisiones anuales | lista | sí | 3-4 pasos |
| $criterios_clave | El programa tiene métricas y reportes periódicos · Los escaneos automatizados cubren las rutas críticas | lista | sí | calidad verificable |
| $prompt_guia | Construye el programa OWASP de mi plataforma: plan, escaneos en CI y métricas | texto | no | "OWASP Top 10 aplicado" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El programa tiene métricas y reportes periódicos
- [ ] Los escaneos automatizados cubren las rutas críticas

## Ejemplos de prompts

- "Construye el programa OWASP de mi plataforma: plan, escaneos en CI y métricas"
- "Aplica OWASP Top 10 aplicado (nivel profesional) a mi trabajo actual con Seguridad web en PHP: prioriza El programa tiene métricas y reportes periódicos"
- "Revisa mi php-seguridad y dime qué pasos de OWASP Top 10 aplicado me faltan en este nivel"