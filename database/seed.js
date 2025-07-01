const db = require("./db");
const { Users } = require("./index");

const seed = async () => {
  db.logging = false;
  await db.sync({ force: true }); // Drop and recreate tables
  const Users = await Users.bulkCreate([
    { name: "Ramses Sanchez" },
    { name: "Emmanuel Rivas" },
    { name: "Emmanuel Ruiz" },
  ]);

  console.log(`🦆 Created ${Users.length} Users`);

  console.log("🌱 Seeded the database");
  db.close();
};

seed();



