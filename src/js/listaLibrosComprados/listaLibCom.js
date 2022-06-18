class nodo {
    constructor(objetoValor) {
        this.valor = objetoValor;
        this.siguiente = null;
    }
}

export class listaCompras {
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

    graficar(user) {
        var codigodot = 'subgraph ' + user;
        codigodot += "{\nnode [shape=plaintext]\n"
        codigodot += "struct" + user + "[label=<\n<TABLE BORDER=\"0\" CELLBORDER=\"1\" CELLSPACING=\"0\">\n<TR>\n"
        if (this.cabeza != null) {
            codigodot += "<TD COLSPAN=\"3\" PORT=\"" + user + "\">" + this.cabeza.valor.nombre + " cantidad:" + this.cabeza.valor.cantidad + "</TD>\n</TR>"
            var temporal = this.cabeza.siguiente
            if (temporal != null) {
                while (temporal != null) {
                    codigodot += "\n<TR>\n"
                    codigodot += "<TD COLSPAN=\"3\"" + ">" + temporal.valor.nombre + " cantidad:" + temporal.valor.cantidad + "</TD>\n</TR>\n"
                    temporal = temporal.siguiente;
                }
            }
        } else {
            codigodot += "<TD COLSPAN=\"3\" PORT=\"" + user + "\">" + "" + "</TD>\n</TR>"
        }
        codigodot += "</TABLE>>];\n}" + "\n"
        return (codigodot)
    }
    graficarUser() {
        var codigodot = "digraph G{\nlabel=\" Libros comprados \";\nnode [shape=box];\n";
        var temporal = this.cabeza
        var conexiones = "";
        var nodos = "";
        var numnodo = 0;
        while (temporal != null) {
            nodos += "N" + numnodo + "[label=\"" + temporal.valor.nombre  + " cantidad:" + temporal.valor.cantidad + "\" ];\n"
            if (temporal.siguiente != null) {
                var auxnum = numnodo + 1
                conexiones += "N" + numnodo + " -> N" + auxnum + ";\n"
            }
            temporal = temporal.siguiente
            numnodo++;
        }
        codigodot += "//agregando nodos\n"
        codigodot += nodos + "\n"
        codigodot += "//agregando conexiones o flechas\n"
        codigodot += "{rank=same;\n" + conexiones + "\n}\n}"
        d3.select("#libComprados").graphviz()
            .width(1400)
            .height(1400)
            .renderDot(codigodot)
    }
    cantLibros(){
        var actual = this.cabeza;
        var sumCant = 0
        while(actual!=null ){
            sumCant = sumCant + actual.valor.cantidad
            actual = actual.siguiente;
        }
        return sumCant
    }

    // recorrer(){
    //     var actual = this.cabeza;
    //     while(actual!=null ){
    //         console.log(actual.valor);
    //         actual = actual.siguiente;
    //     }
    //     console.log(this.contador);
    // }
}
// var lista = new listaSimple();
// lista.insertar("JAJA");
// lista.insertar("Lolito");
// lista.insertar("Juanito");
// lista.recorrer();