const express = require('express');
const contentsRouter = express.Router();

const { 
  extractContentId,
  extractData,
  extractDataId,
} = require('../controllers/extract-controller');

const { 
  findContentById, 
  getAllContents,
  postContent,
  putContent,
  deleteContent, 
} = require('../controllers/contents-controller');

const { 
  sendIfExists,
  send,
  sendDeleted,
  sendPost,
  sendPutModified,
} = require('../views/send-json');

contentsRouter.get('/', getAllContents, send);
contentsRouter.get('/:contentId', extractContentId, findContentById, sendIfExists);
contentsRouter.delete('/:contentId', extractContentId, deleteContent, sendDeleted);
contentsRouter.post('/',extractData,postContent,sendPost);
contentsRouter.put('/:contentId',extractDataId,putContent,sendPutModified);
module.exports = contentsRouter;