const User = require('../../model/user')
const bcrypt = require('bcryptjs');
const createUser = async (req, res) => {
 

    const { usuario, nombre, telefono, correo, password } = req.body;
  
    // Check if username already exists
    try {
      const user = await User.findOne({ usuario });
      if (user) {
        return res.status(400).json({ message: 'El nombre de usuario ya está en uso' });
      }
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error en el servidor' });
    }
  
    // Hash password
    const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(password, salt);
  //  se puede usar cuando queremos que la contraseña añade automaticamente para que sea mas seguro 
    const user = new User({
      usuario,
      nombre,
      telefono,
      correo,
      password // :hashedPassword   //en caso si queremos usarlo en este caso yo dejo que se crea el usuario  
    });
    // Save user to database
    try{
      await user.save()
    }catch(err){
      console.log(err);
      res.this.status(500).send('Error al guardar el usuario en nuestro bases de datos')
    };
}

module.exports = createUser