const db = require('../database/db');

const Box = {};

Box.getAll = (callback) => {
  db.query('select * from box', callback);
};

Box.findById = (boxId, callback) => {
  db.query('select * from box where id = ?', [boxId], callback);
};

Box.post = (formData, callback) => {
  db.query('INSERT INTO box SET ?',formData, callback);
};

Box.put = (formData, boxId, callback) => {
  db.query('UPDATE box SET ? WHERE id = ?',[formData, boxId], callback);
};

Box.delete = (boxId, callback) => {
  db.query('DELETE FROM box WHERE id = ?',[boxId], callback);
};

module.exports = Box;