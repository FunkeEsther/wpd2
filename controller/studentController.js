
const Student = require('../models/student'); // Import the Student model

const createStudent = (req, res) => {
  const newStudent = req.body;
  Student.create(newStudent, (err, student) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    // Get the updated list of students after creating the new one
    Student.getAll((err, students) => {
      if (err) {
        return res.status(500).json({ error: err });
      }
      // Send the updated list of students as a response
      res.status(201).redirect('/');
    });
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
  console.log(req.body)
  Student.update(req.body.updateStudentId, updatedStudent, (err, numReplaced) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (numReplaced === 0) {
      return res.status(404).json({ error: 'Student not found' });
    }
    //res.status(200).json({ message: 'Student updated successfully' });
    res.redirect('/');
  });
};

// Controller for deleting a student by ID
const deleteStudent = (req, res) => {
  
  Student.delete(req.body.deleteStudentId, (err, numRemoved) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (numRemoved === 0) {
      return res.status(404).json({ error: 'Student not found' });
    }
   // res.status(204).end();
    res.redirect('/');
  });
};

const landing_page = (req, res) =>{
  Student.getAll((err, students) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.render('index', {students});
  });
}

module.exports = {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
  landing_page
};

