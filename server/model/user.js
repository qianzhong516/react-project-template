const { Schema } = require('mongoose')
const mongoose = require('./mongodb')

const userSchema = new Schema({
    username: { type: String, unique: true, required: true },
    gender: String,
    Intro: String,
    avatar: String,
    friends: Array,
    blockedUsers: Array
})

// Simplified the returned doc object. Usage: doc.toJSON()
userSchema.set('toJSON', {
    transform: (doc, obj) => {
        obj.id = obj._id.toString()
        delete obj.__v
        delete obj._id
    }
})

const User = mongoose.model('users',userSchema)

module.exports = User 

