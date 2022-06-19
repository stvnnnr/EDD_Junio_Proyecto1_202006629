class nodo {
    constructor(objetoValor) {
        this.valor = objetoValor;
        this.siguiente = null;
    }
}

export class listaTops {
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

    ordenarInAlfa() {
        for (let i = 0; i < this.contador + 1; i++) {
            var actualNuevo = this.cabeza
            for (let j = 0; j < (this.contador); j++) {
                var listaUno = actualNuevo.valor.getLibros()
                var Uno = listaUno.cantLibros()
                console.log("compara 1", Uno)
                if (actualNuevo.siguiente != null) {
                    var listaDos = actualNuevo.siguiente.valor.getLibros()
                    var Dos = listaDos.cantLibros()
                    console.log("compara 2", Dos)
                    if (actualNuevo.siguiente != null && Uno < Dos) {
                        var nodoJ = actualNuevo.valor
                        var nodoJ2 = actualNuevo.siguiente.valor
                        actualNuevo.valor = nodoJ2
                        actualNuevo.siguiente.valor = nodoJ
                    }
                    actualNuevo = actualNuevo.siguiente
                }
            }
        }
    }

    graficarTopos() {
        if (this.cabeza != null) {
            this.ordenarInAlfa()
            var codigodot = "digraph G{\nlabel=\" Top mejores lectores \";\nnode [shape=box];\n";
            var temporal = this.cabeza
            var conexiones = "";
            var nodos = "";
            var numnodo = 0;
            var conta = 0
            for (let i = 0; i < 5; i++) {
                var listaUno = temporal.valor.getLibros()
                var Uno = listaUno.cantLibros()
                if (Uno > 0) {
                    nodos += "N" + numnodo + "[label=\"" + temporal.valor.nombre + ", libros:" + Uno + "\" ];\n"
                    temporal = temporal.siguiente
                    numnodo++;
                    conta++
                }
            }
            var nume = 0
            if (conta > 1) {
                for (let j = 0; j < conta - 1; j++) {
                    var auxnum = nume + 1
                    conexiones += "N" + nume + " -> N" + auxnum + "[label=\"   \" dir=both];\n"
                    nume++;
                }
            }
            codigodot += nodos + "\n"
            codigodot += "{rank=same;\n" + conexiones + "\n}\n}"
            d3.select("#lectors").graphviz()
                .width(1400)
                .height(1400)
                .renderDot(codigodot)
        }
    }


    topsDivs() {
        var element = document.getElementById("divTops");
        var actual = this.cabeza
        var texto = ""
        if (actual != null) {
            for (let i = 0; i < 5; i++) {
                var listaUno = actual.valor.getLibros()
                var Uno = listaUno.cantLibros()
                if (Uno > 0) {
                    const nombres = ["https://unavatar.io/twitter/3gerardpique", "https://unavatar.io/twitter/Cristiano", "https://unavatar.io/twitter/Benzema", "https://unavatar.io/twitter/trvisXX"];
                    const aleatorio = nombres[Math.floor(Math.random() * nombres.length)];
                    texto += "<div class=\"card\" style=\"width: 18rem;\">\n<img class=\"card-img-top\" src=\""
                    texto += aleatorio
                    texto += "\" WIDTH=50 HEIGHT=300 alt=\"Card image cap\">\n<div class=\"card-body\"\n>"
                    texto += "<h5 class=\"card-title\">" + actual.valor.nombre + "</h5>\n</div>\n<ul class=\"list-group list-group-flush\">\n"
                    texto += "<li class=\"list-group-item\">Libros: " + Uno + "</li>\n</ul>\n</div>\n"
                    actual = actual.siguiente;
                }
            }
            texto +=" <hr> <hr> <hr> <hr> <hr>"
            element.innerHTML = texto
        }
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