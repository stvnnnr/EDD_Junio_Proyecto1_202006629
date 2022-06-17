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
            console.log(actual.valor.nombre);
            actual = actual.siguiente;
        }
        console.log(this.contador);
    }
    grafPilas(){
        var element = document.getElementById("pilasLib");
        var actual = this.cabeza
        var texto = ""
        while(actual!=null ){
            var conta = actual.valor.cantidad
            var count = conta
            if(conta>0){
                texto += "\n<div>\n<table class=\"table table-sm\">"
                texto += "\n<tr class=\"table-primary\">\n<th>\""+actual.valor.nombre+"\" - cantidad:"+conta+"</th>\n</tr>\n"
                for (let i = 0; i < conta; i++) {
                    texto+="<tr>\n<td align=\"center\">"+"<img src=../src/assets/img/libro.jpg WIDTH=284 HEIGHT=40>"+"</td>\n</tr>\n"
                    count = count-1
                }
                texto += "</table>\n</div>\n<div style=\"width:15px;\">     </div>"
            }
            actual = actual.siguiente;
        }
        // texto += texto
        // console.log(texto)
        element.innerHTML=texto
    }
    ordenarAlfa(){
        for (let i = 0; i < this.contador+1; i++) {
            var actualNuevo = this.cabeza
            for (let j = 0; j < (this.contador); j++) {
                if(actualNuevo.siguiente != null && actualNuevo.valor.nombre>actualNuevo.siguiente.valor.nombre ){
                    var nodoJ = actualNuevo.valor
                    var nodoJ2 = actualNuevo.siguiente.valor
                    actualNuevo.valor = nodoJ2
                    actualNuevo.siguiente.valor = nodoJ
                }
                actualNuevo = actualNuevo.siguiente
            }
            
        }
        this.recorrer()
    }
    ordenarInAlfa(){
        for (let i = 0; i < this.contador+1; i++) {
            var actualNuevo = this.cabeza
            for (let j = 0; j < (this.contador); j++) {
                if(actualNuevo.siguiente != null && actualNuevo.valor.nombre<actualNuevo.siguiente.valor.nombre ){
                    var nodoJ = actualNuevo.valor
                    var nodoJ2 = actualNuevo.siguiente.valor
                    actualNuevo.valor = nodoJ2
                    actualNuevo.siguiente.valor = nodoJ
                }
                actualNuevo = actualNuevo.siguiente
            }
            
        }
        this.recorrer()
    }
}
// var lista = new listaSimple();
// lista.insertar("JAJA");
// lista.insertar("Lolito");
// lista.insertar("Juanito");
// lista.recorrer();