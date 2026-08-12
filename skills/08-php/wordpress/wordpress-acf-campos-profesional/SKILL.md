---
name: wordpress-acf-campos-profesional
description: ACF: campos y bloques · nivel Profesional · WordPress: temas y plugins. Campos personalizados para clientes sin código: ACF PRO fields, local JSON y bloques dinámicos. Objetivo del nivel: bloques ACF y arquitectura de contenido
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "acf-campos"
  nivel: profesional
  stack: "WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL"
---

# ACF: campos y bloques — Profesional

## Qué hace este skill

Campos personalizados para clientes sin código: ACF PRO fields, local JSON y bloques dinámicos. En este nivel se entrega: **bloques ACF y arquitectura de contenido**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **WordPress: temas y plugins** (WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **ACF: campos y bloques** dentro de WordPress: temas y plugins.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear bloques ACF dinámicos con los campos del editor
2. Diseñar la arquitectura de campos del sitio (coherencia y reutilización)
3. Migrar fields entre entornos y versionar esquemas
4. Rendimiento: minimizar queries de meta y cachear bloques

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | bloques ACF y arquitectura de contenido | texto | sí | resultado medible |
| $stack | WordPress: temas y plugins | texto | sí | 08-php/wordpress |
| $tecnologias | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL | texto | sí | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL |
| $tareas_clave | Crear bloques ACF dinámicos con los campos del editor · Diseñar la arquitectura de campos del sitio (coherencia y reutilización) · Migrar fields entre entornos y versionar esquemas · Rendimiento: minimizar queries de meta y cachear bloques | lista | sí | 3-4 pasos |
| $criterios_clave | La arquitectura de campos está documentada y sin duplicación · Los bloques ACF se cachean sin estancamiento | lista | sí | calidad verificable |
| $prompt_guia | Convierte mis templates de página en bloques ACF dinámicos con arquitectura de campos documentada | texto | no | "ACF: campos y bloques" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La arquitectura de campos está documentada y sin duplicación
- [ ] Los bloques ACF se cachean sin estancamiento

## Ejemplos de prompts

- "Convierte mis templates de página en bloques ACF dinámicos con arquitectura de campos documentada"
- "Aplica ACF: campos y bloques (nivel profesional) a mi trabajo actual con WordPress: temas y plugins: prioriza La arquitectura de campos está documentada y sin duplicación"
- "Revisa mi wordpress y dime qué pasos de ACF: campos y bloques me faltan en este nivel"