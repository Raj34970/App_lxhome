const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config();
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const loginRouter = require('./routes/login');

app.use('/', loginRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
