const sendIfExists = (req, res) => {
  const { data } = req;
  if (data == null) {
    return res.sendStatus(404);
  }
  res.json(data);
};

const send = (req, res) => {
  const { data } = req;

  res.json(data);
};

const sendPost =(req, res) => {
  const { data } = req;
  if ( data == null ){
    res.sendStatus(404);
  } else if (data.affectedRows > 0) {
    res.status(201).json( {id:data.insertId} )
  } else 
  res.send("Aucune modification");
}

const sendPutModified = (req,res) => {
  const { data } = req;
  if ( data == null ){
    res.sendStatus(404);
  } else if (data.changedRows > 0) {
  res.sendStatus(201)
  } else 
    res.send("Aucune modification");
}

const sendDeleted = (req, res) =>{
  const { data } = req;
  if ( data == null ){
    res.sendStatus(404);
  } else if (data.affectedRows > 0) {
  res.status(200).send("supression effectuer")
  } else 
    res.send("Aucune modification");
}
const sendregister = (req, res)=>{
  const { data } = req;
  const {formData, results} = data
  const {username} = formData
  if ( data == null ){
    res.sendStatus(404);
  } else if (data.results.affectedRows > 0) {
    res.status(201).json( {username, password:null, id:results.insertId} )
  } else 
  res.send("Aucune modification");
  }

  const sendLoging = (req, res)=>{
    const { data } = req;
    console.log(data)
    res.json(
      data
      );
  }

module.exports = {
  sendIfExists,
  send,
  sendPutModified,
  sendPost,
  sendDeleted,
  sendregister,
  sendLoging,
}