const Bottle = require('../models/Content');

const getAllBottles = (req, res, next) => {
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

const findBottleById = (req, res, next) => {
  Bottle.findById(req.bottleId, (err, results) => {
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

const postBottle = (req, res, next) => {
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

const putBottle = (req, res, next) => {
  const { formData, bottleId } = req
  Bottle.put( formData, bottleId, (err, results) =>{
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

const deleteBottle = (req, res, next) => {
  Bottle.delete(req.bottleId, (err, results) =>{
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
  getAllBottles, 
  findBottleById,
  postBottle,
  putBottle,
  deleteBottle
}