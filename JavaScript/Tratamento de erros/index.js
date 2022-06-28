function comparaErro(arr, num){
    try{
        if (!arr || !num) throw new ReferenceError ('Insira um parâmetro válido');

        if (typeof arr !== 'object') throw new TypeError ('Insira um elemento tipo Array');

        if (typeof arr !== Number) throw new TypeError ('Insira um elemento tipo number');

        if (arr.length !== num) throw RangeError('Tamanho do array inválido!');

        return arr;
    }

    catch (e) {
        if (e instanceof RangeError) {
            console.log('RangeError!');
            console.log(e.stack);
        } else if (e instanceof ReferenceError) {
            console.log('ReferenceError!');
            console.log(e.stack);
        } else {
            console.log('Outro tipo de erro!');
            console.log(e.stack);
        }
    }

    finally{
        console.log('O array envidado foi: ' + arr + ' e o número foi: ' + num);
    }
}

comparaErro([1, 2, 3], 1);