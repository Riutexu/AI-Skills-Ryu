// =============================================================
// Multi-tenancy con Prisma: schema-per-tenant
// Cada cliente (tenant) vive en su propio esquema PostgreSQL.
// Los esquemas se crean en la base:
//   CREATE SCHEMA tenant_acme;  CREATE SCHEMA tenant_globex;
// y las migraciones se aplican por esquema:
//   npx prisma migrate deploy --schema prisma/schema.prisma
//   (con DATABASE_URL?schema=tenant_X por cada tenant)
// =============================================================

const { PrismaClient } = require('@prisma/client')

// Caché de clientes por tenant: una instancia y un pool por esquema
const clientesPorTenant = new Map()

function getClienteTenant(tenantId) {
  if (!clientesPorTenant.has(tenantId)) {
    clientesPorTenant.set(
      tenantId,
      new PrismaClient({
        datasources: {
          db: { url: `${process.env.DATABASE_URL}?schema=tenant_${tenantId}` },
        },
        log: ['warn', 'error'],
      }),
    )
  }
  return clientesPorTenant.get(tenantId)
}

async function main() {
  const tenantA = getClienteTenant('acme')
  const tenantB = getClienteTenant('globex')

  // Los datos de cada tenant quedan aislados en su propio esquema
  await tenantA.usuario.create({
    data: { email: 'admin@acme.com', nombre: 'Admin Acme' },
  })
  await tenantB.usuario.create({
    data: { email: 'admin@globex.com', nombre: 'Admin Globex' },
  })

  const usuariosA = await tenantA.usuario.findMany()
  const usuariosB = await tenantB.usuario.findMany()
  console.log('Tenant A (acme):', usuariosA)
  console.log('Tenant B (globex):', usuariosB)

  // Verificación de aislamiento: los datos no se mezclan
  const mezclados = await tenantA.usuario.findMany({
    where: { email: { contains: 'globex' } },
  })
  console.log('Búsquedas entre tenants (debe ser 0):', mezclados.length)

  // Cierre ordenado de todos los pools
  await Promise.all(
    [...clientesPorTenant.values()].map((cliente) => cliente.$disconnect()),
  )
}

main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })