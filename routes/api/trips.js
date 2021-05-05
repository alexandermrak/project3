var express = require('express');
var router = express.Router();
var tripsCtrl = require('../../controllers/api/trips');

router.get('/', tripsCtrl.index);
router.post('/', tripsCtrl.create);
router.get('/:id', tripsCtrl.show);
// router.put('/:id', tripsCtrl.update);
// router.delete('/:id', tripsCtrl.delete);

module.exports = router;