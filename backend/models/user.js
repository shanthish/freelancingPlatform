const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    user_name: String,
    email: String,
    password: String,
    user: {
        type: String,
        enum: ['buyer','seller'],
    },
});

const User = mongoose.model('User', userSchema);
module.exports = User;