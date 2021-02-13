const db = require('../database/db');

const Categorie = {};

Categorie.getAll = (callback) => {
  db.query('select * from categorie', callback);
};

Categorie.findById = (categorieId, callback) => {
  db.query('select * from categorie where id = ?', [categorieId], callback);
};

Categorie.post = (formData, callback) => {
  db.query('INSERT INTO categorie SET ?',formData, callback);
};

Categorie.put = (formData, categorieId, callback) => {
  db.query('UPDATE categorie SET ? WHERE id = ?',[formData, categorieId], callback);
};

Categorie.delete = (categorieId, callback) => {
  db.query('DELETE FROM categorie WHERE id = ?',[categorieId], callback);
};

module.exports = Categorie;