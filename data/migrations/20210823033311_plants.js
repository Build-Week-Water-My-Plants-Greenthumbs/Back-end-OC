exports.up = function (knex) {
  return knex.schema.createTable('plants', (tbl) => {
    tbl.increments('plant_id');
    tbl.string('nickname', 128).unique().notNullable();
    tbl.string('species', 10).unique().notNullable();
    tbl.string('water_schedule', 255).notNullable();
    tbl.string('image');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('plants');
};
