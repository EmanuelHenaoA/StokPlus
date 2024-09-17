const {Router} = require ('express')
const {getProveedor, getOneProveedor, putProveedor, postProveedor, deleteProveedor} = require ('../controllers/proveedoresController')

const proveedoresRouter = Router()
proveedoresRouter.get('/', getProveedor)
proveedoresRouter.get('/:id', getOneProveedor)
proveedoresRouter.post('/', postProveedor)
proveedoresRouter.put('/', putProveedor)
proveedoresRouter.delete('/:id', deleteProveedor)

module.exports = proveedoresRouter