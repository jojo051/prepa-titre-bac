const db = require('../database/db');
const Box_category = {};

Box_category.get = ( formData ,callback) => {
    const sqlComande = "select box.name as box, category.name as category from box_category join box on box.id =box_category.box_id join category on category.id = box_category.category_id where box.name = ? AND category.name = ?;"
    Box_category.query(sqlComande, [req.body.box, req.body.category],callback);
}

module.exports = Box_category;