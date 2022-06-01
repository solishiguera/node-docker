const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
const jwt = require("jsonwebtoken");

dotenv.config();

const app = express();
const port = process.env.PORT || 3002
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get('/', (req, res) => {
  res.send('Tarea...')
})

// Routes //
app.use(require('./routes/routes'));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})