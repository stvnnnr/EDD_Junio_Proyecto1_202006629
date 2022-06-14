class nodo{
    constructor(objetoValor){
        this.valor = objetoValor;
        this.siguiente = null;
    }
}

export class listaCompras{
    constructor(){
        this.cabeza = null;
        this.contador = 0;
    }
    
    insertar(objetico){
        if(this.cabeza == null){
            this.cabeza = new nodo(objetico);
            this.contador = this.contador+1;
        }else{
            var actual = this.cabeza;
            while(actual.siguiente){
                actual = actual.siguiente;
            }
            actual.siguiente = new nodo(objetico);
            this.contador = this.contador+1;
        }
    }

    graficar(user) {
        var codigodot = 'subgraph ' + user;
        codigodot += "{\nnode [shape=plaintext]\n"
        codigodot += "struct" + user + "[label=<\n<TABLE BORDER=\"0\" CELLBORDER=\"1\" CELLSPACING=\"0\">\n<TR>\n"
        codigodot += "<TD COLSPAN=\"3\" PORT=\"" + user + "\">" + this.cabeza.valor + "</TD>\n</TR>"
        var temporal = this.cabeza.siguiente
        while (temporal != null) {
            codigodot += "\n<TR>\n"
            codigodot += "<TD COLSPAN=\"3\"" + ">" + temporal.valor + "</TD>\n</TR>\n"
            temporal = temporal.siguiente;
        }

        codigodot += "</TABLE>>];\n}\n}" + "\n"
        console.log(codigodot)
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