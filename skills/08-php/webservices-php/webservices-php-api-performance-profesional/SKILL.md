---
name: webservices-php-api-performance-profesional
description: Rendimiento de APIs · nivel Profesional · Servicios web y APIs en PHP. APIs rápidas: latencia medida, caché por capa, payloads ligeros y presupuestos de p99. Objetivo del nivel: presupuestos de latencia
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "api-performance"
  nivel: profesional
  stack: "PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis"
---

# Rendimiento de APIs — Profesional

## Qué hace este skill

APIs rápidas: latencia medida, caché por capa, payloads ligeros y presupuestos de p99. En este nivel se entrega: **presupuestos de latencia**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Servicios web y APIs en PHP** (PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Rendimiento de APIs** dentro de Servicios web y APIs en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir SLOs de latencia por endpoint y monitorizarlos
2. Realizar pruebas de carga y corregir cuellos
3. Cachear con CDN/edge cuando el caso lo justifica
4. Producir informe de rendimiento ejecutivo

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | presupuestos de latencia | texto | sí | resultado medible |
| $stack | Servicios web y APIs en PHP | texto | sí | 08-php/webservices-php |
| $tecnologias | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis | texto | sí | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis |
| $tareas_clave | Definir SLOs de latencia por endpoint y monitorizarlos · Realizar pruebas de carga y corregir cuellos · Cachear con CDN/edge cuando el caso lo justifica · Producir informe de rendimiento ejecutivo | lista | sí | 3-4 pasos |
| $criterios_clave | Los SLOs se monitorizan y alertan · La prueba de carga valida la capacidad esperada | lista | sí | calidad verificable |
| $prompt_guia | Establece SLOs de latencia para mi API, carga con k6 y elabora el informe ejecutivo | texto | no | "Rendimiento de APIs" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los SLOs se monitorizan y alertan
- [ ] La prueba de carga valida la capacidad esperada

## Ejemplos de prompts

- "Establece SLOs de latencia para mi API, carga con k6 y elabora el informe ejecutivo"
- "Aplica Rendimiento de APIs (nivel profesional) a mi trabajo actual con Servicios web y APIs en PHP: prioriza Los SLOs se monitorizan y alertan"
- "Revisa mi webservices-php y dime qué pasos de Rendimiento de APIs me faltan en este nivel"