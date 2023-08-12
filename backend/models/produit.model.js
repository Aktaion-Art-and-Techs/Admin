const mongoose = require('mongoose');

const reqStr = {type:String, require: true};

const produitSchema = mongoose.Schema({
    titre : reqStr,
    type : reqStr,
    description: reqStr,
    prix_de_vente: {type:Number, required:true},
    mode_de_preparation: reqStr,
   
})

module.exports = mongoose.model('Produit', produitSchema);
