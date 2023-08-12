const  router = require('express').Router()
const CommandeCtrl = require('../controllers/commande.ctrl')
const commande = require('../models/commande.model')

router.route('/')
    .get(CommandeCtrl.getCommandes).post(CommandeCtrl.createCommande)
    
router.route('/:codeCommande').get(CommandeCtrl.getCommandeByCode)

module.exports = router