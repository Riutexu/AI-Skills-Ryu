# DevOps y CI/CD

Skills en español para llevar tu software a producción de forma automatizada y segura: desde el primer deploy manual (Vercel/Netlify) hasta pipelines completos en GitHub Actions, contenedores con Docker Compose, estrategias de despliegue sin downtime y monitorización post-deploy. Cada nivel incluye plantillas funcionales (workflows YAML, Dockerfiles, docker-compose) y checklist de verificación.

## Skills incluidas

| Skill (carpeta) | Nivel | Qué cubre |
| --- | --- | --- |
| `devops-cicd-basico` | Básico | Qué es CI/CD, deploy manual a Vercel/Netlify, variables de entorno para deploys |
| `devops-cicd-avanzado` | Avanzado | GitHub Actions (jobs/steps/triggers), secrets y entornos dev/staging/prod, build+tests+deploy automático, Dockerfile |
| `devops-cicd-profesional` | Profesional | Docker Compose multi-servicio, pipelines multi-etapa con caching, blue/green/rolling/canary y rollback, zero-downtime migrations, supply chain, IaC y monitorización |

## Parámetros por nivel

| Parámetro | Básico | Avanzado | Profesional |
| --- | --- | --- | --- |
| alcance | Despliegue manual de un proyecto simple | Pipeline automático build+test+deploy | Plataforma multi-servicio con estrategias de release |
| plataforma | Vercel/Netlify | GitHub Actions + registro de contenedores | Docker Compose multi-servicio + infraestructura |
| entornos | Producción única | dev / staging / prod | staging + prod con canary/blue-green |
| secretos | Variables en panel del proveedor | GitHub Secrets y entornos protegidos | Gestión por entorno, rotación y supply chain |
| contenedores | Sin uso | Dockerfile básico | Multi-stage builds, caching y compose |
| rollback | Redeplegar versión anterior manualmente | Redeploy de workflow anterior | Automatizado y verificado con health checks |

## Instalación

Copia la carpeta del tema (o solo los niveles que necesites) dentro de tu árbol de skills de opencode:

```powershell
# Proyecto
Copy-Item -Recurse "05-ingenieria\devops-cicd" ".opencode\skills\"

# Global (Windows)
Copy-Item -Recurse "05-ingenieria\devops-cicd" "$env:USERPROFILE\.config\opencode\skills\"
```

En Linux/macOS el destino global es `~/.config/opencode/skills/`. Reinicia opencode tras copiar los archivos para que se carguen los skills.

## Ruta de aprendizaje

1. **Básico**: entiende qué es CI/CD y publica tu primera app en Vercel o Netlify con variables de entorno.
2. **Avanzado**: automatiza el ciclo build + tests + deploy con GitHub Actions, gestiona secrets y entornos, y conteneriza con un Dockerfile.
3. **Profesional**: monta servicios con Docker Compose, pipelines multi-etapa con caching, despliega con estrategias sin downtime y rollback, protege la supply chain y monitoriza tras el deploy.

Cada checklist del nivel anterior se da por superada antes de pasar al siguiente.

## Referencias clave

- [Documentación de GitHub Actions](https://docs.github.com/es/actions)
- [Documentación de Docker](https://docs.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Documentación de Vercel CLI](https://vercel.com/docs/cli)
- [Documentación de Netlify](https://docs.netlify.com/)
- [Terraform (infraestructura como código)](https://developer.hashicorp.com/terraform/docs)