---
name: wordpress-instalacion-configuracion-profesional
description: Instalación y configuración · nivel Profesional · WordPress: temas y plugins. WordPress limpio y explotado: instalación local, wp-config, permalinks y estructura del core. Objetivo del nivel: infraestructura WordPress a escala
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "instalacion-configuracion"
  nivel: profesional
  stack: "WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL"
---

# Instalación y configuración — Profesional

## Qué hace este skill

WordPress limpio y explotado: instalación local, wp-config, permalinks y estructura del core. En este nivel se entrega: **infraestructura WordPress a escala**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **WordPress: temas y plugins** (WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Instalación y configuración** dentro de WordPress: temas y plugins.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Arquitectura de escalado: CDN, object cache y PHP-FPM
2. Estrategias de despliegue (Git + composer woocommerce deployment)
3. Monitorización de sitios portfolio (uptime, plugins, versions)
4. Respuesta ante incidentes y rollback documentado

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | infraestructura WordPress a escala | texto | sí | resultado medible |
| $stack | WordPress: temas y plugins | texto | sí | 08-php/wordpress |
| $tecnologias | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL | texto | sí | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL |
| $tareas_clave | Arquitectura de escalado: CDN, object cache y PHP-FPM · Estrategias de despliegue (Git + composer woocommerce deployment) · Monitorización de sitios portfolio (uptime, plugins, versions) · Respuesta ante incidentes y rollback documentado | lista | sí | 3-4 pasos |
| $criterios_clave | El stack aguanta picos con object cache y CDN (prueba) · Un despliegue Git-driven reproduce el sitio en otra infra | lista | sí | calidad verificable |
| $prompt_guia | Diseña la infraestructura escalable de mis sitios WordPress: Git deploy, object cache, CDN y monitorización | texto | no | "Instalación y configuración" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El stack aguanta picos con object cache y CDN (prueba)
- [ ] Un despliegue Git-driven reproduce el sitio en otra infra

## Ejemplos de prompts

- "Diseña la infraestructura escalable de mis sitios WordPress: Git deploy, object cache, CDN y monitorización"
- "Aplica Instalación y configuración (nivel profesional) a mi trabajo actual con WordPress: temas y plugins: prioriza El stack aguanta picos con object cache y CDN (prueba)"
- "Revisa mi wordpress y dime qué pasos de Instalación y configuración me faltan en este nivel"