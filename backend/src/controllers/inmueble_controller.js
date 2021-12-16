const { create_inmueble, get_inmueble } = require("../app_bussiness_rules/inmuebles/index")
class InmuebleController{

    create_inmueble(req,res){
        return res.send(create_inmueble())
    }

    async get_inmueble(req, res){
        const filter = req.filter
        let data = await get_inmueble(filter)
        return res.send(data)
    }

}

module.exports = {
    InmuebleController
}