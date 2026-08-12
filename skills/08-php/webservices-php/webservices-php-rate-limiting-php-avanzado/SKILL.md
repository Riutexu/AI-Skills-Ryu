---
name: webservices-php-rate-limiting-php-avanzado
description: Rate limiting y throttling · nivel Avanzado · Servicios web y APIs en PHP. Proteger APIs de abuso: límites por clave, ventanas, colas y respuestas 429 correctas. Objetivo del nivel: límites por clave y ventanas deslizantes
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "rate-limiting-php"
  nivel: avanzado
  stack: "PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis"
---

# Rate limiting y throttling — Avanzado

## Qué hace este skill

Proteger APIs de abuso: límites por clave, ventanas, colas y respuestas 429 correctas. En este nivel se entrega: **límites por clave y ventanas deslizantes**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Servicios web y APIs en PHP** (PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Rate limiting y throttling** dentro de Servicios web y APIs en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Limitar por API key y por usuario con cuotas
2. Implementar ventana deslizante con Redis
3. Distinguir límites por endpoint (sensible vs barato)
4. Degradar con colas en lugar de bloquear cuando aplica

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | límites por clave y ventanas deslizantes | texto | sí | resultado medible |
| $stack | Servicios web y APIs en PHP | texto | sí | 08-php/webservices-php |
| $tecnologias | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis | texto | sí | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis |
| $tareas_clave | Limitar por API key y por usuario con cuotas · Implementar ventana deslizante con Redis · Distinguir límites por endpoint (sensible vs barato) · Degradar con colas en lugar de bloquear cuando aplica | lista | sí | 3-4 pasos |
| $criterios_clave | Las cuotas por key se respetan de forma distribuida · Los endpoints sensibles tienen límites menores verificados | lista | sí | calidad verificable |
| $prompt_guia | Implementa rate limiting distribuido por key con ventanas deslizantes en Redis y cuotas por endpoint | texto | no | "Rate limiting y throttling" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las cuotas por key se respetan de forma distribuida
- [ ] Los endpoints sensibles tienen límites menores verificados

## Ejemplos de prompts

- "Implementa rate limiting distribuido por key con ventanas deslizantes en Redis y cuotas por endpoint"
- "Aplica Rate limiting y throttling (nivel avanzado) a mi trabajo actual con Servicios web y APIs en PHP: prioriza Las cuotas por key se respetan de forma distribuida"
- "Revisa mi webservices-php y dime qué pasos de Rate limiting y throttling me faltan en este nivel"