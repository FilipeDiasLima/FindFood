
exports.up = function(knex) {
  return knex.schema.createTable('point_filters', table => {
    table.increments('id').primary();

    table.integer('point_id')
      .notNullable()
      .references('id')
      .inTable('points');

    table.integer('filter_id')
      .notNullable()
      .references('id')
      .inTable('filters');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('point_filters');
};
