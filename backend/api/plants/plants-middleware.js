const Plants = require('../plants/plants-model');

const checkIfEmpty = (req, res, next) => {
  if (!req.body.length) {
    return res.json({ message: 'Form data missing.', status: 401 });
  }
};

module.exports = {
  checkIfEmpty,
};
