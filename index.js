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
const box_categoryRouter = require('./routers/box_category-router');

app.use('/categories', authenticateWithJwt, categoriesRouter)
app.use('/boxes', authenticateWithJwt, boxesRouter);
app.use('/bottles', authenticateWithJwt, bottlesRouter);
app.use('/contents', authenticateWithJwt, contentsRouter);
app.use('/users', usersRouter);
app.use('/box_category', authenticateWithJwt, box_categoryRouter);

app.get('/', authenticateWithJwt, (req, res) =>{
  res.status(200).json('hello tonton sommelier');
});

/* ------------------------ category_content------------------------*/

// app.get('/categories/:categoryId/contents/difficulties/:difficultiesId',(req, res) =>{
//   const sqlComande = "select category_id, category.name as category, choix, content, type, réponse, difficulté from category_content join category on category.id=category_content.category_id join content on content.id=category_content.content_id where type=? and  category_id=? and difficulté=?;"
//   const typeOfContent = req.query.type
//   const CategoryId = req.params.categoryId
//   const difficultiesId = req.params.difficultiesId

//   db.query(sqlComande, [typeOfContent,CategoryId, difficultiesId],(err, results) => {
//     if (err) {
//       res.status(500).json('Erreur lors de la récupération des informations');
//     } else {
//       res.status(200).json(results);
//     }
//   });
// });