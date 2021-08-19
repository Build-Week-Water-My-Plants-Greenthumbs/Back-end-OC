const jwt = require('jsonwebtoken');
const { jwtSecret } = process.env.SECRET || 'undefined';

module.exports = function (user) {
  const payload = {
    sub: user.id,
    username: user.username,
  };
  const options = {
    expiresIn: '1d',
  };
  return jwt.sign(payload, jwtSecret, options);
};
