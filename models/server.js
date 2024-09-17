const express = require('express')
const cors = require('cors')
const dbConnect = require('../database/config')
require('../database/config')
const rolesRouter = require('../router/rolesRouter')
const proveedoresRouter = require('../router/proveedoresRouter')
const usuariosRouter = require('../router/usuariosRouter')
const repuestosRouter = require('../router/repuestosRouter')
const categoriasRouter = require('../router/categoriasRouter')

class Server {
    constructor(){
        this.app = express()
        this.listen()
        this.dbConnection()
        this.route()
    }

    async dbConnection(){
        await dbConnect()
    }

    route(){
        this.app.use(express.json())
        this.app.use(cors())
        this.app.use('/roles', rolesRouter)
        this.app.use('/proveedores', proveedoresRouter)
        this.app.use('/usuarios', usuariosRouter)
        this.app.use('/repuestos', repuestosRouter)
        this.app.use('/categorias', categoriasRouter)
    }

    listen(){
        this.app.listen(process.env.PORT, () => {
            console.log('Server running successfull')
        })
    }
}

module.exports = Server