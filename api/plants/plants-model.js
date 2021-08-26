const db = require('../../data/dbConfig');

function getPlants() {
  return db('plants');
}

function getById(plant_id) {
  return db('plants').where({ plant_id }).first();
}

async function addPlant(plant) {
  const [id] = await db('plants').insert(plant);
  return getById(id);
}

function deletePlant(plant_id) {
  return db('plants').where({ plant_id }).del();
}

async function updatePlant(plant_id, newDetails) {
  await db('plants').where({ plant_id }).update(newDetails);
  return getById(plant_id);
}

function getBySpecies(species) {
  return db('plants').where({ species }).first();
}
module.exports = {
  getPlants,
  getById,
  addPlant,
  deletePlant,
  updatePlant,
  getBySpecies,
};
