const {Router} = require ('express')
const { getCategoria, getOneCategoria, postCategoria, putCategoria, deleteCategoria } = require ('../controllers/categoriasController')

const categoriasRouter = Router()
categoriasRouter.get('/', getCategoria)
categoriasRouter.get('/:id', getOneCategoria)
categoriasRouter.post('/', postCategoria)
categoriasRouter.put('/', putCategoria)
categoriasRouter.delete('/:id', deleteCategoria)

module.exports = categoriasRouter