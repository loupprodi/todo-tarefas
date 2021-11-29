const express = require('express');
const routes = require('./routes');

const app = express();
app.use(express.json());
app.use(routes);

app.get('/', (request, reponse) => {
  return reponse.json({ message: 'server connected ' });
});

app.listen(4000, () => {
  console.log('Server is running Port 4000');
});
