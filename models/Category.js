const db = require('../database/db');

const Category = {};

Category.getAll = (callback) => {
  db.query('select * from category', callback);
};

Category.findById = (categoryId, callback) => {
  db.query('select * from category where id = ?', [categoryId], callback);
};

Category.post = (formData, callback) => {
  db.query('INSERT INTO category SET ?',formData, callback);
};

Category.put = (formData, categoryId, callback) => {
  db.query('UPDATE category SET ? WHERE id = ?',[formData, categoryId], callback);
};

Category.delete = (categoryId, callback) => {
  db.query('DELETE FROM category WHERE id = ?',[categoryId], callback);
};

Category.get = (formData, categoryId, difficultiesId, callback) => {
  const sqlComande = "select category_id, category.name as category, choix, content, type, réponse, difficulté from category_content join category on category.id=category_content.category_id join content on content.id=category_content.content_id where type=? and  category_id=? and difficulté=?;"
  db.query(sqlComande,[formData, categoryId, difficultiesId], callback);
};

module.exports = Category;