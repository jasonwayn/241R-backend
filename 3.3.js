const express = require('express');
const app = express();
const PORT = 3002;

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

app.get('/factorial', (req, res) => {
  const number = req.query.number;

  if (number) {
    return res.redirect(`/factorial/${number}`);
  }
  res.send("Please provide a number in the query, e.g., /factorial?number=10");
});


app.get('/factorial/:number', (req, res) => {
  const number = parseInt(req.params.number, 10);

  if (isNaN(number) || number < 0) {
    return res.send("Please provide a non-negative integer.");
  }

  const result = factorial(number);
  res.send(`The factorial of ${number} is ${result}`);
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

