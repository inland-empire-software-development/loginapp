const mongoose = require('mongoose');

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const Schema = mongoose.Schema;

const eventSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    users: [
      {
        type: Schema.Types.ObjectId,
        ref: "User"
      }
    ]
});


// Export the User model
module.exports = mongoose.model('Event', eventSchema);