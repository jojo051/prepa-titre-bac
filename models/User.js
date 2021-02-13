const db = require('../database/db');

const User = {};

User.getAll = (callback) => {
  db.query('select * from user', callback);
};

User.findById = (userId, callback) => {
  db.query('select * from user where id = ?', [userId], callback);
};

User.post = (formData, callback) => {
  db.query('INSERT INTO user SET ?',formData, callback);
};

User.put = (formData, userId, callback) => {
  db.query('UPDATE user SET ? WHERE id = ?',[formData, userId], callback);
};

User.delete = (userId, callback) => {
  db.query('DELETE FROM user WHERE id = ?',[userId], callback);
};

User.register = (username, callback) =>{
  db.query('SELECT * FROM user where username = ?',[username], callback);
}

User.registervalid = ( formData, callback) =>{
  db.query('INSERT INTO user SET ?',[formData], callback);
}

User.login =(username, callback)=>{
  db.query('SELECT password FROM user WHERE username = ?',username, callback);
}

module.exports = User;