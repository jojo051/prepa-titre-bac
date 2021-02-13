const Categorie = require('../models/Category');

const getAllCategories = (req, res, next) => {
  Category.getAll((err, results) => {
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

const findCategoryById = (req, res, next) => {
  Category.findById(req.categoryId, (err, results) => {
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

const postCategory = (req, res, next) => {
  const { formData } = req
  Category.post(formData, (err, results) =>{
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

const putCategory = (req, res, next) => {
  const { formData, categoryId } = req
  Category.put( formData, categoryId, (err, results) =>{
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

const deleteCategory = (req, res, next) => {
  Category.delete(req.categoryId, (err, results) =>{
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
  findCategoryById,
  postCategory,
  putCategory,
  deleteCategory
}