class nodo {
    constructor(objetoValor) {
        this.valor = objetoValor;
        this.siguiente = null;
    }
}

export class listaSimLibros {
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
            // console.log(actual.valor.nombre);
            actual = actual.siguiente;
        }
        // console.log(this.contador);
    }
    grafPilas() {
        var element = document.getElementById("pilasLib");
        var actual = this.cabeza
        var texto = ""
        while (actual != null) {
            var conta = actual.valor.cantidad
            var count = conta
            if (conta > 0) {
                texto += "\n<div>\n<table class=\"table table-sm\">"
                texto += "\n<tr class=\"table-primary\">\n<th>\"" + actual.valor.nombre + "\" - cantidad:" + conta + "</th>\n</tr>\n"
                for (let i = 0; i < conta; i++) {
                    texto += "<tr>\n<td align=\"center\">" + "<img src=../src/assets/img/libro.jpg WIDTH=284 HEIGHT=40>" + "</td>\n</tr>\n"
                    count = count - 1
                }
                texto += "</table>\n</div>\n<div style=\"width:15px;\">     </div>"
            }
            actual = actual.siguiente;
        }
        // texto += texto
        // console.log(texto)
        element.innerHTML = texto
    }
    ordenarAlfa() {
        for (let i = 0; i < this.contador + 1; i++) {
            var actualNuevo = this.cabeza
            for (let j = 0; j < (this.contador); j++) {
                if (actualNuevo.siguiente != null && actualNuevo.valor.nombre > actualNuevo.siguiente.valor.nombre) {
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
    devolverCabeza() {
        return this.cabeza
    }
    devolverCola() {
        var actual = this.cabeza;
        while (actual.siguiente != null) {
            actual = actual.siguiente;
        }
        return actual
    }
    ordenarInAlfa() {
        for (let i = 0; i < this.contador + 1; i++) {
            var actualNuevo = this.cabeza
            for (let j = 0; j < (this.contador); j++) {
                if (actualNuevo.siguiente != null && actualNuevo.valor.nombre < actualNuevo.siguiente.valor.nombre) {
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
    grafAlfa() {
        this.ordenarAlfa()
        var element = document.getElementById("ejemplaresDiv");
        var actual = this.cabeza
        var texto = "<div>ordenarAlfa() {<br>\
            &nbsp;&nbsp;for (let i = 0; i < this.contador + 1; i++) {<br>\
                &nbsp;&nbsp;&nbsp;&nbsp;var actualNuevo = this.cabeza<br>\
                &nbsp;&nbsp;&nbsp;&nbsp;for (let j = 0; j < (this.contador); j++) {<br>\
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (actualNuevo.siguiente != null && actualNuevo.valor.nombre > actualNuevo.siguiente.valor.nombre) {<br>\
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var nodoJ = actualNuevo.valor<br>\
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var nodoJ2 = actualNuevo.siguiente.valor<br>\
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;actualNuevo.valor = nodoJ2<br>\
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;actualNuevo.siguiente.valor = nodoJ<br>\
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>\
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;actualNuevo = actualNuevo.siguiente<br>\
                &nbsp;&nbsp;&nbsp;&nbsp;}<br>\
                &nbsp;&nbsp;}<br>\
        }</div>"
        while (actual != null) {
            const nombres = ["../src/assets/img/libros/l3.jpg", "../src/assets/img/libros/l1.jpg", "../src/assets/img/libros/l2.jpg", "../src/assets/img/libros/l4.jpg"];
            const aleatorio = nombres[Math.floor(Math.random() * nombres.length)];
            texto += "<div class=\"card\" style=\"width: 18rem;\">\n<img class=\"card-img-top\" src=\""
            texto += aleatorio
            texto += "\" WIDTH=50 HEIGHT=300 alt=\"Card image cap\">\n<div class=\"card-body\"\n>"
            texto += "<h5 class=\"card-title\">" + actual.valor.nombre + "</h5>\n</div>\n<ul class=\"list-group list-group-flush\">\n"
            texto += "<li class=\"list-group-item\">Autor: " + actual.valor.autor + "</li>\n"
            texto += "<li class=\"list-group-item\">ISBN: " + actual.valor.isbn + "</li>\n"
            texto += "<li class=\"list-group-item\">Páginas: " + actual.valor.paginas + "</li>\n"
            texto += "<li class=\"list-group-item\">Categoría: " + actual.valor.categoria + "</li>\n</ul>\n</div>\n<div style=\"height:15px;\">     </div>\n"
            actual = actual.siguiente;
        }
        element.innerHTML = texto
    }
    grafDes() {
        this.ordenarInAlfa()
        var element = document.getElementById("ejemplaresDiv");
        var actual = this.cabeza
        var texto = "<div>ordenarInAlfa() {<br>\
            &nbsp;&nbsp;for (let i = 0; i < this.contador + 1; i++) {<br>\
                &nbsp;&nbsp;&nbsp;&nbsp;var actualNuevo = this.cabeza<br>\
                &nbsp;&nbsp;&nbsp;&nbsp;for (let j = 0; j < (this.contador); j++) {<br>\
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (actualNuevo.siguiente != null && actualNuevo.valor.nombre < actualNuevo.siguiente.valor.nombre) {<br>\
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var nodoJ = actualNuevo.valor<br>\
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var nodoJ2 = actualNuevo.siguiente.valor<br>\
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;actualNuevo.valor = nodoJ2<br>\
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;actualNuevo.siguiente.valor = nodoJ<br>\
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>\
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;actualNuevo = actualNuevo.siguiente<br>\
                &nbsp;&nbsp;&nbsp;&nbsp;}<br>\
                &nbsp;&nbsp;}<br>\
        }</div>"
        while (actual != null) {
            const nombres = ["../src/assets/img/libros/l3.jpg", "../src/assets/img/libros/l1.jpg", "../src/assets/img/libros/l2.jpg", "../src/assets/img/libros/l4.jpg"];
            const aleatorio = nombres[Math.floor(Math.random() * nombres.length)];
            texto += "<div class=\"card\" style=\"width: 18rem;\">\n<img class=\"card-img-top\" src=\""
            texto += aleatorio
            texto += "\" WIDTH=50 HEIGHT=300 alt=\"Card image cap\">\n<div class=\"card-body\"\n>"
            texto += "<h5 class=\"card-title\">" + actual.valor.nombre + "</h5>\n</div>\n<ul class=\"list-group list-group-flush\">\n"
            texto += "<li class=\"list-group-item\">Autor: " + actual.valor.autor + "</li>\n"
            texto += "<li class=\"list-group-item\">ISBN: " + actual.valor.isbn + "</li>\n"
            texto += "<li class=\"list-group-item\">Páginas: " + actual.valor.paginas + "</li>\n"
            texto += "<li class=\"list-group-item\">Categoría: " + actual.valor.categoria + "</li>\n</ul>\n</div>\n<div style=\"height:15px;\">     </div>\n"
            actual = actual.siguiente;
        }
        element.innerHTML = texto
    }
    imprimirSelec() {
        var actual = this.cabeza
        var select = document.getElementById("selectUno")
        while (actual != null) {
            select.innerHTML += "<option value=\"" + actual.valor.nombre + "\">" + actual.valor.nombre + "</option>}"
            actual = actual.siguiente
        }
    }
    comprarLibros(libro, cantidad) {
        var actual = this.cabeza;
        while (actual != null) {
            if (actual.valor.nombre == libro) {
                var disponible = actual.valor.cantidad
                var resta = disponible - cantidad
                var restaDos = cantidad - disponible
                if (resta < 0) {
                    actual.valor.cantidad = 0
                    return {
                        cantidad: restaDos,
                        librito: actual.valor,
                        cupieron:disponible
                    };
                } else {
                    var libAux = actual
                    actual.valor.cantidad = resta
                    return {
                        cantidad: 0,
                        librito: actual.valor,
                        cupieron:cantidad
                        
                    };
                }
            }
            actual = actual.siguiente;
        }
    }
}
