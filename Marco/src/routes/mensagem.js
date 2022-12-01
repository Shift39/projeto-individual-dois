
var express = require("express");
var router = express.Router();

var mensagemModel = require("../models/mensagemModel")



router.get("/numero", function (req, res){

    mensagemModel.enviarSMS(req, res);
});


module.exports = router;