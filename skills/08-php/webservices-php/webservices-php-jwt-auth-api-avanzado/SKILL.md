---
name: webservices-php-jwt-auth-api-avanzado
description: JWT y autenticación de API · nivel Avanzado · Servicios web y APIs en PHP. Autenticación sin estado bien hecha: tokens firmados, expiración, refresh y revocación cuando toca. Objetivo del nivel: refresh y revocación
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "jwt-auth-api"
  nivel: avanzado
  stack: "PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis"
---

# JWT y autenticación de API — Avanzado

## Qué hace este skill

Autenticación sin estado bien hecha: tokens firmados, expiración, refresh y revocación cuando toca. En este nivel se entrega: **refresh y revocación**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Servicios web y APIs en PHP** (PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **JWT y autenticación de API** dentro de Servicios web y APIs en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar flujo access+refresh con rotación
2. Revocar tokens por lista negra (Redis) cuando aplica
3. Separar audiencias (aud) por servicio
4. Manejar clock skew y leeway correctamente

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | refresh y revocación | texto | sí | resultado medible |
| $stack | Servicios web y APIs en PHP | texto | sí | 08-php/webservices-php |
| $tecnologias | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis | texto | sí | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis |
| $tareas_clave | Diseñar flujo access+refresh con rotación · Revocar tokens por lista negra (Redis) cuando aplica · Separar audiencias (aud) por servicio · Manejar clock skew y leeway correctamente | lista | sí | 3-4 pasos |
| $criterios_clave | El refresh rota y reutilizar un refresh revocado falla · La revocación actúa en <1s para casos de seguridad | lista | sí | calidad verificable |
| $prompt_guia | Diseña el flujo access/refresh con rotación y revocación por lista negra en mi API | texto | no | "JWT y autenticación de API" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El refresh rota y reutilizar un refresh revocado falla
- [ ] La revocación actúa en <1s para casos de seguridad

## Ejemplos de prompts

- "Diseña el flujo access/refresh con rotación y revocación por lista negra en mi API"
- "Aplica JWT y autenticación de API (nivel avanzado) a mi trabajo actual con Servicios web y APIs en PHP: prioriza El refresh rota y reutilizar un refresh revocado falla"
- "Revisa mi webservices-php y dime qué pasos de JWT y autenticación de API me faltan en este nivel"