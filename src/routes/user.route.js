const {addUserController, getAllUsersController, showForm} = require('../controllers/user.controller');


const router = require('express').Router();
router.get('/', showForm);
router.get('/allUsers', getAllUsersController);

router.post('/home', addUserController);


module.exports = router;