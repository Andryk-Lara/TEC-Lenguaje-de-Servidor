exports.numeroMayor = function(nums){
    let listaNum = nums;
    // Utilizamos sort con la duncion dentro para que si el resultado es negativo, a se ordena antes que b o Si el resultado es positivo, b se ordena antes de a.
    listaNum.sort(function(a, b){return a - b});
    // Utilizamos pop para extraer el ultimo elemento del array
    let  numeroMayor = listaNum.pop();
    return numeroMayor;
}
exports.numeroMenor = function(nums){
    let listaNum = nums;
    // Utilizamos sort con la duncion dentro para que si el resultado es negativo, a se ordena antes que b o Si el resultado es positivo, b se ordena antes de a.
    listaNum.sort(function(a, b){return a - b});
    // Utilizamos shift para extraer el primer elemento del array
    let  numeroMenor = listaNum.shift();
    return numeroMenor;
}
