const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/**
 * Using the Schema constructor, create a new UserSchema object
 * This is simlar to a Sequelize model
 */
const userSchema = new Schema({
    meetUpId: {
        type: String,
        unique: true
    },
    Name: {
        type: String,
    },
    photourl: {
        type: String,
    }

});


// Export the User model
module.exports = mongoose.model('User', userSchema);
