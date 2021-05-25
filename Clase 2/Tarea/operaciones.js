exports.operaciones = function (operaciones, n1, n2) {
    if (operaciones === 'suma') {
        let suma = n1 + n2;
        return suma;
    } else if (operaciones === 'resta') {
        let resta = n1 - n2;
        return resta;
    } else if (operaciones === 'multiplicacion') {
        let multiplicacion = n1 * n2;
        return multiplicacion;
    } else if (operaciones === 'divicion') {
        if (n1 === 0 || n2 === 0) {
            return 'Error';
        } else {
            let divicion = n1 / n2;
            return divicion;
        } 
    }
}