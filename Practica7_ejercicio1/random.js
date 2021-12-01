function crearCombinacion() {
    var combinacion = []
    for (i = 0; i < 5; i++) {
        var aleatorio = random_min_max(0, 9)
        combinacion.push(aleatorio);
        console.log(combinacion)
    }
    return combinacion
}


function random_min_max(min, max) {
    let random_number = Math.random() * max + min;
    random_number = Math.floor(random_number);
    return random_number
}

function comprobar(combinacion) {
    let combinacionUser = simple_user_input("Escribe un número de 5 cifras")
    var resultado = ""
    for (i = 0; i < combinacion.length; i++) {
        var numero = parseInt(combinacionUser.charAt(i))
        if (combinacion[i] == numero) {
            resultado = resultado + "O"
        } else if (combinacion.indexOf(numero) != -1) {
            resultado = resultado + "X"
        } else {
            resultado = resultado + "-"
        }
    }

    return resultado
}