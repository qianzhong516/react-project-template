const config = require('../utils/config')
const mongoose = require('mongoose')

try{
    mongoose.connect( config.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true} )
    console.log('Connected to MongoDB.')
}catch(err){
    console.log(err)
}

module.exports = mongoose
