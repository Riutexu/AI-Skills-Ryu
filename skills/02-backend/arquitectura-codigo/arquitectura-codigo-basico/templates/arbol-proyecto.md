# Árbol de proyecto de referencia

Estructura de carpetas base para un proyecto web/API. Adapta los nombres
a tu framework, pero mantén la separación por responsabilidad.

```
mi-proyecto/
├── src/                          # Todo el código fuente
│   ├── components/               # UI reutilizable, sin lógica de negocio
│   │   ├── Button.jsx
│   │   ├── UserCard.jsx
│   │   └── index.js              # Re-exports públicos de la carpeta
│   ├── pages/                    # Una carpeta/archivo por vista o pantalla
│   │   ├── HomePage.jsx
│   │   └── ProductosPage.jsx
│   ├── services/                 # Llamadas a APIs y lógica de integración
│   │   ├── api.js                # Cliente HTTP centralizado
│   │   └── usuariosService.js
│   ├── utils/                    # Funciones puras reutilizables (sin framework)
│   │   ├── formatos.js
│   │   ├── validaciones.js
│   │   └── calculos.js
│   ├── const.js                  # Constantes del proyecto (rutas, estados)
│   └── styles/                   # CSS/estilos globales
├── public/                       # Estáticos servidos tal cual
├── tests/                        # Pruebas (o colocar al lado del código)
├── package.json
└── README.md                     # Documento el árbol y las reglas
```

## Responsabilidad de cada nivel

| Carpeta | Responsabilidad | Qué NO debe contener |
| --- | --- | --- |
| `src/components/` | Componentes de UI reutilizables y presentacionales | Llamadas a APIs, lógica de negocio |
| `src/pages/` | Vistas completas que combinan componentes | Funciones de negocio duplicadas |
| `src/services/` | Comunicación con APIs y datos externos | Estilos, renderizado de UI |
| `src/utils/` | Funciones puras, probables y sin estado | Código que depende de React/Express |
| `src/const.js` | Valores constantes del dominio | Lógica que cambia en runtime |
| `src/styles/` | Estilos globales | Reglas por componente (van con el componente) |

## Reglas de colocación

1. Un archivo nuevo entra en la carpeta cuya responsabilidad cubre su función.
2. Si no encaja en ninguna carpeta, es señal de que le falta inspiración o sobra responsabilidad.
3. Los archivos de negocio (services) no se importan desde utils; utils no importa nada del proyecto.
4. Los componentes presentacionales no llaman a servicios directamente: suben la petición mediante callbacks o hooks.
5. Los re-exports (`index.js`) ocultan la estructura interna y facilitan refactorizar el detalle.