# Formato de comentario de revisión

Usa esta plantilla en cada comentario. Un problema por comentario, siempre con alternativa.

```
[ETIQUETA] Archivo:linea

**Qué pasa:** <descripción concreta del problema>

**Por qué importa:** <impacto real: bug, confusión, costo futuro>

**Alternativa:**
```<lenguaje>
<ejemplo mínimo de cómo quedaría bien>
```

[Opcional] **Pregunta:** ¿por qué esta elección? (para abrir discusión)
```

## Etiquetas
| Etiqueta | Significado | Uso |
|---|---|---|
| `[Blocker]` | Rompe algo real (bug, seguridad, contrato) | Impide el merge hasta resolver |
| `[Sugerencia]` | Mejora clara pero no rompe | Opcional, decisión del autor |
| `[Estilo]` | Cosmético (nombres, formato, convención) | Nunca bloquea |

## Resumen final del PR
```
**Estado:** ✅ Aprobado / ⏳ Requiere cambios / ❌ Bloqueado

**Lo bueno:** <2-3 cosas concretas>

**Blockers (orden de prioridad):**
1. ...
2. ...

**Sugerencias a futuro:** <1-2 ideas para el próximo cambio>
```