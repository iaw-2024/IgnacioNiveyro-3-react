const express = require("express");
const cors = require("cors");
const app = express();

const datos = require('../public/datos_estaticos.json');

// Configurar el middleware CORS
app.use(cors());

app.get("/datos", (req, res) => {
    res.json(datos);
});

app.use(express.static('public'))


app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;