const express = require('express');
const router  = express.Router();

const controller = require('../controllers/book.controller');

// /api/books
router.get('/', controller.getBooks);
router.post('/create', controller.createBook);
router.get('/:id', controller.getBookById);
router.put('/:id', controller.updateBookById);
router.delete('/:id', controller.deleteBookById);

module.exports = router;