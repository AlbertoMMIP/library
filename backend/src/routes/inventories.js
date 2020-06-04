const express = require('express');
const router  = express.Router();

const controller = require('../controllers/inventory.controller');

// /api/books
router.get('/', controller.getInventories);
router.post('/create', controller.createInventory);
router.put('/:id', controller.updateInventoryById);
router.delete('/:id', controller.deleteInventoryById);
router.get('/:id', controller.getInventoryByID);
router.get('/bybook/:book_id', controller.getInventoiesByBook);

module.exports = router;