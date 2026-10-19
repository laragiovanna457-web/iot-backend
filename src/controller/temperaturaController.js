const Temperatura = require("../models/Temperatura")

const recebertemperatura = async (req,res) => {
    const {temperatura} = req.body

    const resultado = await Temperatura.criar(temperatura)

    console.log(sensor)

    res.json(resultado)
}
    const listarTemperaturas = async (req,res) =>{
        const dados = await Temperatura.listar()
        res.json(dados)
    }


module.exports = {
    receberTemperatura,
    listarTemperaturas
}