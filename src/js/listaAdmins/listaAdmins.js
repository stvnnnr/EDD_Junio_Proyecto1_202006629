import { usuario } from "../usuario.js";
class nodo {
    constructor(admin) {
        this.admin = admin
        this.siguiente = null
    }
}

export class listaCircularAdmin {
    constructor() {
        this.cabeza = null
        this.contador = 0
    }

    insertar(admin) {
        if (this.cabeza == null) {
            this.cabeza = new nodo(admin)
            this.cabeza.siguiente = this.cabeza
            this.contador = this.contador + 1
        } else {
            var actual = this.cabeza
            if (this.contador == 1) {
                var tempo = new nodo(admin)
                actual.siguiente = tempo
                tempo.siguiente = this.cabeza
                this.contador = this.contador + 1
            } else {
                var actual = this.cabeza
                for (let index = 0; index < this.contador - 1; index++) {
                    actual = actual.siguiente
                }
                var tempo = new nodo(admin)
                actual.siguiente = tempo
                tempo.siguiente = this.cabeza
                this.contador = this.contador + 1
            }
        }
    }

    recorrer() {
        var actual = this.cabeza
        for (let index = 0; index < (this.contador); index++) {
            // console.log("admin", actual.admin.nombre)
            actual = actual.siguiente
        }
        // console.log(this.contador)
    }

    logear(user, pass) {
        var actual = this.cabeza
        if (actual != null) {
            for (let index = 0; index < (this.contador); index++) {
                if (user == String(actual.admin.usuario) && pass == String(actual.admin.contra)) {
                    return ("Administrador")
                }
                actual = actual.siguiente
            }
            return ("Nulo")
        } else {
            return ("vacia")
        }
    }
}
export var listaAdmins = new listaCircularAdmin();
var adminLLave = new usuario("2354168452525", "WIlfred Perez", "Wilfred", "2990271470101@ingenieria.usac.edu.gt", "Administrador", "123", "+502 (123) 123-4567")
listaAdmins.insertar(adminLLave)