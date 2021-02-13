require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');

const { authenticateWithJwt } = require('./services/jwt');

app.listen(process.env.PORT, /* ... */);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

// PATH
const contentsRouter = require('./routers/contents-router');
const usersRouter = require('./routers/users-router');

app.use('/contents', authenticateWithJwt, contentsRouter);
app.use('/users', usersRouter);

app.get('/', authenticateWithJwt, (req, res) =>{
  res.status(200).json('hello tonton sommelier');
});
