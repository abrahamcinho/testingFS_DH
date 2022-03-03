const express = require('express');
const router = express.Router();
const dsProducts_Ctrl = require('../../controllers/dashboard/dsProductos_Ctrl');

router.get('/', dsProducts_Ctrl.listAll);
router.get('/:id', dsProducts_Ctrl.listOne);
router.put('/update/:id', dsProducts_Ctrl.updateProd);
router.delete('/delete/:id', dsProducts_Ctrl.deleteProd);
router.post('/create', dsProducts_Ctrl.createProd);

module.exports = router;