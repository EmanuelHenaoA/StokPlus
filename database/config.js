const mongoose = require('mongoose')

const dbConnection = async() => {
    try{
        await mongoose.connect(process.env.MONGO_CNN)
        console.log('Connect to database Succesfull')
    } catch (error){
        console.log(error)
    }
}

module.exports = dbConnection