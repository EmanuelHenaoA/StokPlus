const {model, Schema} = require ('mongoose')

const rolesSchema = new Schema (
    {
        idRol: {
            type: Number,
            unique: true,
            required: [true, 'El ID es obligatorio']
        },
        nombre: {
            type: String,
            unique: true,
            required: [true, 'El nombre es obligatorio']
        },
        estado: {
            type: String,
            enum: ['Activo', 'Inactivo'],
            default: 'Activo',
            required: [true, 'El estado es obligatorio']
        }
    },
    {
        versionKey: false
    }
)

module.exports = model('Roles', rolesSchema)