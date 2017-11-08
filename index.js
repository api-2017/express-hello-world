const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello world!');
});

// http://localhost:3000/users/bart-simpson
// Returns:
// You asked for the user bart-simpson
app.get('/users/:username', (req, res) => {
  res.send(`You asked for the user ${req.params.username}`);
});

app.listen(3000, () => {
  console.log("App listening on Port 3000");
})
