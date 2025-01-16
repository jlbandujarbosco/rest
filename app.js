const express = require('express');
require('dotenv').config();
const app = express();
app.use(express.static('public'));
app.use(express.json()); // Middleware para analizar JSON
const port = process.env.PORT || 80;
const listaProductos = [{
    id: 1,
    nombre: 'Laptop',
    precio: 1000
},{
    id: 2,
    nombre: 'Sobremesa',
    precio: 2000
}];
app.get('/producto', (req, res) => {
    res.json(listaProductos);
});

app.post('/categoria-color', (req, res) => {
    const { categoria, color } = req.body;
    res.send( `Categoría: ${categoria}, Color: ${color}`);
});

app.listen(port, () => {
    console.log(
`Servidor corriendo en puerto:${port}`);
});