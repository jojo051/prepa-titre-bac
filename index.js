const express = require('express');
const app = express();
const connection = require('./database/db.js');//database
const cors = require('cors');

require('dotenv').config()

app.listen(process.env.PORT, /* ... */);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.get('/', (request, response) => {
  response.send('Bienvenue sur Express');
});

// route

const contentsRouter = require('./routers/contents-router');
const usersRouter = require('./routers/users-router');

app.use('/contents', contentsRouter);
app.use('/users', usersRouter);
