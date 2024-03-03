import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

const users: User[] = [
  {
    id: 1,
    name: "Jersson Morales",
    email: "jersson.m@outlook.com",
    newsletterStatus: "Subscribed",
  },
];

async function main() {
  const usersCreation = users.map((user) => prisma.user.create({ data: user }));

  await Promise.all(usersCreation);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
