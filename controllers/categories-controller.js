const Categorie = require('../models/Categorie');

const getAllCategories = (req, res, next) => {
  Categorie.getAll((err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    else {
      req.data = results;
      next();
    }
  });
};

const findCategorieById = (req, res, next) => {
  Categorie.findById(req.categorieId, (err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    else {
      req.data = results[0];
      next();
    }
  })
};

const postCategorie = (req, res, next) => {
  const { formData } = req
  Categorie.post(formData, (err, results) =>{
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    else {
      req.data = results;
      next();
    }
  })
}

const putCategorie = (req, res, next) => {
  const { formData, categorieId } = req
  Categorie.put( formData, categorieId, (err, results) =>{
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    else {
      req.data = results;
     
      next();
    }
  })
}

const deleteCategorie = (req, res, next) => {
  Categorie.delete(req.categorieId, (err, results) =>{
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    else {
      req.data = results;
      next();
    }
  })
}

module.exports = {
  getAllCategories, 
  findCategorieById,
  postCategorie,
  putCategorie,
  deleteCategorie
}