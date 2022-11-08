const mongose = require('mongoose');
const {db, URI} = require('./configs/databaseConfig')

const dbConection = async() => {
    try {
        console.log('Esperando la conexion con el servicio mongod');
        await mongose.connect(URI);
        console.log('Conectado a ' + db);

    } catch (error) {

        throw new Error(error);

    }
}

module.exports = {
    dbConection
};