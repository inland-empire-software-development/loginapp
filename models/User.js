const mongoose = require('mongoose');

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
    }

});


// Export the User model
module.exports = mongoose.model('User', userSchema);