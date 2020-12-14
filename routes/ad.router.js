const express = require('express');
const router = express.Router();
const ad_controller = require('../controllers/ad.controller');
const auth = require('../middleware/auth');

router.get('/', ad_controller.ad_list);
router.get('/:id',ad_controller.ad_detail);
router.post('/', auth(), ad_controller.ad_add);
router.put('/:id',auth(), ad_controller.ad_edit);
router.delete('/:id',auth(), ad_controller.ad_delete);

module.exports = router;