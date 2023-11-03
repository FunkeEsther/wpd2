
const Student = require('../models/student'); // Import the Student model

// Controller for creating a new student
const createStudent = (req, res) => {
  const newStudent = req.body;
  Student.create(newStudent, (err, student) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.status(201).json(student);
  });
};

// Controller for retrieving all students
const getAllStudents = (req, res) => {
  Student.getAll((err, students) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(students);
  });
};

// Controller for retrieving a specific student by ID
const getStudentById = (req, res) => {
  Student.getById(req.params.id, (err, student) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.json(student);
  });
};

// Controller for updating a student by ID
const updateStudent = (req, res) => {
  const updatedStudent = req.body;
  Student.update(req.params.id, updatedStudent, (err, numReplaced) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (numReplaced === 0) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.status(200).json({ message: 'Student updated successfully' });
  });
};

// Controller for deleting a student by ID
const deleteStudent = (req, res) => {
  Student.delete(req.params.id, (err, numRemoved) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (numRemoved === 0) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.status(204).end();
  });
};

module.exports = {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
};
