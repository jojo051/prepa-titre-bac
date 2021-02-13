require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');

const { authenticateWithJwt } = require('./services/jwt');

app.listen(process.env.PORT, /* ... */);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// PATH
const categoriesRouter = require('./routers/categories-router');
const boxesRouter = require('./routers/boxes-router');
const bottlesRouter = require('./routers/bottles-router')
const contentsRouter = require('./routers/contents-router');
const usersRouter = require('./routers/users-router');
const box_categoryRouter = require('./routers/box_category');


app.use('/categories', authenticateWithJwt, categoriesRouter)
app.use('/boxes', authenticateWithJwt, boxesRouter);
app.use('/bottles', authenticateWithJwt, bottlesRouter);
app.use('/contents', authenticateWithJwt, contentsRouter);
app.use('/users', usersRouter);
app.use('/box_category', authenticateWithJwt, box_categoryRouter);

app.get('/', authenticateWithJwt, (req, res) =>{
  res.status(200).json('hello tonton sommelier');
});
