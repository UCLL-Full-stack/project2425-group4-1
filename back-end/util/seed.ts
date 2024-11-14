// Execute: npx ts-node util/seed.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
    await prisma.user.deleteMany();

    const xander = await prisma.user.create({
        data: {
            name: 'Xander',
            email: 'xander.dhondt@student.ucll.be',
            password: '1234',
            birthday: new Date(2004, 2, 18),
        },
    });
    const cedric = await prisma.user.create({
        data: {
            name: 'Cedric',
            email: 'cedric.somethingiforgor@student.ucll.be',
            password: '5678',
            birthday: new Date(2004, 5, 17),
        },
    });
    const johan = await prisma.user.create({
        data: {
            name: 'Johan',
            email: 'johan.pieck@teacher.ucll.be',
            password: '8080',
            birthday: new Date(2000, 1, 1),
        }, // sorry johan I don't know your bday :(
    });
    const milan = await prisma.user.create({
        data: {
            name: 'Milan',
            email: 'milan.storms@student.ucll.be',
            password: '6969',
            birthday: new Date(2005, 6, 11),
        },
    });
    const dean = await prisma.user.create({
        data: {
            name: 'Dean',
            email: 'dean.duraku@student.ucll.be',
            password: '1984',
            birthday: new Date(2005, 12, 1),
        },
    });
};

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
