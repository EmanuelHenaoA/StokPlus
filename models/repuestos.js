const {model, Schema} = require ('mongoose')

const repuestosSchema = new Schema (
    {
        idRepuesto: {
            type: Number,
            unique: true,
            required: [true, 'El ID es obligatorio']
        },
        nombre: {
            type: String,
            unique: true,
            required: [true, 'El nombre es obligatorio']
        },
        existencias: {
            type: Number,
            required: [true, 'El numero de existencias es obligatorio']
        },
        precio: {
            type: Number,
            required: [true, 'El precio es obligatorio']
        }
    },
    {
        versionKey: false
    }
)

module.exports = model('Repuestos', repuestosSchema)