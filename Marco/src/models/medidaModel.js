var database = require("../database/config");

function buscarUltimasMedidas(idCPU, limite_linhas) {
    instrucaoSql = `select 
                        temperatura, 
                        ram, 
                        frequencia,
                        disco
                    from CPU_metricas
                    where idCPU = ${idCPU}
                    order by idCPU desc limit ${limite_linhas}`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
    buscarUltimasMedidas,
    
}