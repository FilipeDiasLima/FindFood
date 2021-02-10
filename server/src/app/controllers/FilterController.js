const connection = require('../../database/connection')

class FilterController {
  async index(request, response) {
    const filters = await connection('filters').select('*');

    const serializedFilters = filters.map(filter => {
      return {
        id: filter.id,
        name: filter.name,
      }
    });

    return response.json(serializedFilters);
  }
}

module.exports = new FilterController();