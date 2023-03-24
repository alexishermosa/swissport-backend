const express = require('express');
const app = express();

const PORT = 4000;

app.get('/', (req, res) => {
  return res.send('Servidor Online')
})
app.listen(PORT, () => {
console.log('Servidor Online listening on port ' + PORT);
})