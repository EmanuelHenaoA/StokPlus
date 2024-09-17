const {model, Schema} = require ('mongoose')

const proveedoresSchema = new Schema (
    {
        idProveedor: {
            type: Number,
            unique: true,
            required: [true, 'El ID es obligatorio']
        },
        nombre: {
            type: String,
            required: [true, 'El nombre es obligatorio']
        },
        telefono: {
            type: Number,
            required: [true, 'El numero de celular es obligatorio']
        },
        email: {
            type: String,
            unique: true,
            required: [true, 'El email es obligatorio']
        }
    },
    {
        versionKey: false
    }
)

module.exports = model('Proveedores', proveedoresSchema)