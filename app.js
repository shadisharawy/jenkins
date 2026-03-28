const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World from Jenkins CI/CD Pipeline!');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`App is running on port ${PORT}`);
});

