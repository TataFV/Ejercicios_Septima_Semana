function main() {
    var isPlaying = true;

    do {
        var combinacion = crearCombinacion()
        for (var i = 0; i < 10; i++) {
            resultado = comprobar(combinacion)
            if (resultado == "OOOOO") {
                alert("Has ganado, la combinación era " + combinacion);
                i = 10
            } else if (i < 9) {
                alert(resultado)
            } else {

                alert("Te quedaste sin intentos. La combinación era " + combinacion);
            }

        }

        respuesta_usuario = simple_user_input(
            "¿Quieres seguir jugando?" +
            "\n 1 - Jugar" +
            "\n 2 - Salir");

        if (respuesta_usuario == 2 ||
            respuesta_usuario == "salir" ||
            respuesta_usuario == "2") {
            isPlaying = false;
        }
    } while (isPlaying);
}
main();
