
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(200).send('Welcome to my Express Server!');
});

app.get('/about', (req, res) => {
  res.status(200).json({
    name: 'Sai Rashmitha',
    section: 'CSE (Gen-AI) 2A'
  });
});

app.get('/time', (req, res) => {
  res.status(200).json({
    currentTime: new Date().toString()
  });
});

app.use((req, res) => {
  res.status(404).send('404 - Page Not Found');
});

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
});

