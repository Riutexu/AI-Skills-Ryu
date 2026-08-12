---
name: mvc-propio-router-front-controller-avanzado
description: Router y Front Controller · nivel Avanzado · Framework MVC propio. El corazón del patrón: index.php como punto único de entrada y despacho de rutas a controladores. Objetivo del nivel: routing tipado y agrupado
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "router-front-controller"
  nivel: avanzado
  stack: "PHP 8.3, Composer, PDO, PHPUnit, Nginx"
---

# Router y Front Controller — Avanzado

## Qué hace este skill

El corazón del patrón: index.php como punto único de entrada y despacho de rutas a controladores. En este nivel se entrega: **routing tipado y agrupado**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Framework MVC propio** (PHP 8.3, Composer, PDO, PHPUnit, Nginx) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Router y Front Controller** dentro de Framework MVC propio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, PDO, PHPUnit, Nginx**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir rutas en un archivo de configuración declarativo
2. Soportar grupos de rutas con prefijos y middleware
3. Resolver nombres de ruta (named routes) para links
4. Convertir valores de ruta a tipos (int/string/validaciones)

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | routing tipado y agrupado | texto | sí | resultado medible |
| $stack | Framework MVC propio | texto | sí | 08-php/mvc-propio |
| $tecnologias | PHP 8.3, Composer, PDO, PHPUnit, Nginx | texto | sí | PHP 8.3, Composer, PDO, PHPUnit, Nginx |
| $tareas_clave | Definir rutas en un archivo de configuración declarativo · Soportar grupos de rutas con prefijos y middleware · Resolver nombres de ruta (named routes) para links · Convertir valores de ruta a tipos (int/string/validaciones) | lista | sí | 3-4 pasos |
| $criterios_clave | Las rutas se registran en config y se resuelven por nombre · El despacho valida tipos de parámetros | lista | sí | calidad verificable |
| $prompt_guia | Evoluciona mi router: rutas declarativas, grupos con middleware y named routes | texto | no | "Router y Front Controller" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las rutas se registran en config y se resuelven por nombre
- [ ] El despacho valida tipos de parámetros

## Ejemplos de prompts

- "Evoluciona mi router: rutas declarativas, grupos con middleware y named routes"
- "Aplica Router y Front Controller (nivel avanzado) a mi trabajo actual con Framework MVC propio: prioriza Las rutas se registran en config y se resuelven por nombre"
- "Revisa mi mvc-propio y dime qué pasos de Router y Front Controller me faltan en este nivel"