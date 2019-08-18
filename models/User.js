const mongoose = require('mongooose');

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "can't be blank"],
        match: [/^[a-zA-Z]+$/, 'Name is invalid'],
        index: true
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: [true, "can't be blank"],
        match: [/\S+@\S+\.\S+/, 'Email is invalid'],
        index: true
    },
    hash: String,
    salt: String
}, { timestamps: true });

// This creates our model from the above schema, using mongoose's model method
const User = mongoose.model('User', UserSchema);

// Export the User model
module.exports = User;