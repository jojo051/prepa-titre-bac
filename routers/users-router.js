const express = require('express');
const usersRouter = express.Router();

const { extractUserId,  
  extractUserRegisterData,
  extractUserLogin,
  extractData,
  extractDataId,
} = require('../controllers/extract-controller');

const { getAllUsers, 
  findUserById, 
  deleteUser,
  postUserRegister,
  postUserLogin
} = require('../controllers/users-controller');

const { sendIfExists, 
  send, 
  sendDeleted,
  sendregister,
  sendLoging,
} = require('../views/send-json');

usersRouter.get('/', getAllUsers, send);
usersRouter.get('/:userId', extractUserId, findUserById, sendIfExists);
usersRouter.delete('/:userId', extractUserId, deleteUser, sendDeleted);
usersRouter.post('/register',extractUserRegisterData,postUserRegister,sendregister)
usersRouter.post('/login',  extractUserLogin,postUserLogin,sendLoging)
module.exports = usersRouter;