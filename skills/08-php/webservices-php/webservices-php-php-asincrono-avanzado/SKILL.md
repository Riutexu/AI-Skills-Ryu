---
name: webservices-php-php-asincrono-avanzado
description: PHP asíncrono: Fiber y Swoole · nivel Avanzado · Servicios web y APIs en PHP. Operaciones concurrentes en PHP moderno: Fibers, Swoole/ReactPHP y el modelo correcto según el caso. Objetivo del nivel: Fibers y concurrencia ligera
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "php-asincrono"
  nivel: avanzado
  stack: "PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis"
---

# PHP asíncrono: Fiber y Swoole — Avanzado

## Qué hace este skill

Operaciones concurrentes en PHP moderno: Fibers, Swoole/ReactPHP y el modelo correcto según el caso. En este nivel se entrega: **Fibers y concurrencia ligera**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Servicios web y APIs en PHP** (PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **PHP asíncrono: Fiber y Swoole** dentro de Servicios web y APIs en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar Fibers de PHP 8.1 para concurrencia controlada
2. Ejecutar peticiones HTTP en paralelo (fibers + curl_multi)
3. Manejar límites de concurrencia y errores por tarea
4. Comparar con curl_multi clásico y elegir con criterio

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Fibers y concurrencia ligera | texto | sí | resultado medible |
| $stack | Servicios web y APIs en PHP | texto | sí | 08-php/webservices-php |
| $tecnologias | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis | texto | sí | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis |
| $tareas_clave | Usar Fibers de PHP 8.1 para concurrencia controlada · Ejecutar peticiones HTTP en paralelo (fibers + curl_multi) · Manejar límites de concurrencia y errores por tarea · Comparar con curl_multi clásico y elegir con criterio | lista | sí | 3-4 pasos |
| $criterios_clave | Las llamadas en paralelo reducen el tiempo total medible · Un fallo parcial no aborta el lote | lista | sí | calidad verificable |
| $prompt_guia | Implementa peticiones HTTP en paralelo con Fibers y límite de concurrencia | texto | no | "PHP asíncrono: Fiber y Swoole" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las llamadas en paralelo reducen el tiempo total medible
- [ ] Un fallo parcial no aborta el lote

## Ejemplos de prompts

- "Implementa peticiones HTTP en paralelo con Fibers y límite de concurrencia"
- "Aplica PHP asíncrono: Fiber y Swoole (nivel avanzado) a mi trabajo actual con Servicios web y APIs en PHP: prioriza Las llamadas en paralelo reducen el tiempo total medible"
- "Revisa mi webservices-php y dime qué pasos de PHP asíncrono: Fiber y Swoole me faltan en este nivel"