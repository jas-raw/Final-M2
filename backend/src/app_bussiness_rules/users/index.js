const { create } = require("./use_cases/login")

const create_user = create()

module.exports = {
    create_user
}