const  router = require('express').Router()
const PanierCtrl = require('../controllers/panier.ctrl')

router.route('/')
    .get(PanierCtrl.getPanier)

module.exports = router

