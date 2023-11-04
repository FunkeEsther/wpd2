// server.js

const express = require('express');
const mustacheExpress = require('mustache-express')
const app = express();
const bodyParser = require('body-parser');

// Import the controllers
const studentController = require('./controller/studentController');

const port = 3000;

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

// Middleware to parse JSON data
app.use(bodyParser.json());

// Middleware to parse URL-encoded data (application/x-www-form-urlencoded)
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.get('/students', studentController.getAllStudents);
app.get('/students/:id', studentController.getStudentById);
app.post('/students', studentController.createStudent);
app.put('/students/:id', studentController.updateStudent);
app.delete('/students/:id', studentController.deleteStudent);

app.get('/', studentController.landing_page)
app.post('/students/delete', studentController.deleteStudent)

app.post('/students/update', studentController.updateStudent)

// Define routes to render HTML pages
/*app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});*/

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
