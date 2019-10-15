
/**
 * @function handleGetUserList
 * Pull users from database and send it to the front-end as an array
 */

const handleGetUserList = (req, res, User) => {
  User.find({}, function (err, users) {
    var userMap = [];

    for (let j = 0; j < users.length; j++) {
        userMap.push(users[j])
    }

    res.send(userMap);
  });
}

module.exports = handleGetUserList;
