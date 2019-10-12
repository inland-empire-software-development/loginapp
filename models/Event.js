const mongoose = require('mongoose');
const Schema = mongoose.Schema;


/**
 * Using the Schema constructor, create a new EventSchema object
 * This is simlar to a Sequelize model
 */


const eventSchema = new Schema({
  date: {
    type: Date,
    // default: Date.now,
    unique: true
  },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
      unique: true
    }
  ]
});


// Export the User model
module.exports = mongoose.model('Event', eventSchema);
