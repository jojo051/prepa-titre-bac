const express = require('express');
const usersRouter = express.Router();

const { extractUserId, extractUserData, extractUserDataId } = require('../controllers/extract-controller');
const { getAllUsers, findUserById, postUser, putUser, deleteUser } = require('../controllers/users-controller');
const { sendIfExists, send, sendPutModified, sendPost, sendDeleted } = require('../views/send-json');

usersRouter.get('/', getAllUsers, send);
usersRouter.get('/:userId', extractUserId, findUserById, sendIfExists);
usersRouter.post('/', extractUserData, postUser, sendPost);
usersRouter.put('/:userId', extractUserDataId, putUser, sendPutModified);
usersRouter.delete('/:userId', extractUserId, deleteUser, sendDeleted);
module.exports = usersRouter;