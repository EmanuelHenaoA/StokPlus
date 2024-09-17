const roles = require('../models/roles')
const Rol = require ('../models/roles')

const getRol = async (req, res) => {
    const roles = await Rol.find()
    res.json({roles})
}

const getOneRol = async(req, res) => {
    const {id} = req.params
    const rol = await Rol.findById(id)
    res.json(rol)
}

const putRol = async (req, res) => {
    const {idRol, nombre, estado} = req.body
    let msg = 'Rol Actualizado'
    try{
        await Rol.findOneAndUpdate({idRol: idRol}, {nombre: nombre, estado: estado})
    }catch(error){
        msg = error.message
    }
    res.json({msg:msg})
}

const postRol = async (req, res) => {
    let msg = 'Rol Creado'
    const body = req.body
    try{
        const rol = new Rol(body)
        await rol.save()
    }catch(error){
        msg = error
    }
    res.json({msg:msg})
}

const deleteRol = async (req, res) => {
    let msg = 'Rol Eliminado'
    id = req.params.id
    try{
        await Rol.findByIdAndDelete({_id: id})
    }catch(error){
        msg = error
    }
    res.json({msg:msg})
}

module.exports = {
    getRol,
    getOneRol,
    putRol,
    postRol,
    deleteRol
}