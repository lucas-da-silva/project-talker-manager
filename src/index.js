const express = require('express');
const bodyParser = require('body-parser');
const { readTalker } = require('./talkerFunctions');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

// Req 1
app.get('/talker', async (_req, res) => {
  const talkers = await readTalker();
  res.status(200).json(talkers);
});

app.listen(PORT, () => {
  console.log('Online');
});
