const Content = require('../models/Content');

const getAllContents = (req, res, next) => {
  Content.getAll((err, results) => {
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

const findContentById = (req, res, next) => {
  Content.findById(req.contentId, (err, results) => {
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

const postContent = (req, res, next) => {
  const { formData } = req
  Content.post(formData, (err, results) =>{
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

const putContent = (req, res, next) => {
  const { formData, contentId } = req
  Content.put( formData, contentId, (err, results) =>{
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

const deleteContent = (req, res, next) => {
  Content.delete(req.contentId, (err, results) =>{
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
  findContentById, 
  getAllContents,
  postContent,
  putContent,
  deleteContent
}