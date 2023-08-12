const Produit = require('../models/produit.model')


const getProduit = (req, res, next)=>{
    Produit.findOne({_id:req.params.id})
    .then(data=> {
    const {_id, titre, description, prix_de_vente, date_ajout, status} = data
        
        res.status(200).json({error:false, data:{_id, titre, description, prix_de_vente, mode_de_preparation}})
    })
    .catch(err=> res.status(403).json({error:true, msg: err.message}))
}

const listProduit = (req, res, next)=>{
    Produit.find()
    .then(data => res.status(200).json({error:false, data}))
    .catch(error=>res.status(403).json({error:true, msg:error.message}))
}

const createProduit = (req, res, next)=>{
    delete req.body._id;
    const produit = req.body

    Produit({...produit}).save()
    .then(data => {res.status(201).json({error:false, data})})
    .catch(error => res.status(403).json({error:true,msg:error.message}))
}

exports.getAll = (req, res)=>{
    Produit.find()
    .then(data => res.status(200).json({error:false, data}))
    .catch(error=>res.status(403).json({error:true, msg:error.message}))
}


module.exports = {getProduit, listProduit, createProduit}