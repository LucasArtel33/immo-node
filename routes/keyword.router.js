const express = require('express');
const router = express.Router();
const keyword_controller = require('../controllers/keyword.controller');
const auth = require('../middleware/auth');

router.get('/', keyword_controller.keyword_list);
router.get('/:id',keyword_controller.keyword_detail);
router.post('/', keyword_controller.keyword_add);
router.put('/:id',keyword_controller.keyword_edit);
router.delete('/:id',keyword_controller.keyword_delete);

module.exports = router;