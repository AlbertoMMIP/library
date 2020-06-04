const express = require('express');
const router  = express.Router();

const controller = require('../controllers/user.controller');

// /api/users/
router.post('/', controller.createUser);
router.get('/', controller.getUsers);

// /api/users/:userID
router.get('/:id', controller.getUserById);
router.delete('/:id', controller.deleteUserById);
router.put('/:id', controller.updateUserById);

module.exports = router;