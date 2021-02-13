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

module.exports = Category;