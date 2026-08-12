---
name: webservices-php-api-performance-basico
description: Rendimiento de APIs · nivel Básico · Servicios web y APIs en PHP. APIs rápidas: latencia medida, caché por capa, payloads ligeros y presupuestos de p99. Objetivo del nivel: medir la latencia
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "api-performance"
  nivel: basico
  stack: "PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis"
---

# Rendimiento de APIs — Básico

## Qué hace este skill

APIs rápidas: latencia medida, caché por capa, payloads ligeros y presupuestos de p99. En este nivel se entrega: **medir la latencia**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Servicios web y APIs en PHP** (PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Rendimiento de APIs** dentro de Servicios web y APIs en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Medir tiempos por endpoint con microtime/log
2. Identificar respuestas lentas y sus causas
3. Reducir payloads innecesarios

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | medir la latencia | texto | sí | resultado medible |
| $stack | Servicios web y APIs en PHP | texto | sí | 08-php/webservices-php |
| $tecnologias | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis | texto | sí | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis |
| $tareas_clave | Medir tiempos por endpoint con microtime/log · Identificar respuestas lentas y sus causas · Reducir payloads innecesarios | lista | sí | 3-4 pasos |
| $criterios_clave | Los tiempos por endpoint quedan medidos y registrados · Los payloads no envían campos no usados | lista | sí | calidad verificable |
| $prompt_guia | Mide la latencia de mis endpoints y reduce payloads innecesarios | texto | no | "Rendimiento de APIs" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los tiempos por endpoint quedan medidos y registrados
- [ ] Los payloads no envían campos no usados

## Ejemplos de prompts

- "Mide la latencia de mis endpoints y reduce payloads innecesarios"
- "Aplica Rendimiento de APIs (nivel basico) a mi trabajo actual con Servicios web y APIs en PHP: prioriza Los tiempos por endpoint quedan medidos y registrados"
- "Revisa mi webservices-php y dime qué pasos de Rendimiento de APIs me faltan en este nivel"