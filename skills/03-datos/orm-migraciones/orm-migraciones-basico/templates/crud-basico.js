// =============================================================
// CRUD básico con Prisma Client (Node.js / JavaScript)
// Uso: npm i prisma @prisma/client && npx prisma migrate dev --name init
// =============================================================

const { PrismaClient, Prisma } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  // CREATE: un registro y varios a la vez
  const ana = await prisma.usuario.create({
    data: { email: 'ana@example.com', nombre: 'Ana Torres' },
  })
  console.log('Creado:', ana)

  await prisma.usuario.createMany({
    data: [
      { email: 'luis@example.com', nombre: 'Luis Gómez' },
      { email: 'sofia@example.com', nombre: 'Sofía Navarro' },
    ],
  })

  // READ: registro único (requiere un campo @unique)
  const encontrado = await prisma.usuario.findUnique({
    where: { email: 'ana@example.com' },
  })
  console.log('Único:', encontrado)

  // READ: listado con filtros, orden y límite
  const activos = await prisma.usuario.findMany({
    where: { activo: true },
    orderBy: { nombre: 'asc' },
    take: 10,
  })
  console.log('Activos:', activos.length)

  // UPDATE: por campo único
  const actualizado = await prisma.usuario.update({
    where: { id: ana.id },
    data: { activo: false },
  })
  console.log('Actualizado:', actualizado)

  // DELETE con manejo del error P2025 (registro inexistente)
  try {
    await prisma.usuario.delete({ where: { id: 999 } })
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === 'P2025'
    ) {
      console.log('Registro no encontrado (P2025)')
    } else {
      throw error
    }
  }

  const total = await prisma.usuario.count()
  console.log('Total de usuarios:', total)
}

main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())