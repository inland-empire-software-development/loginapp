/**
 * @function handlePopulatedUser
 * Returns populated events with checked-in users information.
 */

const handlePopulatedUser = (req, res, Event) => {
  Event.find({})
  // Specify that we want to populate the retrieved users with any associated notes
  .populate("users")
  .then(function (dbUser) {
      // If able to successfully find and associate all Users and Notes, send them back to the client
      res.json(dbUser);
  })
  .catch(function (err) {
      // If an error occurs, send it back to the client
      res.json(err);
  });
}

module.exports = handlePopulatedUser;