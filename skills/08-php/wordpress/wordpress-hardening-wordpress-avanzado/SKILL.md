---
name: wordpress-hardening-wordpress-avanzado
description: Seguridad y hardening · nivel Avanzado · WordPress: temas y plugins. Endurecer WordPress de verdad: usuarios, archivos, plugins, login y la superficie de ataque. Objetivo del nivel: defensa en profundidad
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "hardening-wordpress"
  nivel: avanzado
  stack: "WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL"
---

# Seguridad y hardening — Avanzado

## Qué hace este skill

Endurecer WordPress de verdad: usuarios, archivos, plugins, login y la superficie de ataque. En este nivel se entrega: **defensa en profundidad**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **WordPress: temas y plugins** (WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Seguridad y hardening** dentro de WordPress: temas y plugins.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Proteger login contra fuerza bruta (rate limit, 2FA si aplica)
2. Configurar cabeceras de seguridad (CSP, X-Frame, etc.)
3. Endurecer la BD y el usuario de BD de WordPress
4. Auditar plugins y actualizaciones con política

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | defensa en profundidad | texto | sí | resultado medible |
| $stack | WordPress: temas y plugins | texto | sí | 08-php/wordpress |
| $tecnologias | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL | texto | sí | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL |
| $tareas_clave | Proteger login contra fuerza bruta (rate limit, 2FA si aplica) · Configurar cabeceras de seguridad (CSP, X-Frame, etc.) · Endurecer la BD y el usuario de BD de WordPress · Auditar plugins y actualizaciones con política | lista | sí | 3-4 pasos |
| $criterios_clave | El login resiste un ataque de fuerza bruta básico · Las cabeceras de seguridad están presentes y probadas | lista | sí | calidad verificable |
| $prompt_guia | Implementa defensa en profundidad en mi WordPress: anti fuerza bruta, cabeceras de seguridad y pulido de BD | texto | no | "Seguridad y hardening" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El login resiste un ataque de fuerza bruta básico
- [ ] Las cabeceras de seguridad están presentes y probadas

## Ejemplos de prompts

- "Implementa defensa en profundidad en mi WordPress: anti fuerza bruta, cabeceras de seguridad y pulido de BD"
- "Aplica Seguridad y hardening (nivel avanzado) a mi trabajo actual con WordPress: temas y plugins: prioriza El login resiste un ataque de fuerza bruta básico"
- "Revisa mi wordpress y dime qué pasos de Seguridad y hardening me faltan en este nivel"