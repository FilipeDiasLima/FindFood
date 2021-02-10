const Knex = require('knex');
const connection = require('../../database/connection')

class PointController {
  async store(request, response) {
    const {
      name,
      site,
      phone,
      latitude,
      longitude,
      city,
      state,
      country,
      filters,
    } = request.body;

    const userId = await connection('users').where('id', request.userId).first();

    if(!userId) {
      return response.status(400).send({ error: 'User not found!'})
    } else {
      if(userId.type === 'client') {
        return response.status(401).send({ error: 'Only owner can create points'})
      }
    }

    const pointExists = await connection('points').where('latitude', latitude).where('longitude', longitude).first();

    if (pointExists) {
      return response.status(400).send({ error: 'This point already exists' })
    }

    const trx = await connection.transaction();

    const point = {
      image: request.file.filename,
      image1: request.file.filename,
      image2: request.file.filename,
      name,
      site,
      phone,
      latitude,
      longitude,
      city,
      state,
      country,
      user_id: userId.id,
    }

    const ids = await trx('points').insert(point);

    const point_id = ids[0];

    const pointFilters = filters.split(',')
      .map(filter => Number(filter.trim()))
      .map(filter_id => {
        return {
          filter_id,
          point_id,
        };
      })

    await trx('point_filters').insert(pointFilters);

    await trx.commit();

    return response.status(200).send({
      id: point_id,
      ...point,
    });
  };

  async show(request, response) {
    const { id } = request.params;
    console.log(request.userId);

    const point = await connection('points')
      .where('id', id)
      .first();

    if (!point) {
      return response.status(401).send({ error: 'Point not found' });
    }

    const filters = await Knex('filters')
      .join('point_filters', 'filters.id', '=', 'point_filters.filter_id')
      .where('point_filters.point_id', id)
      .select('name');

    const serializedPoint = {
      ...point
      // image_url: `http://192.168.0.28:3333/uploads/${point.image}`,
    }

    return response.status(200).send({ point: serializedPoint, filters })
  }

  async index(request, response) {
    const { city, state, filters } = request.query;

    const parsedFilters = filters.split(',').map(filter => Number(filter.trim()));

    const points = await Knex('points')
    .join('point_filters', 'points.id', '=', 'point_filters.point_id')
    .whereIn('point_filters,filter_id', parsedFilters)
    .where('city', String(city))
    .where('state', String(state))
    .distinct()
    .select('points.*');

    const serializedPoint = points.map(point => {
      return {
        ...point
        // image_url: `http://192.168.0.28:3333/uploads/${point.image}`,
      }
    });

    return response.status(200).send(serializedPoint);
  }

  async delete(request, response) {
    const { id } = request.params;
    const userId = request.userId;

    const pointUser = await connection('points').where('id', id).where('user_id', userId).first();

    if(!pointUser) {
      return response.status(401).send({ error: "You can't permission to delete this point!" })
    }

    await connection('points').where('id', id).where('user_id', userId).first().delete();

    return response.json({ ok: true })
  }
}

module.exports = new PointController();