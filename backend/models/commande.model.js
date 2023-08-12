const mongoose = require('mongoose');

const reqStr = {type:mongoose.Schema.Types.String, require: true};

const commandeSchema = mongoose.Schema({
    nomEtPrenoms: reqStr,
    telephone: reqStr,
    email: {type: String, require: false},
    ville: reqStr,
    adresseLivraison:reqStr,
    saveurNature: {type: String, require: false,default:'0', trim: true},
    saveurSavane: {type: String, require: false,default:'0', trim: true},
    saveurGingembre: {type: String, require: false,default:'0', trim: true},
    statusCommande: {type: String, default:"en attente",  enum: ["en attente","confirmée","annulée", "en preparation", "expédiée", "livrée"], required: false},
    statusPaiment: {type: String, enum: ["payé","non payé",], default: "non payé", required: false},
    codeCommande : {type: String, require: true, unique: true, trim:true},
    prixTotal: {type: Number, require: false},
    StatusConfirmation: {type: Boolean, require: false, default:false},
    dateComande: {type:Date, default: new Date()},
    dateLivraison: {type:Date, default: new Date()}
})


module.exports = mongoose.model('Commande', commandeSchema);
