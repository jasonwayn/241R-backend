const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 

function stringifyObject(obj) {
  return Object.keys(obj)
    .map(k => `${k}: ${obj[k]}`)
    .join('\n');
}


app.get('/', (req, res) => {
 x``
  const responseText = stringifyObject(queryData);
  res.send(responseText || 'No query parameters provided');
});


app.post('/', (req, res) => {
  const bodyData = req.body;
  const responseText = stringifyObject(bodyData);
  res.send(responseText || 'No body data provided');
});


app.put('/', (req, res) => {
  const bodyData = req.body;
  const responseText = stringifyObject(bodyData);
  res.send(responseText || 'No body data provided');
});

app.delete('/', (req, res) => {
  const bodyData = req.body;
  const responseText = stringifyObject(bodyData);
  res.send(responseText || 'No body data provided');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
