// Users Database Design
exports.up = function (knex) {
  return knex.schema.createTable('users', (tbl) => {
    tbl.increments();
    tbl.string('username', 128).unique().notNullable();
    tbl.string('phoneNumber', 64).unique();
    tbl.string('password', 255).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('users');
};
