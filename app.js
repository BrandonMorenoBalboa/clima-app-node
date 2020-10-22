const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

// Para no utilizar comandos como crear, listar e actualizar, ocupamos el metodo opstions
const argv = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            desc: 'Descripcion de la ciudad para obtener el clima'
        }
    }).argv;






const getInfo = async ( direccion ) => {

    
    
    try {
        const coords = await lugar.getLugarLatLng( argv.direccion )
        const temperatura = await clima.getClima( coords.lat, coords.lng );
        return `El clima de ${ coords.direccion } es de ${ temperatura }°C`;
        
    } catch ( e ) {
        return `No se pudo determinar el clima de ${ direccion }`
    }
    
    // Salida 

    // El clima de XXXX es de XX
    // 


}


getInfo( argv.direccion )
    .then( console.log )
    .catch( console.log )