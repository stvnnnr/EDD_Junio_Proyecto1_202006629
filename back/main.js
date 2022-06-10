import {listaCircular} from "./listasUsuarios/listaCUsuarios.js";
import { usuario } from "./usuario.js";

export var listaUsuarios = new listaCircular()
var adminLlave = new usuario("2354168452525","WIlfred Perez","Wilfred","2990271470101@ingenieria.usac.edu.gt","Administrador","123","+502 (123) 123-4567")
listaUsuarios.insertar(adminLlave)
listaUsuarios.graficarDerecha()
// listaUsuarios.recorrer()



