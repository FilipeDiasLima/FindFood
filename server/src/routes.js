const { Router } = require('express');

const authMiddleware = require('./app/middlewares/auth');

const multer = require('multer');
const multerConfig = require('./app/config/multer');

const UserController = require('./app/controllers/UserController');
const SessionController = require('./app/controllers/SessionController');
const PointController = require('./app/controllers/PointController');
const FilterController = require('./app/controllers/FilterController');

const routes = new Router();
const upload = multer(multerConfig);

// users
routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.delete('/users', UserController.delete);

// sessions
routes.post('/sessions', SessionController.store);

// filters
routes.get('/filters', FilterController.index);

// points
routes.get('/points', PointController.index);
routes.get('/points/:id', PointController.show);

// need authorization 
// routes.use(authMiddleware);

// points
routes.post('/points', upload.single('image'), PointController.store);
routes.delete('/points/:id', PointController.delete);

module.exports = routes;