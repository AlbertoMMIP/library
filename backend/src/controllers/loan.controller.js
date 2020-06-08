const Loan =  require('../models/Loan');
const controller = require('../controllers/inventory.controller');
const { CATALOGS } = require('../helpers/constants');

exports.createLoan = async (req, res) => {
  try {
    const { days_loan, inventory_id, user_id } = req.body,
            start_date = Date.now();
    const status = CATALOGS.PRESTAMO;
    let newLoan = await Loan.create({
      days_loan, 
      status,
      start_date, 
      inventory_id, 
      user_id
    }, {
      fields: ['days_loan', 'status', 'start_date', 'inventory_id', 'user_id' ]
    });
    if (newLoan) {
      let updateInventory = await controller.updateStatusInventory(inventory_id, status);
      if (updateInventory){
        return res.json({
          message: 'Loan created successfully',
          data: newLoan
        })
      }
    }
  } catch (error) {
    console.log("Error al crear el prestamo => ", error);
    res.status(500).json({
      message: 'Something goes wrong',
      error,
      data: {}
    })
  }
}

exports.getLoans = async (req, res) => {
  try {
    const loans = await Loan.findAll({
      attributes: ['id','days_loan', 'status', 'start_date', 'end_date', 'inventory_id', 'user_id']
    });
    return res.json({
      message: 'Loans get successfully',
      data: loans
    });
  } catch (error) {
    console.log("Error al consultar los prestamos => ", error);
    res.status(500).json({
      message: 'Something goes wrong',
      error,
      data: {}
    })
  }
}

exports.getLoanById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const loan = await Loan.findAll({
      attributes: ['id','days_loan', 'status', 'start_date', 'end_date', 'inventory_id', 'user_id'],
      where: {
        id
      }
    });
    return res.json({
      message: 'Loan get successfully',
      data: loan
    })
  } catch (error) {
    console.log("Error al consultar el prestamo por id => ", error);
    res.status(500).json({
      message: 'Something goes wrong',
      error,
      data: {}
    })
  }
}

exports.getLoanByUser = async (req, res) => {
  try {
    const { user_id } = req.params;
    
    const loan = await Loan.findAll({
      attributes: ['id','days_loan', 'status', 'start_date', 'end_date', 'inventory_id', 'user_id'],
      where: {
        user_id
      }
    });
    
    return res.json({
      message: 'Loan by user get successfully',
      data: loan
    })
  } catch (error) {
    console.log("Error al consultar el prestamo por usuario => ", error);
    res.status(500).json({
      message: 'Something goes wrong',
      error,
      data: {}
    })
  }
}

exports.finishLoanById = async (req, res) => {
  try {
    const { id } = req.params;
    const { inventory_id } = req.body,
          status = CATALOGS.FINALIZADO,
          end_date = Date.now();
    
    const loans = await Loan.findAll({
      attributes: ['id', 'days_loan', 'status', 'start_date', 'end_date', 'inventory_id', 'user_id' ],
      where: {
        id
      }
    });
    
    if (loans.length > 0) {
      loans.forEach(async (Loan) => {
        Loan.update({
          status,
          end_date
        })
        .then(async (res) => {
            await controller.updateStatusInventory(inventory_id, CATALOGS.DISPONIBLE);
        })
      });
    }
    return res.json({
      message: 'Loan updated successfully',
      data: loans
    })
  } catch (error) {
    console.log("Error al actualizar el prestamo => ", error);
    res.status(500).json({
      message: 'Something goes wrong',
      error,
      data: {}
    })
  }
}