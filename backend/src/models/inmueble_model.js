const {Schema, model} = require("mongoose");

const inmueble_model_chema = new Schema({
    tipo:{
        type: String
    },
    habitaciones:{
        type: Number
    },
    baños:{
        type: Number
    },
    patio:{
        type: Boolean
    },
    pisos:{
        type: Number
    },
    sector:{
        type: String
    },
    cocina_integral:{
        type: Boolean
    },
    descripcion:{
        type: String
    },
    valor:{
        type: BigInt
    },
    nombre_asesor:{
        type: String
    },
    telefono_asesor: {
        type: String
    },
    imagenes: {
        type: Array
    }
});

module.exports = model("inmueble_model",inmueble_model_chema,"inmuebles")