---
name: laravel-enrutado-controladores-avanzado
description: Enrutado y controladores · nivel Avanzado · Laravel 11: framework productivo. Rutas limpias, controladores delgados y REST coherente con el flujo de Laravel 11. Objetivo del nivel: resource controllers y grupos
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "enrutado-controladores"
  nivel: avanzado
  stack: "Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit"
---

# Enrutado y controladores — Avanzado

## Qué hace este skill

Rutas limpias, controladores delgados y REST coherente con el flujo de Laravel 11. En este nivel se entrega: **resource controllers y grupos**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Laravel 11: framework productivo** (Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Enrutado y controladores** dentro de Laravel 11: framework productivo.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar rutas resource con controllers de 7 acciones
2. Agrupar rutas con middleware, prefijos y nombres
3. Inyectar parámetros en modelos (route model binding)
4. Versionar rutas para coexistencia de API pública

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | resource controllers y grupos | texto | sí | resultado medible |
| $stack | Laravel 11: framework productivo | texto | sí | 08-php/laravel |
| $tecnologias | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit | texto | sí | Laravel 11, Eloquent, Blade, Sanctum, Sail, Pest/PHPUnit |
| $tareas_clave | Usar rutas resource con controllers de 7 acciones · Agrupar rutas con middleware, prefijos y nombres · Inyectar parámetros en modelos (route model binding) · Versionar rutas para coexistencia de API pública | lista | sí | 3-4 pasos |
| $criterios_clave | Las rutas están agrupadas y nombradas coherentemente · El binding de modelo resuelve 404 automático | lista | sí | calidad verificable |
| $prompt_guia | Reorganiza mis rutas: resource controllers, grupos con middleware y route model binding | texto | no | "Enrutado y controladores" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las rutas están agrupadas y nombradas coherentemente
- [ ] El binding de modelo resuelve 404 automático

## Ejemplos de prompts

- "Reorganiza mis rutas: resource controllers, grupos con middleware y route model binding"
- "Aplica Enrutado y controladores (nivel avanzado) a mi trabajo actual con Laravel 11: framework productivo: prioriza Las rutas están agrupadas y nombradas coherentemente"
- "Revisa mi laravel y dime qué pasos de Enrutado y controladores me faltan en este nivel"