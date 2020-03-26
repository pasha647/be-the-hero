const express = require('express')

const Ong = require('./controllers/Ong')
const Incidents = require('./controllers/Incidents')
const Profiles = require('./controllers/Profiles')
const Session = require('./controllers/Session')
const routes = express.Router()

routes.post('/session', Session.create)

routes.get('/ongs', Ong.index)
routes.post('/ongs', Ong.create)

routes.get('/profiles', Profiles.index)

routes.get('/incidents', Incidents.index)
routes.post('/incidents', Incidents.create)
routes.delete('/incidents/:id', Incidents.delete)
module.exports = routes;