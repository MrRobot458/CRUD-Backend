const express = require("express");
const router = express.Router();
const { Campus, Student } = require("../database");



////-----> This method will get the Campus by form of id 

router.get("/:id", async (req, res) => {
  try {
    const campus = await Campus.findByPk(req.params.id, {
      include: { model: Student },
    });
    if (!campus) {
      return res.status(404).send("Campus not found");
    }
    res.status(200).send(campus);
  } catch (error) {
    console.error("Error fetching Campus by ID:", error);
    res.status(500).send("Error fetching Campus");
  }
});
////----->  This method should be getting all the Campus, does not need id as a paramter

router.get("/", async (req, res) => {
  try {
    const allCampus = await Campus.findAll();
    res.status(200).send(allCampus);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching Campus's");
  }
});

////-----> This method is to add another Campus to the database

router.post("/", async (req, res) => {
  try {
    const newCampus = await Campus.create(req.body);
    res.status(201).send(newCampus);
  } catch (error) {
    console.log("Sorry no Campus created");
    res.status(500).send("Error creating Campus");
  }
})

////-----> This methos will update an existing Campus 

router.patch("/:id", async (req, res) => {
  try {
    const [updatedRows] = await Campus.update(req.body, {
      where: { id: req.params.id }
    });
    if (updatedRows === 0) {
      return res.status(404).send("Campus not found");
    }
    const updatedCampus = await Campus.findByPk(req.params.id);
    res.status(200).send(updatedCampus);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error updating Campus");
  }
});

////-----> This one will just delete by find it by id first

router.delete("/:id", async (req, res) => {
  const CampusToDelete = await Campus.findByPk(req.params.id);
  if (!CampusToDelete) {
    return res.status(404).send("Campus not found");
  }
  await CampusToDelete.destroy();
  res.status(200).send("Campus deleted successfully");
}) 

module.exports = router;
