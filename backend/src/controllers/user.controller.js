const User =  require('../models/User');

exports.createUser = async (req, res) => {
  try {
    const { name, middle_name, last_name, sex, age, cell_phone, email, password, rol } = req.body;
  
    let newUser = await User.create({
      name, 
      middle_name, 
      last_name, 
      sex, 
      age, 
      cell_phone, 
      email,
      password,
      rol 
    }, {
      fields: ['name', 'middle_name', 'last_name', 'sex', 'age', 'cell_phone', 'email', 'password', 'rol']
    });
    if (newUser) {
      return res.json({
        message: 'User created successfully',
        data: newUser
      })
    }
  } catch (error) {
    console.log("Error al crear usuario => ", error);
    res.status(500).json({
      message: 'Something goes wrong',
      error,
      data: {}
    })
  }
}

exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      order: ['id']
    });
    return res.json({
      message: 'Users get successfully',
      data: users
    });
  } catch (error) {
    console.log("Error al consultar usuarios => ", error);
    res.status(500).json({
      message: 'Something goes wrong',
      error,
      data: {}
    })
  }
}

exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const user = await User.findOne({
      where: {
        id
      }
    })
    return res.json({
      message: 'User get successfully',
      data: user
    })
  } catch (error) {
    console.log("Error al consultar usuario => ", error);
    res.status(500).json({
      message: 'Something goes wrong',
      error,
      data: {}
    })
  }
}

exports.deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const userCount = await User.destroy({
      where: {
        id
      }
    })
    return res.json({
      message: 'User deleted successfully',
      data: userCount
    })
  } catch (error) {
    console.log("Error al eliminar usuario => ", error);
    res.status(500).json({
      message: 'Something goes wrong',
      error,
      data: {}
    })
  }
}

exports.updateUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, middle_name, last_name, sex, age, cell_phone, email, rol } = req.body;
    
    const users = await User.findAll({
      attributes: ['id', 'name', 'middle_name', 'last_name', 'sex', 'age', 'cell_phone', 'email', 'password', 'rol'],
      where: {
        id
      }
    });
    
    if (users.length > 0) {
      users.forEach(async (user) => {
        await user.update({
          name, 
          middle_name, 
          last_name, 
          sex, 
          age, 
          cell_phone, 
          email,
          password,
          rol 
        });
      });
    }

    return res.json({
      message: 'User updated successfully',
      data: users
    })
  } catch (error) {
    console.log("Error al actualizar usuario => ", error);
    res.status(500).json({
      message: 'Something goes wrong',
      error,
      data: {}
    })
  }
}