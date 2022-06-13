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
        var codigodot = "digraph G{size=\"3\";\nlabel=\" Inicio a fin \";\nnode [shape=doublecircle];N0;\nnode [shape=circle];\n";
        var temporal = this.cabeza
        var conexiones = "";
        var nodos = "";
        var numnodo = 0;
        for (let index = 0; index < (this.contador); index++) {
            nodos += "N" + numnodo + "[label=\"" + temporal.usuario.nombre + "\" ];\n"
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
        codigodot += "{rank=same;\n" + conexiones + "\n}\n}"
        console.log(codigodot)
        if (document.getElementById("table-users")) {
            d3.select('#table-users').graphviz()
                .width(1000)
                .height(800)
                .renderDot(codigodot)
        }
    }
}
export var listaUsuarios = new listaCircular();
