const Users = require('../users/users-model');

function checkCredentials(req, res, next) {
  const { username, password } = req.body;
  if (!username || !password) {
    res.json({
      status: 401,
      message: 'username, password, and phone number are required',
    });
  } else {
    next();
  }
}
// For Registration: Free Username ; No duplicate usernames

async function checkUsernameFree(req, res, next) {
  const username = { username: req.body.username };
  await Users.findBy(username)
    .then((user) => {
      if (!user.length) {
        return next();
      } else {
        return next(res.json({ status: 422, message: 'Username Taken' }));
      }
    })
    .catch((err) => {
      return next(err);
    });
}

module.exports = {
  checkUsernameFree,
  checkCredentials,
};
