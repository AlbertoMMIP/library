const express = require('express');
const router  = express.Router();

const controller = require('../controllers/loan.controller');

// /api/books
router.get('/', controller.getLoans);
router.post('/create', controller.createLoan);
router.get('/:id', controller.getLoanById);
router.put('/finishLoan/:id', controller.finishLoanById);

module.exports = router;