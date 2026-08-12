---
name: webservices-php-jwt-auth-api-profesional
description: JWT y autenticación de API · nivel Profesional · Servicios web y APIs en PHP. Autenticación sin estado bien hecha: tokens firmados, expiración, refresh y revocación cuando toca. Objetivo del nivel: auth de API a escala
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "jwt-auth-api"
  nivel: profesional
  stack: "PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis"
---

# JWT y autenticación de API — Profesional

## Qué hace este skill

Autenticación sin estado bien hecha: tokens firmados, expiración, refresh y revocación cuando toca. En este nivel se entrega: **auth de API a escala**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Servicios web y APIs en PHP** (PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **JWT y autenticación de API** dentro de Servicios web y APIs en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Evaluar JWT vs sesiones vs OAuth2 por caso (ADR)
2. Claves públicas (RS256) y rotación de firmas sin downtime
3. Auditar el ciclo de vida completo de tokens
4. Integrar con OAuth2 (authorization code) si hay terceros

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | auth de API a escala | texto | sí | resultado medible |
| $stack | Servicios web y APIs en PHP | texto | sí | 08-php/webservices-php |
| $tecnologias | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis | texto | sí | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis |
| $tareas_clave | Evaluar JWT vs sesiones vs OAuth2 por caso (ADR) · Claves públicas (RS256) y rotación de firmas sin downtime · Auditar el ciclo de vida completo de tokens · Integrar con OAuth2 (authorization code) si hay terceros | lista | sí | 3-4 pasos |
| $criterios_clave | La rotación de claves no invalida tokens válidos en vuelo · El ADR justifica el mecanismo elegido | lista | sí | calidad verificable |
| $prompt_guia | Decide y diseña la autenticación de mi API a escala: JWT vs OAuth2 con ADR y rotación de claves | texto | no | "JWT y autenticación de API" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La rotación de claves no invalida tokens válidos en vuelo
- [ ] El ADR justifica el mecanismo elegido

## Ejemplos de prompts

- "Decide y diseña la autenticación de mi API a escala: JWT vs OAuth2 con ADR y rotación de claves"
- "Aplica JWT y autenticación de API (nivel profesional) a mi trabajo actual con Servicios web y APIs en PHP: prioriza La rotación de claves no invalida tokens válidos en vuelo"
- "Revisa mi webservices-php y dime qué pasos de JWT y autenticación de API me faltan en este nivel"