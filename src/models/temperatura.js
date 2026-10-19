const prisma = require("../database/prisma")

class Temperatura{

    async criar(valor){
        return await prisma.Temperatura.create({
            data:{
                valor
            }
        })
    }

    async listar(){
        return await prisma.temperatura.findMany
}

}

    
module.exports = new Temperatura