const mongoose = require('mongoose')

const mongoDBConnect = async ()=>{
    try{
      let connect =  await mongoose.connect(process.env.MONGO_STRING);
      console.log(`mongo DB connection successful Host ${mongoose.connection.host}: `.green);
    }catch(error){
        console.log(`${error}`.red);
    }
}

module.exports = mongoDBConnect