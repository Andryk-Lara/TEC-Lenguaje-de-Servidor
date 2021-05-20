exports.Verificar = function(numEntero){
    if(100 >= numEntero >= 999){
        return 'El Numero posee 3 digitos';
    }else{
        return 'El Numero NO posee 3 digitos';
    }
} 
