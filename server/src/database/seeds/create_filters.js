exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('filters').del()
    .then(function () {
      // Inserts seed entries
      return knex('filters').insert([
        { name: 'Café da manhã' },
        { name: 'Almoço' },
        { name: 'Lanche' },
        { name: 'Café' },
        { name: 'Jantar' },
        { name: 'Delivery' },
        { name: 'Reserva' },
      ]);
    });
};
