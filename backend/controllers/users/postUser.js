const bcrypt = require('bcryptjs');
const User = require('../../model/user');

const postUser = async (req, res) => {
  const usuario = req.body.usuario;
  const password = req.body.password;
  console.log(password);
  try {
    // Busca el usuario por su nombre de usuario
    const user = await User.findOne({ usuario }); 
    console.log(user.password)

    if(user.password === password){
        return res.status(200).json({ user });
        
    }else{
        return res.status(401).json({ message: 'Nombre de usuario o contraseña incorrectos' });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error en el servidor' });
  }
};

module.exports = postUser;