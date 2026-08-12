---
name: mvc-propio-router-front-controller-profesional
description: Router y Front Controller · nivel Profesional · Framework MVC propio. El corazón del patrón: index.php como punto único de entrada y despacho de rutas a controladores. Objetivo del nivel: router como librería
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "router-front-controller"
  nivel: profesional
  stack: "PHP 8.3, Composer, PDO, PHPUnit, Nginx"
---

# Router y Front Controller — Profesional

## Qué hace este skill

El corazón del patrón: index.php como punto único de entrada y despacho de rutas a controladores. En este nivel se entrega: **router como librería**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Framework MVC propio** (PHP 8.3, Composer, PDO, PHPUnit, Nginx) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Router y Front Controller** dentro de Framework MVC propio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, PDO, PHPUnit, Nginx**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar la API pública del router (contratos y excepciones)
2. Implementar resolución de rutas dinámicas (regex priorities) con benchmarks
3. Soportar middlewares en cadena con bloqueo selectivo
4. Documentar y publicar el router como paquete Composer instalable

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | router como librería | texto | sí | resultado medible |
| $stack | Framework MVC propio | texto | sí | 08-php/mvc-propio |
| $tecnologias | PHP 8.3, Composer, PDO, PHPUnit, Nginx | texto | sí | PHP 8.3, Composer, PDO, PHPUnit, Nginx |
| $tareas_clave | Diseñar la API pública del router (contratos y excepciones) · Implementar resolución de rutas dinámicas (regex priorities) con benchmarks · Soportar middlewares en cadena con bloqueo selectivo · Documentar y publicar el router como paquete Composer instalable | lista | sí | 3-4 pasos |
| $criterios_clave | El enrutamiento de 10k rutas resuelve en ms (benchmark documentado) · El paquete se instala en otro proyecto y funciona | lista | sí | calidad verificable |
| $prompt_guia | Publica mi router como librería Composer con contratos, middlewares y benchmark de rendimiento | texto | no | "Router y Front Controller" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El enrutamiento de 10k rutas resuelve en ms (benchmark documentado)
- [ ] El paquete se instala en otro proyecto y funciona

## Ejemplos de prompts

- "Publica mi router como librería Composer con contratos, middlewares y benchmark de rendimiento"
- "Aplica Router y Front Controller (nivel profesional) a mi trabajo actual con Framework MVC propio: prioriza El enrutamiento de 10k rutas resuelve en ms (benchmark documentado)"
- "Revisa mi mvc-propio y dime qué pasos de Router y Front Controller me faltan en este nivel"