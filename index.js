const express = require('express');
const app = express();
const port = 3002;

app.get('/', (req, res) => {
  res.send('Product Service Running');
});

app.listen(port, () => {
  console.log(`Product Service listening on port ${port}`);
});
