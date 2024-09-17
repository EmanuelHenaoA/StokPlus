const {Router} = require ('express')
const { getRepuesto, getOneRepuesto, postRepuesto, putRepuesto, deleteRepuesto } = require ('../controllers/repuestosController')

const repuestosRouter = Router()
repuestosRouter.get('/', getRepuesto)
repuestosRouter.get('/:id', getOneRepuesto)
repuestosRouter.post('/', postRepuesto)
repuestosRouter.put('/', putRepuesto)
repuestosRouter.delete('/:id', deleteRepuesto)

module.exports = repuestosRouter