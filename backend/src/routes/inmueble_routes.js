const express = require("express");
const inmuebles = express.Router();
const {InmuebleController} = require('../controllers/inmueble_controller')

const inmueble = new InmuebleController()

inmuebles.post('/', inmueble.create_inmueble)
inmuebles.get('/', inmueble.get_inmueble)

module.exports = {
    inmuebles
}