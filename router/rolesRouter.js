const {Router} = require ('express')
const {getRol, postRol, putRol, deleteRol, getOneRol} = require ('../controllers/rolesController')

const rolesRouter = Router()
rolesRouter.get('/', getRol)
rolesRouter.get('/:id', getOneRol)
rolesRouter.post('/', postRol)
rolesRouter.put('/:id', putRol)
rolesRouter.delete('/:id', deleteRol)

module.exports = rolesRouter