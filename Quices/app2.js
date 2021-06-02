// Función cambiada con variable numes para que no sean borrados el primer y ultimo elemento
exports.listaOrdenada= function(numes){
    let listaNum = numes;
    // Utilizamos sort con la duncion dentro para que si el resultado es negativo, a se ordena antes que b o Si el resultado es positivo, b se ordena antes de a.
    listaNum.sort(function(a, b){return a - b});
    return listaNum;
}
exports.suma= function(numes){
    let listaNum = parseInt(numes);
    
    return listaNum;
}