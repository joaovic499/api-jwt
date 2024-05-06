const mongoose = require('mongoose')

const User = mongoose.model('User', {
    name: String,
    email: String,
    paswword: String,
})

module.exports = User