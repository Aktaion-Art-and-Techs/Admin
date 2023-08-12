mongoose = require('mongoose');
 
const AppDB = class AppDB {
  

  static connect(){
   mongoose.set('strictQuery', true);
   const uri = process.env.NODE_ENV !== 'production' ? process.env.DEV_DB_URI : process.env.DB_URI
   const devState = process.env.NODE_ENV !== 'production' ? true : false
    mongoose.connect(uri,
       { useNewUrlParser: true, useUnifiedTopology: true })
       .then(() =>{
        if (devState==true){

          console.log('Connexion à MongoDB réussie !=> DB Dev')
        }else{
          console.log('Connexion à MongoDB réussie !=> DB Prod')
        }
       } ) 
       .catch(() => console.log('Connexion à MongoDB échouée !:=> ', ));
  }
}

module.exports = AppDB