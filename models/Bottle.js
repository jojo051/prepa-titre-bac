const db = require('../database/db');

const Bottle = {};

Bottle.getAll = (callback) => {
  db.query('select * from bottle', callback);
};

Bottle.findById = (bottleId, callback) => {
  db.query('select * from bottle where id = ?', [bottleId], callback);
};

Bottle.post = (formData, callback) => {
  db.query('INSERT INTO bottle SET ?',formData, callback);
};

Bottle.put = (formData, bottleId, callback) => {
  db.query('UPDATE bottle SET ? WHERE id = ?',[formData, bottleId], callback);
};

Bottle.delete = (bottleId, callback) => {
  db.query('DELETE FROM bottle WHERE id = ?',[bottleId], callback);
};

module.exports = Bottle;