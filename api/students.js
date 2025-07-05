const express = require("express");
const router = express.Router();
const { Campus, Student } = require("../database");

////-----> Get a single student by id, including their campus
router.get("/:id", async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id, {
      include: Campus,
    });
    if (!student) {
      return res.status(404).send("Student not found");
    }
    res.status(200).send(student);
  } catch (error) {
    console.error("Error fetching student by ID:", error);
    res.status(500).send("Error fetching student");
  }
});

////-----> Get all students, including their campuses
router.get("/", async (req, res) => {
  try {
    const allStudents = await Student.findAll({
      include: Campus,
    });
    res.status(200).send(allStudents);
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).send("Error fetching students");
  }
});

////-----> Create a new student

router.post("/", async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;
    if (!firstName || !lastName || !email) {
      return res.status(400).send("Missing required fields");
    }

    const newStudent = await Student.create(req.body);
    const studentWithCampus = await Student.findByPk(newStudent.id, {
      include: Campus,
    });
    res.status(201).send(studentWithCampus);
  } catch (error) {
    console.error("Error creating student:", error);
    res.status(500).send("Error creating student");
  }
});

////-----> Update an existing student

router.patch("/:id", async (req, res) => {
  try {
    const [updatedRows] = await Student.update(req.body, {
      where: { id: req.params.id },
    });
    if (updatedRows === 0) {
      return res.status(404).send("Student not found");
    }

    const updatedStudent = await Student.findByPk(req.params.id, {
      include: Campus,
    });
    res.status(200).send(updatedStudent);
  } catch (error) {
    console.error("Error updating student:", error);
    res.status(500).send("Error updating student");
  }
});

////-----> Delete a student by id

router.delete("/:id", async (req, res) => {
  try {
    const studentToDelete = await Student.findByPk(req.params.id);
    if (!studentToDelete) {
      return res.status(404).send("Student not found");
    }

    await studentToDelete.destroy();
    res.status(200).send("Student deleted successfully");
  } catch (error) {
    console.error("Error deleting student:", error);
    res.status(500).send("Error deleting student");
  }
});

module.exports = router;

