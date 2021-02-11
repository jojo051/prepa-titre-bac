const User = require('../models/User');

const getAllUsers = (req, res, next) => {
  User.getAll((err, results) => {
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

const findUserById = (req, res, next) => {
  User.findById(req.userId, (err, results) => {
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

const postUser = (req, res, next) => {
  User.post(req.formData, (err, results) =>{
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

const putUser = (req, res, next) => {
  User.put( req.formData, req.userId, (err, results) =>{
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

const deleteUser = (req, res, next) => {
  User.delete(req.userId, (err, results) =>{
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
  findUserById, getAllUsers, postUser, putUser, deleteUser
}