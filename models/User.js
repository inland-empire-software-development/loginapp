const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/**
 * Using the Schema constructor, create a new UserSchema object
 * This is simlar to a Sequelize model
 */
const userSchema = new Schema({
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
