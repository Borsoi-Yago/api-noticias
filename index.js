const express = require("express");
const app = express();
const port = process.env.PORT || 3000

const database = require("./db/db");
const routes = require("./routes/routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const Noticia = require("./model/noticiaModel");

try {
    database.sync().then(() => {
    })
}
catch (erro) {
    console.log("Houve uma falha ao sincronizar com o banco de dados. ", erro);
};

app.use("/", routes);
app.listen(port, () => {
    console.log("Rodando...")
});