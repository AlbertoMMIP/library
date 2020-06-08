const Inventory =  require('../models/Inventory');

exports.createInventory = async (req, res) => {
  try {
    const { inventory_code, book_id, status } = req.body;
  
    let newInventory = await Inventory.create({
      inventory_code, 
      book_id,
      status
    }, {
      fields: ['inventory_code', 'book_id', 'status']
    });
    if (newInventory) {
      return res.json({
        message: 'Inventory created successfully',
        data: newInventory
      })
    }
  } catch (error) {
    console.log("Error al crear Inventory => ", error);
    res.status(500).json({
      message: 'Something goes wrong',
      error,
      data: {}
    })
  }
}

exports.getInventories = async (req, res) => {
  try {
    const inventories = await Inventory.findAll({
      attributes: ['id','inventory_code', 'book_id', 'status']
    });
    return res.json({
      message: 'Inventories get successfully',
      data: inventories
    });
  } catch (error) {
    console.log("Error al consultar inventories => ", error);
    res.status(500).json({
      message: 'Something goes wrong',
      error,
      data: {}
    })
  }
}

exports.getInventoryByID = async (req, res) => {
  try {
    const { id } = req.params;
    
    const inventories = await Inventory.findAll({
      attributes: ['id','inventory_code', 'book_id', 'status'],
      where: {
        id
      }
    });

    return res.json({
      message: 'Inventory get successfully',
      data: inventories
    })
  } catch (error) {
    console.log("Error al consultar Inventory => ", error);
    res.status(500).json({
      message: 'Something goes wrong',
      error,
      data: {}
    })
  }
}

exports.getInventoiesByBook = async (req, res) => {
  try {
    const { book_id } = req.params;
    
    const inventories = await Inventory.findAll({
      attributes: ['id','inventory_code', 'book_id', 'status'],
      where: {
        book_id,
        status:['D']
      }
    });

    return res.json({
      message: 'Inventory get successfully',
      data: inventories
    })
  } catch (error) {
    console.log("Error al consultar Inventory => ", error);
    res.status(500).json({
      message: 'Something goes wrong',
      error,
      data: {}
    })
  }
}

exports.deleteInventoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const inventoryCount = await Inventory.destroy({
      where: {
        id
      }
    })
    return res.json({
      message: 'Inventory deleted successfully',
      data: inventoryCount
    })
  } catch (error) {
    console.log("Error al eliminar Inventory => ", error);
    res.status(500).json({
      message: 'Something goes wrong',
      error,
      data: {}
    })
  }
}

exports.updateInventoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const { inventory_code, book_id, status } = req.body;
    
    const inventories = await Inventory.findAll({
      attributes: ['id','inventory_code', 'book_id', 'status' ],
      where: {
        id
      }
    });
    
    if (inventories.length > 0) {
      inventories.forEach(async (Inventory) => {
        await Inventory.update({
          inventory_code, 
          book_id,
          status
        });
      });
    }

    return res.json({
      message: 'Inventory updated successfully',
      data: inventories
    })
  } catch (error) {
    console.log("Error al actualizar Inventory => ", error);
    res.status(500).json({
      message: 'Something goes wrong',
      error,
      data: {}
    })
  }
}

exports.updateStatusInventory = async (id, status) => {
  let response = true;
  try {
    const inventories = await Inventory.findAll({
      attributes: ['id','inventory_code', 'book_id', 'status' ],
      where: {
        id
      }
    });
    
    if (inventories.length > 0) {
      inventories.forEach(async (Inventory) => {
        await Inventory.update({
          status
        });
      });
    }
  } catch (error) {
    console.log("Error al actualizar status inventory => ", error);
    response = false;
  }
  return response;
}

exports.createInventoryInside = async (params) => {
  try {
    const { inventory_code, book_id } = params;
  
    let newInventory = await Inventory.create({
      inventory_code, 
      book_id,
      status:"D"
    }, {
      fields: ['inventory_code', 'book_id', 'status']
    });
    if (newInventory) {
      return true
    }
  } catch (error) {
    console.log("Error al crear Inventory => ", error);
    return false;
  }
}