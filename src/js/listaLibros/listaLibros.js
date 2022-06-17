class nodo{
    constructor(objetoValor){
        this.valor = objetoValor;
        this.siguiente = null;
    }
}

export class listaSimLibros{
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

    recorrer(){
        var actual = this.cabeza;
        while(actual!=null ){
            console.log(actual.valor);
            actual = actual.siguiente;
        }
        console.log(this.contador);
    }
}
// var lista = new listaSimple();
// lista.insertar("JAJA");
// lista.insertar("Lolito");
// lista.insertar("Juanito");
// lista.recorrer();