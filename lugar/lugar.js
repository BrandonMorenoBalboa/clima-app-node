const axios = require('axios');



const getLugarLatLng = async( dir ) => {

    const encodeUrl = encodeURI( dir );

    const instance = axios.create({
        baseURL: `https://geocode.xyz/${ encodeUrl }?json=1`,
        timeout: 2000,
      });
    
    const resp = await instance.get()
    
/*     if( resp.error.code === "008") {
        throw new Error(`No hay resultados para ${ dir }`)
    } */

    const data = resp.data;
    const direccion = data.standard.city
    const lng = data.longt
    const lat = data.latt

    return {
       direccion, 
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}