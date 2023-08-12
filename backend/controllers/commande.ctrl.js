const  router = require('express').Router()
const CommandeCtrl = require('../controllers/commande')
const commande = require('../models/commande')

router.route('/')
    .get(CommandeCtrl.getCommandes).post(CommandeCtrl.createCommande)
    
router.route('/:codeCommande').get(CommandeCtrl.getCommandeByCode)

module.exports = router