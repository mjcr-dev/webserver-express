const express = require("express");
const app = express();

//para utilizar el puerto que nos asigne por ejemplo heroku, 
//si no se utiliza 3000
const puerto = process.env.PORT || 3000;

const hbs = require('hbs');
require('./hbs/helpers');

//para utilizar la carpeta public y podamos mostrar su contenido html
//pero sobreescribe el app.get
app.use(express.static(__dirname + '/public'));

//con parciales de hbs podemos reutilizar bloques de código
//para hacer un sitio dinamico
hbs.registerPartials(__dirname + '/views/partials');

//Express HBS Engine, ponemos que el motor de 
//renderizado para express sea handlebars que hemos instalado (hbs)
app.set('view engine', 'hbs');

//pasamos los helpers de hbs a otro archivo para tener el código organizado y lo imnportamos

app.get('/', (req, res) => {
    //ahora trabajamos solo para la ruta /
    //res.send('Hola mundo');
    /*let salida = {
        nombre: 'Manuel',
        edad: 26,
        url: req.url
    }*/

    //express serializa y convierte el documento a json
    //res.send(salida);
    //ahora en vez de enviar datos con send, renderizamos con hbs
    //anteriormente configurado y le decimos que para / renderice home.hbs
    //que está en la carpeta de views
    /* como segundo parametro podemos pasar un objeto con datos que podemos poner
    entre handlebars en el archivo home.hbs (en este caso nombre y año) */
    res.render('home', {
        nombre: 'mAnuel',
        anio: new Date().getFullYear()
    });

});

app.get('/about', (req, res) => {

    res.render('about', {
        anio: new Date().getFullYear()
    });

});



//listen tambien recibe un callback
app.listen(puerto, () => {
    console.log(`Escuchando puerto ${puerto}`);
});

//en el package.json ponemos el comando que ejecuta el servidor en start,
//podemos poner mas scripts como por ejemplo nodemon, para usarlo npm run [script]