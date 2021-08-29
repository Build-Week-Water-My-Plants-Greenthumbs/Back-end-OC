const Plants = require('../plants/plants-model');

function checkForToken(req, res, next) {
  const { token } = req.body;
  if (token.length) {
    next();
  } else {
    return res.json({
      message: 'You must be logged in to access this page',
      status: 401,
    });
  }
}

const checkIfEmpty = (req, res, next) => {
  if (!req.body.length) {
    return res.json({ message: 'Form data missing.', status: 400 });
  }
};

module.exports = {
  checkIfEmpty,
  checkForToken,
};
