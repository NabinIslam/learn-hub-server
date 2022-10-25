const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const port = process.env.PORT || 5000;

const courses = require('./data/courses.json');

app.get('/', (req, res) => {
  res.send('LearnHub api is running');
});

app.get('/courses', (req, res) => {
  res.send(courses);
});

app.get('/course/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const selectedCourse = courses.find(course => course.id === id);
  res.send(selectedCourse);
});

app.listen(port, () => {
  console.log(`learnhub server is running on port:${port}`);
});
