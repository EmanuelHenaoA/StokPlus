const {model, Schema} = require ('mongoose')

const usuariosSchema = new Schema (
    {
        idUsuario: {
            type: Number,
            unique: true,
            required: [true, 'El ID es obligatorio']
        },
        nombre: {
            type: String,
            unique: true,
            required: [true, 'El nombre es obligatorio']
        },
        telefono: {
            type: Number,
            required: [true, 'El numero de celular es obligatorio']
        },
        direccion: {
            type: String,
            required: [true, 'La direccion es obligatoria']
        },
        email: {
            type: String,
            unique: true,
            required: [true, 'El email es obligatorio']
        },
        contraseña: {
            type: String,
            required: [true, 'La contraseña es obligatoria'],
            minlength: [8, 'Minimo 8 Caracteres']
        }
    },
    {
        versionKey: false
    }
)

module.exports = model('Usuarios', usuariosSchema)