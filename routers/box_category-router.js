const express = require('express');
const box_categoryRouter = express.Router();

const {
    extractBoxCategory
}  = require('../controllers/extract-controller');

const { 
    getBoxCategory 
  } = require('../controllers/box_category-controler');

const {   
    send
  } = require('../views/send-json');

box_categoryRouter.get('/', extractBoxCategory, getBoxCategory, send)

module.exports = box_categoryRouter;