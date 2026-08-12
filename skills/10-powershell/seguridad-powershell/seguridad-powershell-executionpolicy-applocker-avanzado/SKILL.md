---
name: seguridad-powershell-executionpolicy-applocker-avanzado
description: ExecutionPolicy y AppLocker · nivel Avanzado · Seguridad y hardening. Políticas de ejecución de scripts: niveles, scopes, bypass responsable y AppLocker como control fino. Objetivo del nivel: Bypass responsable y políticas por GPO para entornos gestionados
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "executionpolicy-applocker"
  nivel: avanzado
  stack: "ExecutionPolicy, firma de scripts, SecureString, Windows 11"
---

# ExecutionPolicy y AppLocker — Avanzado

## Qué hace este skill

Políticas de ejecución de scripts: niveles, scopes, bypass responsable y AppLocker como control fino. En este nivel se entrega: **Bypass responsable y políticas por GPO para entornos gestionados**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Seguridad y hardening** (ExecutionPolicy, firma de scripts, SecureString, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **ExecutionPolicy y AppLocker** dentro de Seguridad y hardening.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **ExecutionPolicy, firma de scripts, SecureString, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar -ExecutionPolicy Bypass solo por proceso puntual
2. Aplicar políticas vía GPO y ver cómo se reflejan
3. Entender la precedencia de scopes
4. Verificar el efecto real con Get-ExecutionPolicy

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Bypass responsable y políticas por GPO para entornos gestionados | texto | sí | resultado medible |
| $stack | Seguridad y hardening | texto | sí | 10-powershell/seguridad-powershell |
| $tecnologias | ExecutionPolicy, firma de scripts, SecureString, Windows 11 | texto | sí | ExecutionPolicy, firma de scripts, SecureString, Windows 11 |
| $tareas_clave | Usar -ExecutionPolicy Bypass solo por proceso puntual · Aplicar políticas vía GPO y ver cómo se reflejan · Entender la precedencia de scopes · Verificar el efecto real con Get-ExecutionPolicy | lista | sí | 3-4 pasos |
| $criterios_clave | Los bypass son puntuales y documentados · Las políticas GPO se verifican y se respetan | lista | sí | calidad verificable |
| $prompt_guia | Quiero endurecer la política de ejecución de mis equipos: mostrame cómo se aplica por GPO, cómo verificarla y cuándo un -ExecutionPolicy Bypass puntual es aceptable. | texto | no | "ExecutionPolicy y AppLocker" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los bypass son puntuales y documentados
- [ ] Las políticas GPO se verifican y se respetan

## Ejemplos de prompts

- "Quiero endurecer la política de ejecución de mis equipos: mostrame cómo se aplica por GPO, cómo verificarla y cuándo un -ExecutionPolicy Bypass puntual es aceptable."
- "Aplica ExecutionPolicy y AppLocker (nivel avanzado) a mi trabajo actual con Seguridad y hardening: prioriza Los bypass son puntuales y documentados"
- "Revisa mi seguridad-powershell y dime qué pasos de ExecutionPolicy y AppLocker me faltan en este nivel"