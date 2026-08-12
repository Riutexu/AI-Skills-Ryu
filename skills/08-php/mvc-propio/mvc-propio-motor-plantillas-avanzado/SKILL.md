---
name: mvc-propio-motor-plantillas-avanzado
description: Motor de plantillas · nivel Avanzado · Framework MVC propio. Vistas seguras sin PHP crudo: motor propio con layouts, secciones y escape automático. Objetivo del nivel: funciones helpers y composición
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "motor-plantillas"
  nivel: avanzado
  stack: "PHP 8.3, Composer, PDO, PHPUnit, Nginx"
---

# Motor de plantillas — Avanzado

## Qué hace este skill

Vistas seguras sin PHP crudo: motor propio con layouts, secciones y escape automático. En este nivel se entrega: **funciones helpers y composición**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Framework MVC propio** (PHP 8.3, Composer, PDO, PHPUnit, Nginx) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Motor de plantillas** dentro de Framework MVC propio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, PDO, PHPUnit, Nginx**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear helpers de plantilla (url, asset, csrf)
2. Componer vistas parciales y componentes
3. Implementar cache de vistas compiladas para rendimiento
4. Manejar errores de vista con páginas bonitas (500/404 personalizadas)

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | funciones helpers y composición | texto | sí | resultado medible |
| $stack | Framework MVC propio | texto | sí | 08-php/mvc-propio |
| $tecnologias | PHP 8.3, Composer, PDO, PHPUnit, Nginx | texto | sí | PHP 8.3, Composer, PDO, PHPUnit, Nginx |
| $tareas_clave | Crear helpers de plantilla (url, asset, csrf) · Componer vistas parciales y componentes · Implementar cache de vistas compiladas para rendimiento · Manejar errores de vista con páginas bonitas (500/404 personalizadas) | lista | sí | 3-4 pasos |
| $criterios_clave | Los helpers se usan en toda la app y son testables · Las vistas compiladas se cachean y se invalidan con el código | lista | sí | calidad verificable |
| $prompt_guia | Añade helpers url/asset/csrf y caché de vistas compiladas a mi motor de plantillas | texto | no | "Motor de plantillas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los helpers se usan en toda la app y son testables
- [ ] Las vistas compiladas se cachean y se invalidan con el código

## Ejemplos de prompts

- "Añade helpers url/asset/csrf y caché de vistas compiladas a mi motor de plantillas"
- "Aplica Motor de plantillas (nivel avanzado) a mi trabajo actual con Framework MVC propio: prioriza Los helpers se usan en toda la app y son testables"
- "Revisa mi mvc-propio y dime qué pasos de Motor de plantillas me faltan en este nivel"