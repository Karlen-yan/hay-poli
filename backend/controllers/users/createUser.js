const User = require('../../model/user')

const createUser = async (req, res) => {
  //Create user model
  // let today = new Date().toISOString().split('T')[0];
  const {usuario,nombre,telefono,correo,password} = req.body;
  const user = new User({
    usuario,
    nombre,
    telefono,
    correo,
    password
    // usage: [{ date: today, count: 0 }],
  });
try{
  await user.save()
}catch(err){
  console.log(err);
  res.this.status(500).send('Error al guardar el usuario en nuestro bases de datos')
};

  // Save Product in the database
  // console.log(user);
//   User.create(user)
//     .then((results) => {
//       // HTTP response
//       res.json(`User registered successfully. Use apikey= ${user.apiKey}`);
//     })
//     .catch((error)=>{
//       res.json("Error when registering user");
//     })
//     .finally(()=>{
//       //
//     })
}

module.exports = createUser