const express = require('express');
const router  = express.Router();

const controller = require('../controllers/user.controller');

// /api/users
router.get('/', controller.getUsers);
router.post('/create', controller.createUser);
router.get('/:id', controller.getUserById);
router.put('/:id', controller.updateUserById);
router.delete('/:id', controller.deleteUserById);

module.exports = router;