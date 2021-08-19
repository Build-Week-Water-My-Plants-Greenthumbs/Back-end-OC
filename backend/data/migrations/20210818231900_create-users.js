exports.up = function (knex) {
  return knex.schema.createTable('users', (tbl) => {
    tbl.increments('user_id');
    tbl.string('username', 128).unique().notNullable();
    tbl.integer('phone-number', 10).unique().notNullable();
    tbl.string('password', 255);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('users');
};
