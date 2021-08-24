const router = require('express').Router();

router.get('/plantsRouter', (req, res, next) => {
  res.json({ message: 'plants get is up!', status: 200 });
});

router.post('/createPlant', (req, res, next) => {
  res.json({ message: 'post up', status: 201 });
});

router.put('/updatePlant', (req, res, next) => {
  res.json({ message: 'update up!', status: 201 });
});

router.delete('/deletePlant/:id', (req, res, next) => {
  res.json({ message: 'delete is up!', status: 200 });
});
module.exports = router;
