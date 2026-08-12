---
name: webservices-php-versionado-api-avanzado
description: Versionado de APIs · nivel Avanzado · Servicios web y APIs en PHP. Evolucionar sin romper clientes: versionado por URL/header, deprecaciones y estrategias de transición. Objetivo del nivel: deprecaciones y transición
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "versionado-api"
  nivel: avanzado
  stack: "PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis"
---

# Versionado de APIs — Avanzado

## Qué hace este skill

Evolucionar sin romper clientes: versionado por URL/header, deprecaciones y estrategias de transición. En este nivel se entrega: **deprecaciones y transición**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Servicios web y APIs en PHP** (PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Versionado de APIs** dentro de Servicios web y APIs en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Deprecar campos y endpoints con headers/avisos
2. Definir plazos y política de deprecación
3. Migrar clientes internos con feature flags
4. Eliminar v1 solo con métricas de uso cero

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | deprecaciones y transición | texto | sí | resultado medible |
| $stack | Servicios web y APIs en PHP | texto | sí | 08-php/webservices-php |
| $tecnologias | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis | texto | sí | PHP 8.3, JSON, cURL, JWT, OpenAPI, Redis |
| $tareas_clave | Deprecar campos y endpoints con headers/avisos · Definir plazos y política de deprecación · Migrar clientes internos con feature flags · Eliminar v1 solo con métricas de uso cero | lista | sí | 3-4 pasos |
| $criterios_clave | Los clientes ven avisos de deprecación con fechas · La eliminación de v1 se decide por métricas | lista | sí | calidad verificable |
| $prompt_guia | Planifica la deprecación de mi v1 con avisos, plazos y migración por feature flags | texto | no | "Versionado de APIs" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los clientes ven avisos de deprecación con fechas
- [ ] La eliminación de v1 se decide por métricas

## Ejemplos de prompts

- "Planifica la deprecación de mi v1 con avisos, plazos y migración por feature flags"
- "Aplica Versionado de APIs (nivel avanzado) a mi trabajo actual con Servicios web y APIs en PHP: prioriza Los clientes ven avisos de deprecación con fechas"
- "Revisa mi webservices-php y dime qué pasos de Versionado de APIs me faltan en este nivel"