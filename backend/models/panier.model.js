const mongoose = require('mongoose');



const panierSchema = mongoose.Schema({
    idProduit: {type: mongoose.Types.ObjectId, null:false, require:true},
    prix_de_vente: {type:Number, required:true},
    quantite : {type: Number, default:1, require:false},
    date: {type:Date, default: new Date()}
})



module.exports = mongoose.model('Panier', panierSchema);
