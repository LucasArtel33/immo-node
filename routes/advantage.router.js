const express = require('express');
const router = express.Router();
const advantage_controller = require('../controllers/advantage.controller');

router.get('/', advantage_controller.advantage_list);
router.get('/:id',advantage_controller.advantage_detail);
router.post('/', advantage_controller.advantage_add);
router.put('/:id', advantage_controller.advantage_edit);
router.delete('/:id', advantage_controller.advantage_delete);

module.exports = router;