const express = require('express');
const router  = express.Router();

const controller = require('../controllers/loan.controller');

// /api/loans
router.get('/', controller.getLoans);
router.post('/create', controller.createLoan);
router.get('/:id', controller.getLoanById);
router.get('/byUser/:user_id', controller.getLoanByUser);
router.put('/finishLoan/:id', controller.finishLoanById);

module.exports = router;