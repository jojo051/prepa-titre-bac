const express = require('express');
const contentsRouter = express.Router();

const { extractContentId } = require('../controllers/extract-controller');
const { getAllContents, findContentById } = require('../controllers/contents-controller');
const { sendIfExists, send } = require('../views/send-json');

contentsRouter.get('/', getAllContents, send);
contentsRouter.get('/:contentId', extractContentId, findContentById, sendIfExists);

module.exports = contentsRouter;