const express = require('express');
const categoriesRouter = express.Router();

const { 
  extractCategorieId,
  extractData,
  extractDataId,
} = require('../controllers/extract-controller');

const { 
    getAllCategories, 
    findCategorieById,
    postCategorie,
    putCategorie,
    deleteCategorie 
} = require('../controllers/categories-controller');

const { 
  sendIfExists,
  send,
  sendDeleted,
  sendPost,
  sendPutModified,
} = require('../views/send-json');

categoriesRouter.get('/', getAllCategories, send);
categoriesRouter.get('/:categorieId',extractCategorieId, findCategorieById, sendIfExists);
categoriesRouter.delete('/:categorieId', findCategorieById, deleteCategorie, sendDeleted);
categoriesRouter.post('/',extractData, postCategorie, sendPost);
categoriesRouter.put('/:categorieId',extractDataId,putCategorie,sendPutModified);
module.exports = categoriesRouter;