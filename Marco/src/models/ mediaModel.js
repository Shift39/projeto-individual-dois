var database = require("../database/config");

function buscarMedia(idCPU, limite_linhas) {
    instrucaoSql = `select 
                        avg(temperatura) as media 
                    from CPU_metricas
                    where fk_Cpu = ${idCPU}
                    order by idCPU desc limit 100
                    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
    buscarMedia,
    
}