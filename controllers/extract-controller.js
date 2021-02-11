
const extractContentId = (req, res, next) => {
  req.contentId = parseInt(req.params.contentId);
  next();
};

const extractUserId = (req, res, next) => {
  req.userId = parseInt(req.params.userId);
  next();
};

const extractUserData = (req,res, next) =>{
  req.formData = req.body; 
  if (req.formData == null || req.formData === '') {
    res.status(422).json("L'utilisateur est mal renseignée");
  } else 
    next();
};

const extractUserDataId = (req, res, next) => {
  req.formData = req.body; 
  req.userId = parseInt(req.params.userId);
  if (req.formData == null || req.formData === '') {
    res.status(422).json("L'utilisateur est mal renseignée");
  } else
    next();
};

module.exports = {
  extractContentId, extractUserId, extractUserData, extractUserDataId,
};