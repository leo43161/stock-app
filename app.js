const express = require('express');

const app = express();

app.get("/", (req, res) => {

    console.log("Peticion recibida");

    res.send("<h2>Hola Mundo con Nodemon</h2>");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, (req, res) => {
    console.log("Servidor escuchando en el puerto 4000");
});
