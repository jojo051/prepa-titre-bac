const db = require('../database/db');

const Content = {};

Content.getAll = (callback) => {
  db.query('select * from content', callback);
};

Content.findById = (contentId, callback) => {
  db.query('select * from content where id = ?', [contentId], callback);
};

module.exports = Content;