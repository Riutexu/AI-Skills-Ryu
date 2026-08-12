---
name: wordpress-hardening-wordpress-basico
description: Seguridad y hardening · nivel Básico · WordPress: temas y plugins. Endurecer WordPress de verdad: usuarios, archivos, plugins, login y la superficie de ataque. Objetivo del nivel: basics de seguridad de sitio
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "hardening-wordpress"
  nivel: basico
  stack: "WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL"
---

# Seguridad y hardening — Básico

## Qué hace este skill

Endurecer WordPress de verdad: usuarios, archivos, plugins, login y la superficie de ataque. En este nivel se entrega: **basics de seguridad de sitio**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **WordPress: temas y plugins** (WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Seguridad y hardening** dentro de WordPress: temas y plugins.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Fijar permisos de archivos y secretos (wp-config)
2. Eliminar usuarios/plugins innecesarios
3. Activar HTTPS y forzar login seguro
4. Hacer backups básicos y comprobar restauración

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | basics de seguridad de sitio | texto | sí | resultado medible |
| $stack | WordPress: temas y plugins | texto | sí | 08-php/wordpress |
| $tecnologias | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL | texto | sí | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL |
| $tareas_clave | Fijar permisos de archivos y secretos (wp-config) · Eliminar usuarios/plugins innecesarios · Activar HTTPS y forzar login seguro · Hacer backups básicos y comprobar restauración | lista | sí | 3-4 pasos |
| $criterios_clave | Permisos de archivos correctos y sin credenciales en repos · Una restauración de backup se prueba en staging | lista | sí | calidad verificable |
| $prompt_guia | Endurece lo básico de mi WordPress: permisos, limpieza de usuarios, HTTPS y backup probado | texto | no | "Seguridad y hardening" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Permisos de archivos correctos y sin credenciales en repos
- [ ] Una restauración de backup se prueba en staging

## Ejemplos de prompts

- "Endurece lo básico de mi WordPress: permisos, limpieza de usuarios, HTTPS y backup probado"
- "Aplica Seguridad y hardening (nivel basico) a mi trabajo actual con WordPress: temas y plugins: prioriza Permisos de archivos correctos y sin credenciales en repos"
- "Revisa mi wordpress y dime qué pasos de Seguridad y hardening me faltan en este nivel"