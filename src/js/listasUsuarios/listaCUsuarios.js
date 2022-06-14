class nodo {
    constructor(usuario) {
        this.usuario = usuario
        this.siguiente = null
    }
}

export class listaCircular {
    constructor() {
        this.cabeza = null
        this.contador = 0
    }

    insertar(usuario) {
        if (this.cabeza == null) {
            this.cabeza = new nodo(usuario)
            this.cabeza.siguiente = this.cabeza
            this.contador = this.contador + 1
        } else {
            var actual = this.cabeza
            if (this.contador == 1) {
                var tempo = new nodo(usuario)
                actual.siguiente = tempo
                tempo.siguiente = this.cabeza
                this.contador = this.contador + 1
            } else {
                var actual = this.cabeza
                for (let index = 0; index < this.contador - 1; index++) {
                    actual = actual.siguiente
                }
                var tempo = new nodo(usuario)
                actual.siguiente = tempo
                tempo.siguiente = this.cabeza
                this.contador = this.contador + 1
            }
        }
    }

    recorrer() {
        var actual = this.cabeza
        for (let index = 0; index < (this.contador); index++) {
            console.log("user", actual.usuario.nombre)
            actual = actual.siguiente
        }
        console.log(this.contador)
    }

    logear(user, pass) {
        var actual = this.cabeza
        if (actual != null) {
            for (let index = 0; index < (this.contador); index++) {
                if (user == String(actual.usuario.usuario) && pass == String(actual.usuario.contra)) {
                    return ("Usuario")
                }
                actual = actual.siguiente
            }
            return ("Nulo")
        } else {
            return ("vacia")
        }

    }
    graficarAdmin() {
        var codigodot = "digraph G{size=\"10\";\nlabel=\" Inicio a fin \";\n node [shape=cube];\n";
        var temporal = this.cabeza
        var conexiones = "";
        var nodos = "";
        var numnodo = 0;
        for (let index = 0; index < (this.contador); index++) {
            nodos += "N" + numnodo + "[label=\"" + temporal.usuario.nombre + "\" PORT=\"" + temporal.usuario.usuario + "\" ];\n"
            if (temporal.siguiente != this.cabeza) {
                var auxnum = numnodo + 1
                conexiones += "N" + numnodo + " -> N" + auxnum + ";\n"
            } else {
                var auxnum = numnodo + 1
                conexiones += "N" + (numnodo) + " -> N" + 0 + ";\n"
            }
            temporal = temporal.siguiente
            numnodo++;
        }
        codigodot += nodos + "\n"
        // meto los libros de cada user
        codigodot += this.obtenerGraficaLibros() + "\n"
        // 
        codigodot += "{rank=same;\n" + conexiones + "\n}"
        // meto las conexiones de cada user
        codigodot += this.obtenerConexionLibros() + "\n}"
        // 
        console.log(codigodot)
        if (document.getElementById("table-users")) {
            d3.select('#table-users').graphviz()
                .width(1400)
                .height(1000)
                .renderDot(codigodot)
        }
    }
    obtenerGraficaLibros() {
        var temporal = this.cabeza
        var texto = ""
        for (let index = 0; index < (this.contador); index++) {
            var listaLibrosUser = temporal.usuario.getLibros()
            var textoLista = listaLibrosUser.graficar(temporal.usuario.usuario)
            texto += textoLista + "\n"
            temporal = temporal.siguiente
        }
        return (texto)
    }

    obtenerConexionLibros() {
        var temporal = this.cabeza
        var conexiones = "";
        var numnodo = 0;
        for (let index = 0; index < (this.contador); index++) {
            conexiones += "N" + numnodo + ":" + temporal.usuario.usuario + "-> struct" + temporal.usuario.usuario + ":" + temporal.usuario.usuario + ";\n"
            temporal = temporal.siguiente
            numnodo++;
        }
        return(conexiones)
    }
}
export var listaUsuarios = new listaCircular();
