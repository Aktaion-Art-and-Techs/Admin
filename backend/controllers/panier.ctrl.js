const Panier = require('../models/panier.model')

exports.getPanier = async (req, res, next)=>{
    Panier.find()
    .then(data => res.status(200).json({error:false, data}))
    .catch(error=>res.status(403).json({error:true, msg:error.message}))
}
