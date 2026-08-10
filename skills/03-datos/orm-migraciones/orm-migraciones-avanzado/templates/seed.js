// =============================================================
// Seeder idempotente con nested writes
// Configurar en package.json:
//   "prisma": { "seed": "node prisma/seed.js" }
// Ejecutar: npx prisma db seed
// =============================================================

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  // 1. Limpieza en orden de dependencias: hijas primero, padres después
  await prisma.lineaPedido.deleteMany()
  await prisma.pedido.deleteMany()
  await prisma.perfil.deleteMany()
  await prisma.usuario.deleteMany()
  await prisma.producto.deleteMany()

  // 2. Productos primero: las líneas de pedido los referenciarán
  const teclado = await prisma.producto.create({
    data: { nombre: 'Teclado mecánico', precio: 89.9, stock: 25 },
  })
  const raton = await prisma.producto.create({
    data: { nombre: 'Ratón inalámbrico', precio: 29.5, stock: 60 },
  })
  console.log('Productos:', teclado.id, raton.id)

  // 3. Nested write: un usuario con su perfil, un pedido y sus líneas,
  //    todo en una sola operación atómica.
  const ana = await prisma.usuario.create({
    data: {
      email: 'ana@example.com',
      nombre: 'Ana Torres',
      perfil: {
        create: { biografia: 'Cliente desde 2025' },
      },
      pedidos: {
        create: [
          {
            estado: 'entregado',
            lineas: {
              create: [
                { productoId: teclado.id, cantidad: 1 },
                { productoId: raton.id, cantidad: 2 },
              ],
            },
          },
        ],
      },
    },
  })
  console.log('Usuario con nested write:', ana.id)

  const luis = await prisma.usuario.create({
    data: { email: 'luis@example.com', nombre: 'Luis Gómez' },
  })
  console.log('Usuario simple:', luis.id)
}

main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())