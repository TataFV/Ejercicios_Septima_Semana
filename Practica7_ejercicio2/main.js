function main() {
    var isPlaying = true;

    do {
        var item = crearObjeto("coche", 5000, 20000)
        item.generadorPrecio()
        var respuestaUser = simple_user_input("¿Cuánto crees que vale el " + item.nombre + ", sin pasarte del precio?" +
            "\nEl rango mínimo es " + item.rango_menor + " y el rango máximo es " + item.rango_mayor)

        if (respuestaUser == item.precio) {
            alert("Has acertado, el precio del " + item.nombre + " era " + item.precio + " € ");

        } else if (respuestaUser < item.precio) {
            alert("Has fallado, el precio del " + item.nombre + " era mayor: " + item.precio + " € ");

        } else if (respuestaUser > item.precio) {
            alert("Has fallado, el precio del " + item.nombre + " era menor: " + item.precio + " € ");
        } else {
            alert("Has fallado, el precio del " + item.nombre + " era " + item.precio + " € ");
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
