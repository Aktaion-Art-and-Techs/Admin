const router = require('express').Router()
const {getProduit, listProduit, createProduit} = require('../controllers/produit.ctrl')
const upload = require('../middleware/uploader').fields([{name:"cover", maxCount:2}]);
const imgUploadHandler = require('../middleware/img.uploader.hanlder')

router.route('/')
    .get(listProduit)
    .post(createProduit)

router.route('/:id')
    .get(getProduit)

module.exports = router