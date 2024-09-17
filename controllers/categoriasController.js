const Categoria = require ('../models/categorias')

const getCategoria = async (req, res) => {
    const categorias = await Categoria.find()
    res.json({categorias})
}

const getOneCategoria = async(req, res) => {
    const {id} = req.params
    const categoria = await Categoria.findById(id)
    res.json(categoria)
}

const putCategoria = async (req, res) => {
    const {idCategoria, nombre, estado} = req.body
    let msg = 'Categoria Actualizada'
    try{
        await Categoria.findOneAndUpdate({idCategoria: idCategoria}, {nombre: nombre, estado: estado})
    }catch(error){
        msg = error
    }
    res.json({msg:msg})
}

const postCategoria = async (req, res) => {
    let msg = 'Categoria Creada'
    const body = req.body
    try{
        const categoria = new Categoria(body)
        await categoria.save()
    }catch(error){
        msg = error
    }
    res.json({msg:msg})
}

const deleteCategoria = async (req, res) => {
    let msg = 'Categoria Eliminada'
    id = req.params.id
    try{
        await Categoria.findByIdAndDelete({_id: id})
    }catch(error){
        msg = error
    }
    res.json({msg:msg})
}

module.exports = {
    getCategoria,
    getOneCategoria,
    putCategoria,
    postCategoria,
    deleteCategoria
}