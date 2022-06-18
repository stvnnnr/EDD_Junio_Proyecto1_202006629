class nodo {
    constructor(objetoValor) {
        this.valor = objetoValor;
        this.siguiente = null;
    }
}

export class listaPedidos {
    constructor() {
        this.cabeza = null;
        this.contador = 0;
    }

    insertar(objetico) {
        if (this.cabeza == null) {
            this.cabeza = new nodo(objetico);
            this.contador = this.contador + 1;
        } else {
            var actual = this.cabeza;
            while (actual.siguiente) {
                actual = actual.siguiente;
            }
            actual.siguiente = new nodo(objetico);
            this.contador = this.contador + 1;
        }
    }

    recorrer() {
        var actual = this.cabeza;
        while (actual != null) {
            console.log(actual.valor.nombre);
            actual = actual.siguiente;
        }
        console.log(this.contador);
    }
    graficarUser() {
        var codigodot = "digraph G{\nlabel=\" Pedidos \";\nnode [shape=box];\n";
        var temporal = this.cabeza
        var conexiones = "";
        var nodos = "";
        var numnodo = 0;
        while (temporal != null) {
            nodos += "N" + numnodo + "[label=\"" + temporal.valor.nombre +" cantidad="+ temporal.valor.cantidad+ "\" ];\n"
            if (temporal.siguiente != null) {
                var auxnum = numnodo + 1
                conexiones += "N" + numnodo + " -> N" + auxnum + "[dir=back];\n"
            }
            temporal = temporal.siguiente
            numnodo++;
        }
        codigodot += "//agregando nodos\n"
        codigodot += nodos + "\n"
        codigodot += "//agregando conexiones o flechas\n"
        codigodot += "{rank=same;\n" + conexiones + "\n}\n}"
        d3.select("#divPedidos").graphviz()
            .width(1400)
            .height(1400)
            .renderDot(codigodot)
    }
}
