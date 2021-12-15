const { create } = require("./use_cases/create")
const { get } = require("./use_cases/get")

const create_inmueble = create()
const get_inmueble = get()

module.exports = {
    create_inmueble,
    get_inmueble
}