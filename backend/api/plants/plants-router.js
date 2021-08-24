const router = require('express').Router();
const Plants = require('../plants/plants-model');

// returns your list of plants
router.get('/plantsList', (req, res, next) => {
  Plants.getPlants()
    .then((plants) => {
      if (!plants.length) {
        return res.json({
          status: 200,
          message: 'Time to create some plants!',
        });
      }
      res.status(200).json(plants);
    })
    .catch(next);
});
// adds a plant to your list tracked plants
router.post('/createPlant', (req, res, next) => {
  Plants.addPlant(req.body)
    .then((plant) => {
      res.json({
        message: `Congrats on adding your new Plant! Plant species:${plant.species}`,
        status: 201,
      });
    })
    .catch((err) => {
      res.json({
        message: 'Plant creation unsuccessful. Try again!',
        status: 401,
      });
    });
});
// updates the fields for your created plant
router.put('/updatePlant', (req, res, next) => {
  const id = req.params.id;
  Plants.updatePlant(id, req.body)
    .then((updatedPlant) => {
      res.json({ message: 'Congrats on updating your plant!', status: 200 });
    })
    .catch((err) => {
      res.json({
        message: 'Could not update your plant. Try again!',
        status: 401,
      });
    });
});
// deletes the created plant based upon id
router.delete('/deletePlant/:id', (req, res, next) => {
  Plants.deletePlant(req.params.id)
    .then((deletedPlant) => {
      if (deletedPlant) {
        res.json({
          message: `Congrats! ${deletedPlant.nickname} deleted. Don't forget to add more!`,
          status: 200,
        });
      }
    })
    .catch(
      res.json({
        message: 'Could not delete plant. Please try again.',
        status: 500,
      })
    );
});

module.exports = router;
