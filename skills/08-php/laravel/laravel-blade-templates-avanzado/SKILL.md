---
name: laravel-blade-templates-avanzado
description: Blade y plantillas · nivel Avanzado · Laravel 11: framework productivo. Vistas componibles y seguras con Blade: layouts, componentes, slots y escape automático. Objetivo del nivel: componentes y slots
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "blade-templates"
  nivel: avanzado
  stack: "Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit"
---

# Blade y plantillas — Avanzado

## Qué hace este skill

Vistas componibles y seguras con Blade: layouts, componentes, slots y escape automático. En este nivel se entrega: **componentes y slots**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Laravel 11: framework productivo** (Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Blade y plantillas** dentro de Laravel 11: framework productivo.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear componentes Blade con props y atributos
2. Usar slots para contenido transparente y composición
3. Organizar componentes anónimos y con atributos de clase
4. Manejar partials y stacks (@push/@stack) para scripts

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | componentes y slots | texto | sí | resultado medible |
| $stack | Laravel 11: framework productivo | texto | sí | 08-php/laravel |
| $tecnologias | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit | texto | sí | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit |
| $tareas_clave | Crear componentes Blade con props y atributos · Usar slots para contenido transparente y composición · Organizar componentes anónimos y con atributos de clase · Manejar partials y stacks (@push/@stack) para scripts | lista | sí | 3-4 pasos |
| $criterios_clave | La UI crítica está compuesta de componentes reutilizables · Los scripts de página se inyectan sin romper el orden de carga | lista | sí | calidad verificable |
| $prompt_guia | Convierte mi interfaz en componentes Blade con slots, y organiza los scripts con @push/@stack | texto | no | "Blade y plantillas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La UI crítica está compuesta de componentes reutilizables
- [ ] Los scripts de página se inyectan sin romper el orden de carga

## Ejemplos de prompts

- "Convierte mi interfaz en componentes Blade con slots, y organiza los scripts con @push/@stack"
- "Aplica Blade y plantillas (nivel avanzado) a mi trabajo actual con Laravel 11: framework productivo: prioriza La UI crítica está compuesta de componentes reutilizables"
- "Revisa mi laravel y dime qué pasos de Blade y plantillas me faltan en este nivel"