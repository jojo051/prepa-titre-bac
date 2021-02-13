const extractBoxCategory = (req, res, next) => {
  req.formData = req.body;
  next();

const extractCategoryId = (req, res, next) => {
  req.categoryId = parseInt(req.params.categoryId);
  next();
};
const extractboxId = (req, res, next) => {
  req.boxId = parseInt(req.params.boxId);
  next();
};

const extractBottleId = (req, res, next) => {
  req.bottleId = parseInt(req.params.bottleId);
  next();
};

const extractContentId = (req, res, next) => {
  req.contentId = parseInt(req.params.contentId);
  next();
};

const extractUserId = (req, res, next) => {
  req.userId = parseInt(req.params.userId);
  next();
};

const extractData = (req,res, next) =>{
  req.formData = req.body; 
  if (req.formData == null || req.formData === '') {
    res.status(422).json("Unprocessable Entity");
  } else 
    next();
};

const extractDataId = (req, res, next) => {
  req.formData = req.body;
  req.contentId = parseInt(req.params.contentId);
  if (req.formData == null || req.formData === '') {
    res.status(422).json("Unprocessable Entity");
  } else
    next();
};

const extractUserRegisterData = (req, res, next) =>{
  const formData = req.body; 
  const { username, password } = formData
  if ((username == null || username === '') || (password == null ||password === '')){
    res.status(422).json("L'utilisateur est mal renseignée");
  } else 
    next();
};

const extractUserLogin = (req, res, next) =>{
  const {username, password} = req.body;
  if ((username == null || username === '') || (password == null || password === '')) {
    res.status(422).json("E-Mail ou Mot de passe incorrect");
  } else {
    next();
  }
}

module.exports = {
  extractContentId,
  extractUserId,
  extractData, 
  extractDataId, 
  extractUserRegisterData,
  extractUserLogin,
  extractBottleId,
  extractboxId,
  extractCategoryId,
  extractBoxCategory,
};