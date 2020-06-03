import User from '../models/User';

export async function createUser(req, res) {
  console.log(req.body);
  const { name, middle_name, last_name, sex, birtdate, cell_phone, email, rol } = req.body;
  try {
    let newUser = await User.create({
      name, 
      middle_name, 
      last_name, 
      sex, 
      birtdate, 
      cell_phone, 
      email, 
      rol 
    }, {
      fields: ['name', 'middle_name', 'last_name', 'sex', 'birtdate', 'cell_phone', 'email', 'rol']
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