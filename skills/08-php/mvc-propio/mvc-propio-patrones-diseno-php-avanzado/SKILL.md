---
name: mvc-propio-patrones-diseno-php-avanzado
description: Patrones de diseño útiles · nivel Avanzado · Framework MVC propio. Los patrones que de verdad se usan en PHP: Factory, Repository, Strategy, Observer y más. Objetivo del nivel: patrones estructurales
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "patrones-diseno-php"
  nivel: avanzado
  stack: "PHP 8.3, Composer, PDO, PHPUnit, Nginx"
---

# Patrones de diseño útiles — Avanzado

## Qué hace este skill

Los patrones que de verdad se usan en PHP: Factory, Repository, Strategy, Observer y más. En este nivel se entrega: **patrones estructurales**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Framework MVC propio** (PHP 8.3, Composer, PDO, PHPUnit, Nginx) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Patrones de diseño útiles** dentro de Framework MVC propio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, PDO, PHPUnit, Nginx**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Implementar Adapter y Decorator para integraciones
2. Usar Observer/Eventos para desacoplar efectos secundarios
3. Aplicar Template Method y Builder donde aportan
4. Evitar anti-patrones (Singleton global, God object)

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | patrones estructurales | texto | sí | resultado medible |
| $stack | Framework MVC propio | texto | sí | 08-php/mvc-propio |
| $tecnologias | PHP 8.3, Composer, PDO, PHPUnit, Nginx | texto | sí | PHP 8.3, Composer, PDO, PHPUnit, Nginx |
| $tareas_clave | Implementar Adapter y Decorator para integraciones · Usar Observer/Eventos para desacoplar efectos secundarios · Aplicar Template Method y Builder donde aportan · Evitar anti-patrones (Singleton global, God object) | lista | sí | 3-4 pasos |
| $criterios_clave | Las integraciones externas pasan por Adapters testables · Los efectos secundarios se encadenan por eventos | lista | sí | calidad verificable |
| $prompt_guia | Desacopla mis integraciones con Adapter/Decorator y eventos Observer, evitando Singletons globales | texto | no | "Patrones de diseño útiles" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las integraciones externas pasan por Adapters testables
- [ ] Los efectos secundarios se encadenan por eventos

## Ejemplos de prompts

- "Desacopla mis integraciones con Adapter/Decorator y eventos Observer, evitando Singletons globales"
- "Aplica Patrones de diseño útiles (nivel avanzado) a mi trabajo actual con Framework MVC propio: prioriza Las integraciones externas pasan por Adapters testables"
- "Revisa mi mvc-propio y dime qué pasos de Patrones de diseño útiles me faltan en este nivel"