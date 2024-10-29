const express = require('express');
const app = express();
const PORT = 3006;

app.use(express.urlencoded({ extended: true })); 

app.get('/', (req, res) => {
  const loginPage = `
    <html>
      <body>
        <h2>Login</h2>
          <form method="post" action="/login">
          <div>
            <label>Username:</label>
            <input id="username-input" name="username" type="text">
          </div>
          <div>
            <label>Password:</label>
            <input id="password-input" name="password" type="password">
          </div>
          <div>
            <div>Introduce yourself</div>
            <textarea id="introduction-input" name="introduction"></textarea>
          </div>
            <button type="submit">Submit</button>
          </form>
      </body>
    </html>
  `;
  res.send(loginPage);
});
x`  `
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const responseText = `Username: ${username}, Password: ${password}`;
  res.send(responseText);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
