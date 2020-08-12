const hbs = require('hbs');

// Se registra un helper para obtener el anio
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});
// Se registra otro helper para capitalizar un nombre
hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, index) => {
        palabras[index] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');
});