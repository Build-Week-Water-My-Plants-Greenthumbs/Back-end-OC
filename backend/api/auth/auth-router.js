const bcrypt = require('bcryptjs');
const router = require('express').Router();
const Users = require('../users/users-model');
const {
  checkUsernameFree,
  checkCredentials,
} = require('../auth/auth-middleware');
const tokenBuilder = require('../auth/token-builder');

router.get('/wateroc', (req, res, next) => {
  res.json({ message: 'Get is up', status: 200 });
});

router.post(
  '/register',
  checkCredentials,
  checkUsernameFree,
  (req, res, next) => {
    const { username, password } = req.body;
    const passwordHash = bcrypt.hashSync(password, 7);
    Users.add({ username, password: passwordHash })
      .then((user) =>
        res.json({ status: 201, message: 'Successful user creation!' })
      )
      .catch(next);
  }
);

router.post('/login', (req, res, next) => {
  let { username, password } = req.body;
  Users.findBy({ username })
    .then(([user]) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = tokenBuilder(user);
        res.status(200).json({
          message: `Welcome, ${user.username}`,
          token,
        });
      } else {
        next({ status: 401, message: 'invalid credentials' });
      }
    })
    .catch(next);
});

module.exports = router;
