const db = require('../../data/dbConfig');

function getUsers() {
  return db('users');
}
function findBy(filter) {
  return db('users').where(filter);
}

async function add(user) {
  console.log(user.phoneNumber);
  const [id] = await db('users').insert(user, 'id');
  return db('users').where({ id }).first();
}

module.exports = {
  add,
  findBy,
  getUsers,
};
