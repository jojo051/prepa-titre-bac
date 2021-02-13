const express = require('express');
const boxesRouter = express.Router();

const { 
  extractboxId,
  extractData,
  extractDataId,
} = require('../controllers/extract-controller');

const { 
  getAllBoxes, 
  findboxById,
  postBox,
  putBox,
  deleteBox
} = require('../controllers/boxes-controller');

const { 
  sendIfExists,
  send,
  sendDeleted,
  sendPost,
  sendPutModified,
} = require('../views/send-json');

boxesRouter.get('/', getAllBoxes, send);
boxesRouter.get('/:boxId', extractboxId, findboxById, sendIfExists);
boxesRouter.delete('/:boxId', extractboxId, deleteBox, sendDeleted);
boxesRouter.post('/',extractData,postBox,sendPost);
boxesRouter.put('/:boxId',extractDataId,putBox,sendPutModified);
module.exports = boxesRouter;