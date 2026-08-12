---
name: webservices-php-jwt-auth-api-basico
description: JWT y autenticación de API · nivel Básico · Servicios web y APIs en PHP. Autenticación sin estado bien hecha: tokens firmados, expiración, refresh y revocación cuando toca. Objetivo del nivel: emitir y verificar JWT
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "jwt-auth-api"
  nivel: basico
  stack: "PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis"
---

# JWT y autenticación de API — Básico

## Qué hace este skill

Autenticación sin estado bien hecha: tokens firmados, expiración, refresh y revocación cuando toca. En este nivel se entrega: **emitir y verificar JWT**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Servicios web y APIs en PHP** (PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **JWT y autenticación de API** dentro de Servicios web y APIs en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Emitir JWT firmados (HS256) al login
2. Verificar en middleware y rechazar inválidos
3. Incluir exp y claims básicos

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | emitir y verificar JWT | texto | sí | resultado medible |
| $stack | Servicios web y APIs en PHP | texto | sí | 08-php/webservices-php |
| $tecnologias | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis | texto | sí | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis |
| $tareas_clave | Emitir JWT firmados (HS256) al login · Verificar en middleware y rechazar inválidos · Incluir exp y claims básicos | lista | sí | 3-4 pasos |
| $criterios_clave | Los tokens expirados se rechazan con 401 · El payload no contiene datos sensibles | lista | sí | calidad verificable |
| $prompt_guia | Implementa JWT HS256 en mi API: emisión al login y verificación en middleware | texto | no | "JWT y autenticación de API" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los tokens expirados se rechazan con 401
- [ ] El payload no contiene datos sensibles

## Ejemplos de prompts

- "Implementa JWT HS256 en mi API: emisión al login y verificación en middleware"
- "Aplica JWT y autenticación de API (nivel basico) a mi trabajo actual con Servicios web y APIs en PHP: prioriza Los tokens expirados se rechazan con 401"
- "Revisa mi webservices-php y dime qué pasos de JWT y autenticación de API me faltan en este nivel"