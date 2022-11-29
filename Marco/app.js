process.env.AMBIENTE_PROCESSO = "desenvolvimento"

const express = require("express");
const cors = require("cors");
const path = require("path");
const PORTA = 3000;


const app = express();

const medidasRouter = require("./src/routes/medidas");
const mediaRouter = require("./src/routes/media");

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use('/medidas', medidasRouter);
app.use('/media', mediaRouter);


app.listen(PORTA, function(){
    console.log(`Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar: http://localhost:${PORTA}`);
});