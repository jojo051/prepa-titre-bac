const Box_category = require('../models/Box_category');

const getBoxCategory = (req, res, next) => {
    const { formData } = req.formData
    Box_category.get(formData.body.box,formData.body.category,(err, results) => {
        if (err) {
          console.log(err);
          res.sendStatus(500);
        }
        else {
          req.data = results;
          next();
        }
      });
}

module.exports = {getBoxCategory}