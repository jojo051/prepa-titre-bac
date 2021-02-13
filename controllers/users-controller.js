const User = require('../models/User');
const bcrypt = require('bcrypt');
const { createToken } = require('../services/jwt');

const getAllUsers = (req, res, next) => {
  User.getAll((err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    else {
      req.data = results;
      next();
    }
  });
};

const findUserById = (req, res, next) => {
  User.findById(req.userId, (err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    else {
      req.data = results[0];
      next();
    }
  })
};

const postUserRegister = (req, res, next) =>{
  const formData = req.body; 
  User.register(formData.username, (err, results)=>{
    if ( results[0] != null) {
      res.status(500).json({message: "Username deja utilisé"});
    } else {
      bcrypt.hash(formData.password, 10, function(err, hash) {  
        formData.password = hash
        User.registervalid (formData, (err, results)=>{
          if (err) {
            console.log(err);
            res.status(500).send("Erreur lors de l'enregistrement");
          }else {
            req.data = {formData, results };
            next();
          }
          });
        })
      }
    })
  };  
  
  const postUserLogin =(req, res, next)=>{
    const {username, password} = req.body;
      User.login(username, (err, results)=>{
        if (err) {
          console.log(err);
          res.status(500).send("Erreur lors de l'authentification");
          } else if (results[0] == null) {
            res.status(400).send("Cet utilisateur n'existe pas");
            }
            else {
            const hash = results[0].password;
            bcrypt.compare(password, hash, function(err, same) {
              if(same) {
                const token = createToken(username)
                req.data = {
                  username,
                  token,
                  }; 
                }
                next();
              })   
            }
        
      })
  }

// const postUser = (req, res, next) => {
//   User.post(req.formData, (err, results) =>{
//     if (err) {
//       console.log(err);
//       res.sendStatus(500);
//     }
//     else {
//       req.data = results;
//       next();
//     }
//   })
// }

// const putUser = (req, res, next) => {
//   User.put( req.formData, req.userId, (err, results) =>{
//     if (err) {
//       console.log(err);
//       res.sendStatus(500);
//     }
//     else {
//       req.data = results;
     
//       next();
//     }
//   })
// }

const deleteUser = (req, res, next) => {
  User.delete(req.userId, (err, results) =>{
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    else {
      req.data = results;

      next();
    }
  })
}

module.exports = {
  findUserById, 
  getAllUsers, 
  // postUser, 
  // putUser, 
  deleteUser,
  postUserRegister,
  postUserLogin,
}