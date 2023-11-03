// server.js

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Import the controllers
const studentController = require('./controller/studentController');

const port = 3000;

// Middleware to parse JSON data
app.use(bodyParser.json());

// Routes
app.get('/students', studentController.getAllStudents);
app.get('/students/:id', studentController.getStudentById);
app.post('/students', studentController.createStudent);
app.put('/students/:id', studentController.updateStudent);
app.delete('/students/:id', studentController.deleteStudent);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
