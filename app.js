const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 80;
const producto = {
    id: 1,
    nombre: 'Laptop',
    precio: 1000
};
app.get('/producto', (req, res) => {
    res.json(producto);
});
app.listen(port, () => {
    console.log(
`Servidor corriendo en puerto:${port}`);
});