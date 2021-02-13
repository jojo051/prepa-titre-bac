const Bottle = require('../models/Content');

const getAllBoxes = (req, res, next) => {
  Bottle.getAll((err, results) => {
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

const findboxById = (req, res, next) => {
  Bottle.findById(req.boxId, (err, results) => {
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

const postBox = (req, res, next) => {
  const { formData } = req
  Bottle.post(formData, (err, results) =>{
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

const putBox = (req, res, next) => {
  const { formData, boxId } = req
  Bottle.put( formData, boxId, (err, results) =>{
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

const deleteBox = (req, res, next) => {
  Bottle.delete(req.boxId, (err, results) =>{
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
  getAllBoxes, 
  findboxById,
  postBox,
  putBox,
  deleteBox
}