const express = require("express");

const app = express();

const hbs = require('hbs');

// Para servir contenido estático, creamos un middleware con app.use() que muestre ese contenido público
app.use(express.static(__dirname + '/public'));

// npm hbs - handlebars - gestor de plantillas para evitar repetir código html
app.set('view engine', 'hbs'); // copiado de la doc de la web npm hbs
// Se indica dónde se encontrarán las plantillas a reusar
hbs.registerPartials(__dirname + '/views/parciales');

// Se inyecta todo el código de los helpers
require("./hbs/helpers");

// Configuramos el puerto para despliegue
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.render('home', {
        nombre: "luciano"
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        nombre: "luciano"
    });
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});