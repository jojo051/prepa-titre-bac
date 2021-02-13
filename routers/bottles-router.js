const express = require('express');
const bottlesRouter = express.Router();

const { 
  extractBottleId,
  extractData,
  extractDataId,
} = require('../controllers/extract-controller');

const { 
  getAllBottles, 
  findBottleById,
  postBottle,
  putBottle,
  deleteBottle 
} = require('../controllers/bottles-controller');

const { 
  sendIfExists,
  send,
  sendDeleted,
  sendPost,
  sendPutModified,
} = require('../views/send-json');

bottlesRouter.get('/', getAllBottles, send);
bottlesRouter.get('/:bottleId', extractBottleId, findBottleById, sendIfExists);
bottlesRouter.delete('/:bottleId', extractBottleId, deleteBottle, sendDeleted);
bottlesRouter.post('/',extractData,postBottle,sendPost);
bottlesRouter.put('/:bottleId',extractDataId,putBottle,sendPutModified);
module.exports = bottlesRouter;