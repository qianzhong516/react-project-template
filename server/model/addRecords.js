/**
 * Pre-add db records here
 */

const User = require('./user')
const mongoose = require('./mongodb')

/**
 * Type command `node server/model/addRecords.js` to test the following code
 */
const user = new User({
    username: "janice_zhong",
    Intro: "I'm Janice",
    avatar: "",
    friends: [1,3],
    blockedUsers: [2,4]
})

user.save().then(doc => {
    console.log(doc.toJSON())
    mongoose.disconnect()
})