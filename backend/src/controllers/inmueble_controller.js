const { create_inmueble, get_inmueble } = require("../app_bussiness_rules/inmuebles/index")

class InmuebleController{

    create_inmueble(req,res){
        return res.send(create_inmueble())
    }

    get_inmueble(req, res){
        return res.send(get_inmueble())
    }

}

module.exports = {
    InmuebleController
}