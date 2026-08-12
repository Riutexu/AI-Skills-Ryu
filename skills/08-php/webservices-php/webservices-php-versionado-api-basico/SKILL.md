---
name: webservices-php-versionado-api-basico
description: Versionado de APIs · nivel Básico · Servicios web y APIs en PHP. Evolucionar sin romper clientes: versionado por URL/header, deprecaciones y estrategias de transición. Objetivo del nivel: versionar por URL
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "versionado-api"
  nivel: basico
  stack: "PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis"
---

# Versionado de APIs — Básico

## Qué hace este skill

Evolucionar sin romper clientes: versionado por URL/header, deprecaciones y estrategias de transición. En este nivel se entrega: **versionar por URL**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Servicios web y APIs en PHP** (PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Versionado de APIs** dentro de Servicios web y APIs en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Añadir /v1/ a las rutas de la API
2. Mantener la v1 estable mientras llega la v2
3. Documentar la versión actual

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | versionar por URL | texto | sí | resultado medible |
| $stack | Servicios web y APIs en PHP | texto | sí | 08-php/webservices-php |
| $tecnologias | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis | texto | sí | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis |
| $tareas_clave | Añadir /v1/ a las rutas de la API · Mantener la v1 estable mientras llega la v2 · Documentar la versión actual | lista | sí | 3-4 pasos |
| $criterios_clave | v1 y v2 coexisten en el mismo despliegue · La documentación indica la versión | lista | sí | calidad verificable |
| $prompt_guia | Versiona mi API por URL con v1/v2 coexistiendo | texto | no | "Versionado de APIs" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] v1 y v2 coexisten en el mismo despliegue
- [ ] La documentación indica la versión

## Ejemplos de prompts

- "Versiona mi API por URL con v1/v2 coexistiendo"
- "Aplica Versionado de APIs (nivel basico) a mi trabajo actual con Servicios web y APIs en PHP: prioriza v1 y v2 coexisten en el mismo despliegue"
- "Revisa mi webservices-php y dime qué pasos de Versionado de APIs me faltan en este nivel"