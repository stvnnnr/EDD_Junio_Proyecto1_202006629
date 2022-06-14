class nodo {
    constructor(objeto) {
        this.objeto = objeto;
        this.anterior = null;
        this.siguiente = null;
        this.arriba = null;
        this.abajo = null;
    }
}

export class matrizOrtogonal {
    constructor(filas, columnas) {
        this.cabeza = null;
        this.filas = filas
        this.columnas = columnas
        this.contadorC = 0
        this.contadorF = 0
    }

    insertar(libro) {
        if (this.cabeza == null) {
            // metemos la cabeza
            this.cabeza = new nodo(libro);
            this.contadorC = this.contadorC + 1;
            this.contadorF = this.contadorF + 1;
        } else {
            var actual = this.cabeza
            if (this.contadorF == 1) {
                // Estamos en la primera fila
                while (actual.siguiente) {
                    actual = actual.siguiente
                }
                if (this.contadorC != this.columnas) {
                    // Estamos en las columnas
                    this.contadorC = this.contadorC + 1
                    var libUno = new nodo(libro)
                    actual.siguiente = libUno
                    libUno.anterior = actual
                } else {
                    // Llegamos a la ultima columna, regresamos y bajamos
                    while (actual.anterior) {
                        actual = actual.anterior
                    }
                    var libUno = new nodo(libro)
                    actual.abajo = libUno
                    libUno.arriba = actual
                    this.contadorC = 1
                    this.contadorF = this.contadorF + 1
                }
            } else {
                // Estamos en las siguientes filas y siguientes columnas
                while (actual.abajo) {
                    actual = actual.abajo
                }
                while (actual.siguiente) {
                    actual = actual.siguiente
                }
                if (this.contadorC != this.columnas) {
                    // Seguimos en lass columnas de las filas
                    this.contadorC = this.contadorC + 1
                    var libUno = new nodo(libro)
                    actual.siguiente = libUno
                    libUno.anterior = actual
                    var arrib = actual.arriba.siguiente
                    libUno.arriba = arrib
                    arrib.abajo = libUno
                } else {
                    // Topamos las columnas y volvemos a la primera y bajamos
                    while (actual.anterior) {
                        actual = actual.anterior
                    }
                    var libUno = new nodo(libro)
                    actual.abajo = libUno
                    libUno.arriba = actual
                    this.contadorC = 1
                    this.contadorF = this.contadorF + 1
                }
            }
        }
    }

    recorrer() {
        var actual = this.cabeza;
        for (let i = 1; i < (this.filas+1); i++) {
            for (let j = 1; j < (this.columnas+1); j++) {
                if (actual!=null){
                    console.log(actual.objeto)
                    if (actual.siguiente!=null) {
                        actual = actual.siguiente
                    }
                }
            }
            while (actual.anterior) {
                actual = actual.anterior
            }
            actual = actual.abajo
        }
    }
}
export var ortoLibros = new matrizOrtogonal(25, 25);
for (let i = 0; i < 25; i++) {
    for (let j = 0; j < 25; j++) {
        ortoLibros.insertar("Vacio")
    }
}
