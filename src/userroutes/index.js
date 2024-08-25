const express = require('express');
const router = express.Router();
const { getAllUsers, addUser, getUser } = require('./getData');

router.get('/users', getAllUsers);
router.post('/user', addUser);
router.get('/user', getUser);

module.exports = router;
