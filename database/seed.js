const db = require("./db");
const { Campus, Student } = require("./index");

const seed = async () => {
  await db.sync({ force: true });

  const campuses = await Campus.bulkCreate([
    {
      name: "BMCC",
      address: "4513 Manhattan Ave, NY",
      description: "A nice place",
    },
    {
      name: "Brooklyn College",
      address: "999 Flatbush, Brooklyn, NY",
      description: "Innovative and inclusive",
    },
  ]);

  const students = await Student.bulkCreate([
    {
      firstName: "Ramses",
      lastName: "Sanchez",
      email: "RamsesCode@example.com",
    },
    {
      firstName: "Emmanuel",
      lastName: "Ruiz",
      email: "Emmanuel-R@example.com",
    },
  ]);

  console.log("🌱 Seeded database with sample campuses and students");
  await db.close();
};

seed();




