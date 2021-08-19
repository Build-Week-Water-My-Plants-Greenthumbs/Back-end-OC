// Users Database Design
exports.up = function (knex) {
  return knex.schema.createTable('users', (tbl) => {
    tbl.increments();
    tbl.string('username', 128).unique().notNullable();
    tbl.integer('phone-number', 10).unique().notNullable();
    tbl.string('password', 255).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('users');
};
