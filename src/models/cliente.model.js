const { Schema, model } = require('mongoose');
const clienteSchema = new Schema({
        titulo: String,
        descripcion: String,
        estado: String,
        autor: String,
        localizacion: String,
})

module.exports = model('usuarios', clienteSchema);