const hbs = require('hbs');

/* Para no tener que mandar el mismo dato/funciones a cada pagina (como el año en el footer) 
podemos utilizar helpers de hbs */
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');
});