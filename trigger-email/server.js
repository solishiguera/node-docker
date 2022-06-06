const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
const bodyParser = require('body-parser');

dotenv.config();

const app = express();
const port = process.env.PORT || 4005
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get('/', (req, res) => {
  res.send('Tarea emails...')
})

app.use(require('./routes/routes'));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})