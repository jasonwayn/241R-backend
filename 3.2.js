const express = require('express');
const app = express();
const PORT = 3003;

app.get('/board/page/:page', (req, res) => {
  const pageNumber = req.params.page;
  const responseText = `This is page #${pageNumber}`;
  res.send(responseText);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

