# Política Cache-Control recomendada

| Recurso | Ejemplo de URL | Cabecera |
|---|---|---|
| Assets versionados con hash | `/static/app-abc123.js` | `public, max-age=31536000, immutable` |
| Imágenes de contenido | `/img/hero.webp` | `public, max-age=86400, stale-while-revalidate=604800` |
| HTML de páginas | `/` | `no-cache` (valida con ETag/Last-Modified) |
| API JSON dinámica | `/api/v1/carrito` | `no-store` |
| API con datos semi-cambiantes | `/api/v1/catalogo` | `private, max-age=60` |
| Fuentes (woff2 con hash) | `/fonts/inter-400.woff2` | `public, max-age=31536000, immutable` |

## Reglas

- Nunca `max-age` largo sin hash en la URL (rompe la invalidación).
- `stale-while-revalidate` para imágenes y catálogos: sirve la copia vieja mientras revalida en segundo plano.
- `immutable` solo en assets con hash en el nombre (no con `?v=` si el nombre no cambia el hash).
- El HTML nunca debe quedar cacheado en el navegador por encima de unos minutos.