const express = require('express')
const routes = express.Router()

const PlanetController = require('../Controller/PlanetController')
const SateliteController = require('../Controller/SateliteController')
const CapController = require('../Controller/CapController')
const SpaceshipController = require('../Controller/SpaceshipController')


// Rotas Planets
routes.post('/planets', PlanetController.store)
routes.get('/planets', PlanetController.index)
routes.put('/planets/:id', PlanetController.put)
routes.delete('/planets/:id', PlanetController.delete)


// Rotas Satelites
routes.post('/planets/:planetId/satelites', SateliteController.store)
routes.get('/planets/:planetId/satelites', SateliteController.index)


routes.post('/cap', CapController.store)
routes.get('/cap', CapController.index)


routes.post('/cap/:capId/spaceships', SpaceshipController.store)
routes.get('/cap/:capId/spaceships', SpaceshipController.index)



module.exports = routes
