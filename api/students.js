const express = require("express");
const router = express.Router();
const { students } = require("../database");


router.get("/:id", async (req, res) => {
  const id = students.findByPk(req.params.id)
  try{
    res.send(id);
  res.sendStatus(200);
  } catch{
    console.log("Sorry no ID by that name ");
    res.sendStatus(404);
 }
});

router.post("/", async (req, res) => {
  const newStudent = students.create(newStudent)
  try {
    res.send(newStudent);
    res.sendStatus(200);
  } catch {
    console.log("Sorry no student created")
    res.sendStatus(404);
  }
})

router.patch("/:id", async (req, res) => {
  try {
    const [updatedRows] = await students.update(req.body, {
      where: { id: req.params.id }
    });
    if (updatedRows === 0) {
      return res.status(404).send("Student not found");
    }
    const updatedStudent = await students.findByPk(req.params.id);
    res.status(200).send(updatedStudent);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error updating student");
  }
});

router.delete("/:id", async (req, res) => {
  const studentToDelete = await students.findByPk(req.params.id);
  if (!studentToDelete) {
    return res.status(404).send("Student not found");
  }
  await studentToDelete.destroy();
  res.status(200).send("Student deleted successfully");
}) 

module.exports = router;
