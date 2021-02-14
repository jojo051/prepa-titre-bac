const express = require('express');
const categoriesRouter = express.Router();

const { 
  extractCategoryId,
  extractData,
  extractDataId,
  extractCategoryIdContentDifficultiesId,
} = require('../controllers/extract-controller');

const { 
    getAllCategories, 
    findCategoryById,
    postCategory,
    putCategory,
    deleteCategory,
    getCategoriesContent
} = require('../controllers/categories-controller');

const { 
  sendIfExists,
  send,
  sendDeleted,
  sendPost,
  sendPutModified,
} = require('../views/send-json');

categoriesRouter.get('/', getAllCategories, send);
categoriesRouter.get('/:categoryId',extractCategoryId, findCategoryById, sendIfExists);
categoriesRouter.delete('/:categoryId', findCategoryById, deleteCategory, sendDeleted);
categoriesRouter.post('/',extractData, postCategory, sendPost);
categoriesRouter.put('/:categoryId',extractDataId,putCategory,sendPutModified);
categoriesRouter.get('/:categoryId/contents/difficulties/:difficultiesId',extractCategoryIdContentDifficultiesId,getCategoriesContent,send);
module.exports = categoriesRouter;