const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');

//Direccion
app.get('/', (req, res) => {
    res.render('home',{
        nombre : 'jhon muriLlo',
    });
})
app.get('/about', (req, res) => {
    res.render('about',{
        nombre : 'jhon muriLlo',
    });
})

//Servidor
app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});
