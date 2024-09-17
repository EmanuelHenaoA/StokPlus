const {Router} = require ('express')
const {getUsuario, getOneUsuario, putUsuario, postUsuario, deleteUsuario} = require ('../controllers/usuariosController')

const usuariosRouter = Router()
usuariosRouter.get('/', getUsuario)
usuariosRouter.get('/:id', getOneUsuario)
usuariosRouter.post('/', postUsuario)
usuariosRouter.put('/', putUsuario)
usuariosRouter.delete('/:id', deleteUsuario)

module.exports = usuariosRouter