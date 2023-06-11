const mongoose = require('mongoose')

const MONGODB_URI = 'mongodb+srv://alito:alito23@dbportafolio.qowxg2f.mongodb.net/?retryWrites=true&w=majority'
const {DBUSER,DBPASSWORD,DBNAME} = process.env


connection = async()=>{
    try {
         await mongoose.connect(MONGODB_URI,{
            useUnifiedTopology:true,
            useNewUrlParser:true
        })
        console.log("Database is connected")
    } catch (error) {
        console.log(error);
    }
}

module.exports = connection
