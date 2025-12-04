import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.category.createMany({
    data: [
      { name: 'Product' },
      { name: 'Compliance' },
      { name: 'Enhancement' },
      { name: 'Integration' },
      { name: 'Operations' },
    ],
    skipDuplicates: true,
  });

  await prisma.resource.createMany({
    data: [
      { name: 'Alice', email: 'alice@example.com', role: 'Dev' },
      { name: 'Bob', email: 'bob@example.com', role: 'QA' },
      { name: 'Charlie', email: 'charlie@example.com', role: 'BA' },
      { name: 'David', email: 'david@example.com', role: 'PM' },
    ],
    skipDuplicates: true,
  });

  const productCategory = await prisma.category.findUnique({ where: { name: 'Product' } });

  if (productCategory) {
    await prisma.project.create({
      data: {
        name: 'Project Phoenix',
        status: 'On Track',
        startDate: new Date('2023-01-15'),
        targetCompletionDate: new Date('2023-12-15'),
        progress: 0.75,
        owner: 'David',
        team: 'Phoenix Team',
        categoryId: productCategory.id,
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
