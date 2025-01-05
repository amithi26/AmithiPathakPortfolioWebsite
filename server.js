const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const host = '0.0.0.0';

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});