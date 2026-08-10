// =============================================================
// Consultas avanzadas: nested reads, filtros y paginación
// Requisito: ejecutar el seeder (templates/seed.js) antes.
// =============================================================

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  // 1. Lectura con relaciones (incluye evita consultas N+1)
  const conRelaciones = await prisma.pedido.findMany({
    include: {
      usuario: true,
      lineas: { include: { producto: true } },
    },
    take: 5,
  })
  console.log('Pedidos con relaciones:', conRelaciones.length)

  // 2. select mínimo + agregado _count en el mismo resultado
  const resumen = await prisma.usuario.findMany({
    select: {
      email: true,
      _count: { select: { pedidos: true } },
    },
    take: 5,
  })
  console.log('Resumen de usuarios:', resumen)

  // 3. Filtros combinados: AND implícito, OR y búsqueda insensible
  const filtrados = await prisma.usuario.findMany({
    where: {
      activo: true,
      OR: [
        { email: { contains: 'ana', mode: 'insensitive' } },
        { nombre: { contains: 'torres', mode: 'insensitive' } },
      ],
    },
  })
  console.log('Filtrados:', filtrados.length)

  // 4. Filtros con IN y notIn
  const conLista = await prisma.usuario.findMany({
    where: { email: { in: ['ana@example.com', 'luis@example.com'] } },
  })
  console.log('In:', conLista.map((u) => u.email))

  // 5. Paginación por offset: take/skip (sencilla, no estable ante inserciones)
  const pagina2 = await prisma.usuario.findMany({
    orderBy: { creadoEn: 'desc' },
    skip: 2,
    take: 2,
  })
  console.log('Página 2:', pagina2.map((u) => u.email))

  // 6. Paginación por cursor: estable aunque lleguen registros nuevos
  const primero = await prisma.usuario.findFirst({
    orderBy: { creadoEn: 'asc' },
  })
  const paginaCursor = await prisma.usuario.findMany({
    orderBy: { creadoEn: 'asc' },
    cursor: { id: primero.id },
    skip: 1, // no repetir el registro que hace de cursor
    take: 3,
  })
  console.log('Tras cursor:', paginaCursor.map((u) => u.email))

  // 7. Agregados sobre el modelo
  const totales = await prisma.pedido.aggregate({
    _count: { _all: true },
    _max: { creadoEn: true },
  })
  console.log('Agregados de pedidos:', totales)
}

main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())