const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('./config/yargs').argv;


const getInfo = async(direccion) => {
   try {
      let coors = await lugar.getLugarLatLng( direccion );
      let temp = await clima.getClima(coors.lat, coors.lng);
      return `El clima en ${ coors.direccion } es de ${ temp }ºC`;
   } catch (e) {
      return `No se pudo determinar el clima en ${ direccion }`;
   }
}

getInfo( argv.direccion )
   .then( mensaje => console.log(mensaje) )
   .catch( e => console.log(e) );
