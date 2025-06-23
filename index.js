const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('🚀 Hello from Node.js app with GitHub Actions CI/CD! hello from strak digital');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
