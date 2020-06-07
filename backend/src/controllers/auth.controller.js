const User =  require('../models/User');
const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  const user = await User.findOne({
    where: {email:req.body.email}
  });
  if(!user) return res.status(500).json({msg:"Email no registrado"});

  let validPass = bcrypt.compareSync(req.body.password,user.password);

  if (!validPass) return res.status(500).json({msg:"Contraseña invalida"});

  // const token = jwt.sign(
  //   {id: user._id},
  //   process.env.SECRET,
  //   {
  //     expiresIn:8600
  //   }
  // );

  // delete user._doc.password;
  console.log('user', user);
  
  return res.json(user);

};