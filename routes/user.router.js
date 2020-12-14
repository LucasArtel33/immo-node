const express = require('express');
const router = express.Router();
const user_controller = require('../controllers/user.controller');

router.get('/', user_controller.user_list);
router.get('/:id',user_controller.user_detail);
router.post('/', user_controller.user_add);
router.post('/login', user_controller.user_login);
// router.put('/:id',user_controller.user_edit);
router.delete('/:id',user_controller.user_delete);
router.put('/password/:id',user_controller.user_password);
module.exports = router;