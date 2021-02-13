const db = require('../database/db');

const Content = {};

Content.getAll = (callback) => {
  db.query('select * from content', callback);
};

Content.findById = (contentId, callback) => {
  db.query('select * from content where id = ?', [contentId], callback);
};

Content.post = (formData, callback) => {
  db.query('INSERT INTO content SET ?',formData, callback);
};

Content.put = (formData, contentId, callback) => {
  db.query('UPDATE content SET ? WHERE id = ?',[formData, contentId], callback);
};

Content.delete = (contentId, callback) => {
  db.query('DELETE FROM content WHERE id = ?',[contentId], callback);
};

module.exports = Content;