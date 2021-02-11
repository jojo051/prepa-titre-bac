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

module.exports = {
  findContentById, getAllContents
}