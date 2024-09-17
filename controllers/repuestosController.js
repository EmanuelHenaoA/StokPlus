const Repuesto = require ('../models/repuestos')

const getRepuesto = async (req, res) => {
    const repuestos = await Repuesto.find()
    res.json({repuestos})
}

const getOneRepuesto = async(req, res) => {
    const {id} = req.params
    const repuesto = await Repuesto.findById(id)
    res.json(repuesto)
}

const putRepuesto = async (req, res) => {
    const {idRepuesto, nombre, existencias, precio} = req.body
    let msg = 'Repuesto actualizado'
    try{
        await Repuesto.findOneAndUpdate({idRepuesto: idRepuesto}, {nombre: nombre, existencias: existencias, precio: precio})
    }catch(error){
        msg = error
    }
    res.json({msg:msg})
}

const postRepuesto = async (req, res) => {
    const{existencias, precio} = req.body
    if(existencias || precio<=0){
        res.status(500).json({msg: 'El valor de existencias y el precio no puede ser negativo'})
    }
    let msg = 'Repuesto Agregado'
    const body = req.body
    try{
        const repuesto = new Repuesto (body)
        await repuesto.save()
    }catch(error){
        msg = error
    }
    res.json({msg:msg})
}

const deleteRepuesto = async (req, res) => {
    let msg = 'Repuesto Eliminado'
    id = req.params.id
    try{
        await Repuesto.findByIdAndDelete({_id: id})
    }catch(error){
        msg = error
    }
    res.json({msg:msg})
}

module.exports = {
    getRepuesto,
    getOneRepuesto,
    putRepuesto,
    postRepuesto,
    deleteRepuesto
}