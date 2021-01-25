const http = require('http');
const puerto = 8080;

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json' });

    let salida = {
        nombre: 'Manuel',
        edad: 26,
        url: req.url
    }

    res.write(JSON.stringify(salida));

    //res.write('hola mundo');
    res.end();

}).listen(puerto);


console.log(`Escuchando el puerto ${puerto}`);