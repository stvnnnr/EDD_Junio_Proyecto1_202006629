class nodo {
    constructor(autor) {
        this.autor = autor
        this.izq = null
        this.der = null
    }
}

export class abb {
    constructor() {
        this.raiz = null
    }

    insertar(autor) {
        let aux = new nodo(autor)
        if (this.raiz == null) {
            this.raiz = aux
        } else {
            this.raiz = this.insertarNodo(this.raiz, aux)
        }
    }

    devolverRaiz() {
        return this.raiz
    }

    insertarNodo(raizActual, aux) {
        if (raizActual != null) {
            var a = String(raizActual.autor.nombre)
            var x = a.toLocaleLowerCase()
            var b = String(aux.autor.nombre)
            var y = b.toLocaleLowerCase()
            if (x > y) {
                raizActual.izq = this.insertarNodo(raizActual.izq, aux)
            } else if (x < y) {
                raizActual.der = this.insertarNodo(raizActual.der, aux)
            } else {
                console.log("Ese man ya existe")
            }
            return raizActual
        } else {
            raizActual = aux
            return raizActual
        }
    }

    generarDot() {
        let cadena = "digraph arbolAutores {\n"
        cadena += this.cadenNodos(this.raiz)
        cadena += "\n"
        cadena += this.enlazar(this.raiz)
        cadena += "\n}"
        console.log(cadena)
        d3.select('#table-autors').graphviz()
                .width(1000)
                .height(800)
                .renderDot(cadena)
    }

    cadenNodos(raizActual) {
        let nodos = ""
        if (raizActual != null) {
            nodos += "n" + raizActual.autor.dpi + "[label=\"" + raizActual.autor.nombre + "\"]\n"
            nodos += this.cadenNodos(raizActual.izq)
            nodos += this.cadenNodos(raizActual.der)
        }
        return nodos
    }

    enlazar(raizActual) {
        let cadena = ""
        if (raizActual != null) {
            cadena += this.enlazar(raizActual.izq)
            cadena += this.enlazar(raizActual.der)
            if (raizActual.izq != null) {
                cadena += "n" + raizActual.izq.autor.dpi + "-> n" + raizActual.autor.dpi + "\n"
                // cadena += "n" + raizActual.autor.dpi + "-> n" + raizActual.izq.autor.dpi + "\n"
            }
            if (raizActual.der != null) {
                // cadena += "n" + raizActual.der.autor.dpi + "-> n" +raizActual.autor.dpi + "\n"
                cadena += "n" + raizActual.autor.dpi + "-> n" + raizActual.der.autor.dpi + "\n"
            }
        }
        return cadena
    }
}