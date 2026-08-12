# Estructura de docs por capas (Diátaxis)

```
README.md                    ← puerta de entrada (qué es + ejemplo 30s + enlaces)
CONTRIBUTING.md              ← reglas para colaborar (incluye regla de docs en PRs)
docs/
├── tutoriales/              ← aprendizaje guiado paso a paso (primer contacto)
│   └── primer-proyecto.md
├── guias/                   ← procedimientos: cómo hacer X (casos de uso)
│   ├── desplegar.md
│   └── anadir-plugin.md
├── explicacion/             ← por qué y cómo funciona (contexto, arquitectura)
│   └── arquitectura.md
└── referencia/              ← datos exactos: parámetros, API, config
    ├── api.md
    └── configuracion.md
```

## Reglas por capa
| Capa | Pregunta que responde | Tono | Quién la lee |
|---|---|---|---|
| Tutorial | ¿Cómo aprendo? | Guiado, pasos | Nuevos usuarios |
| Guía | ¿Cómo hago X? | Procedimiento | Usuarios con una tarea |
| Explicación | ¿Por qué es así? | Contexto | Devs, arquitectos |
| Referencia | ¿Cuál es el valor exacto? | Preciso, tablas | Todos (cuando necesitan el dato) |

## Regla de enrutamiento
- No pongas procedimientos dentro de la referencia.
- No pongas parámetros exactos dentro del tutorial.
- El README enlaza, no resume las 4 capas.