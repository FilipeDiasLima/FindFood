
exports.up = function(knex) {
  return knex.schema.createTable('points', table => {
    table.increments('id').primary();
    table.string('image').notNullable();
    table.string('image1').notNullable();
    table.string('image2').notNullable();
    table.string('name').notNullable();
    table.string('site').notNullable();
    table.string('phone').notNullable();
    table.decimal('latitude').notNullable();
    table.decimal('longitude').notNullable();
    table.string('city').notNullable();
    table.string('state').notNullable();
    table.string('country').notNullable();
    table.integer('user_id').notNullable().references('id').inTable('users');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('points');
};
