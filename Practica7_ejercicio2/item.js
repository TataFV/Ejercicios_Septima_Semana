
function crearObjeto(nombre, rango_menor, rango_mayor) {
    var Premio = function (nombre, rango_menor, rango_mayor) {
        this.nombre = nombre
        this.precio = 0
        this.rango_mayor = rango_mayor
        this.rango_menor = rango_menor

        this.generadorPrecio = function () {
            this.precio = random_min_max(this.rango_menor, this.rango_mayor)
        }


    }
    let premio = new Premio(nombre, rango_menor, rango_mayor);
    return premio;

}