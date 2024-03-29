import { listaAdmins } from './listaAdmins/listaAdmins.js';
import { listaUsuarios } from './listasUsuarios/listaCUsuarios.js';
import { usuario } from "./usuario.js";
import { listaCompras } from "./listaLibrosComprados/listaLibCom.js";
import { abb } from "./arbolAutores/arbolAutores.js"
import { autores } from "./autores.js"
import { matrizOrtogonal, ortoLibros } from "./matrizOrtogonalLibros/matrizOrtogonal.js"
import { libro } from "./libro.js"
import { listaSimLibros } from "./listaLibros/listaLibros.js"
import { listaPedidos } from './listaPedidos/listaPedidos.js';
import {matrizDisperza, matrix } from './matrizDisperza/matrizDisperza.js';
var pedidos = new listaPedidos()

document.getElementById('btnBuscar').addEventListener("click", buscarAutor, false);
document.getElementById('enviarUser').addEventListener("click", loadFile, false);
document.getElementById('enviarLibro').addEventListener("click", loadFileDos, false);
document.getElementById('enviarAutor').addEventListener("click", loadFileTres, false);
document.getElementById('viewUser').addEventListener("click", viewUser, false);
document.getElementById('viewLibros').addEventListener("click", viewLibros, false);
document.getElementById('viewAutors').addEventListener("click", viewAutors, false);
document.getElementById('logout').addEventListener("click", logout, false);
document.getElementById('logoutUser').addEventListener("click", logoutDos, false);
document.getElementById('alfa').addEventListener("click", ascendente, false);
document.getElementById('Antialfa').addEventListener("click", descendente, false);
document.getElementById('hacerPedido').addEventListener("click", librosPedidos, false);

// ________________________________________________________________________________________________________________________________________________
function loadFile() {
    var input, file, fr;
    input = document.getElementById('files');
    if (!input) {
        alert("No hay documento");
    }
    else if (!input.files) {
        alert("Tu navegador no sirve");
    }
    else if (!input.files[0]) {
        alert("Selecciona algun archivo");
    }
    else {
        file = input.files[0];
        fr = new FileReader();
        fr.onload = receivedText;
        fr.readAsText(file);
    }
}
function receivedText(e) {
    let lines = e.target.result;
    var newArr = JSON.parse(lines);
    crearUsuarios(newArr)
    $("#carga-usuarios").modal("hide");
    alert("Documento Subido")
}
function crearUsuarios(archivo) {
    for (let x of archivo) {
        var userNew = new usuario(x.dpi, x.nombre_completo, x.nombre_usuario, x.correo, x.rol, x.contrasenia, x.telefono)
        var listComp = new listaCompras()
        userNew.setLibros(listComp)
        if (x.rol == "Administrador") {
            listaAdmins.insertar(userNew)
        } else {
            listaUsuarios.insertar(userNew)
        }
    }
    listaAdmins.recorrer()
    console.log("---------------------------------------------------")
    listaUsuarios.recorrer()
    listaUsuarios.graficarAdmin()
}
function viewUser() {
    listaUsuarios.graficarAdmin()
}
// ----------------------------------------------------------------------------------------------------------------------------------

function loadFileDos() {
    var input, file, fr;
    input = document.getElementById('filesLib');
    if (!input) {
        alert("No hay documento");
    }
    else if (!input.files) {
        alert("Tu navegador no sirve");
    }
    else if (!input.files[0]) {
        alert("Selecciona algun archivo");
    }
    else {
        file = input.files[0];
        fr = new FileReader();
        fr.onload = receivedTextDos;
        fr.readAsText(file);
    }
}
function receivedTextDos(e) {
    let lines = e.target.result;
    var newArr = JSON.parse(lines);
    crearLibros(newArr)
    $("#carga-libros").modal("hide");
    alert("Documento Subido")
}
var listaLib = new listaSimLibros()
function crearLibros(archivo) {
    for (let x of archivo) {
        var libroNuevo = new libro(x.isbn, x.nombre_autor, x.nombre_libro, x.cantidad, x.fila, x.columna, x.paginas, x.categoria)
        listaLib.insertar(libroNuevo)
        if (x.categoria == "Fantasia") {
            ortoLibros.buscarRemplazar(x.fila, x.columna, libroNuevo)
        }else{
            matrix.insertar(x.fila, x.columna, libroNuevo)
        }
    }
    ortoLibros.graficarLindo()
    ortoLibros.graff()
    matrix.graficar()
    listaLib.grafPilas()
    listaLib.imprimirSelec()
    matrix.grafLindo()
}
function ascendente() {
    listaLib.grafAlfa()
}
function descendente() {
    listaLib.grafDes()
}
function viewLibros() {
    ortoLibros.graficarLindo()
    ortoLibros.graff()
    listaLib.grafPilas()
    listaLib.imprimirSelec()
    matrix.graficar()
}
// -----------------------------------------------------------------------------------------------------------------------------
var arbolAutores = new abb()
function loadFileTres() {
    var input, file, fr;
    input = document.getElementById('fileAutor');
    if (!input) {
        alert("No hay documento");
    }
    else if (!input.files) {
        alert("Tu navegador no sirve");
    }
    else if (!input.files[0]) {
        alert("Selecciona algun archivo");
    }
    else {
        file = input.files[0];
        fr = new FileReader();
        fr.onload = receivedTextTres;
        fr.readAsText(file);
    }
}
function receivedTextTres(e) {
    let lines = e.target.result;
    var newArr = JSON.parse(lines);
    crearAutores(newArr)
    $("#carga-autores").modal("hide");
    alert("Documento Subido")
}
function crearAutores(archivo) {
    for (let x of archivo) {
        var userNew = new autores(x.dpi, x.nombre_autor, x.correo, x.telefono, x.direccion, x.biografia)
        arbolAutores.insertar(userNew)
    }
    arbolAutores.generarDot()
}
function viewAutors() {
    arbolAutores.generarDot()
}
function buscarAutor() {
    var x = document.getElementById('autorBuscar').value;
    var lola = arbolAutores.buscar(String(x))
    if (lola != 0) {
        removerHijos()
        var nombreAutor = document.createTextNode(lola.nombre);
        var correoAutor = document.createTextNode(lola.correo);
        var telefonoAutor = document.createTextNode(lola.telefono);
        var dpiAutor = document.createTextNode("DPI: " + lola.dpi);
        var direcAutor = document.createTextNode("Dirección: " + lola.direccion);
        var biografiaAutor = document.createTextNode(lola.biografia);
        document.getElementById('nombreAutor').appendChild(nombreAutor);
        document.getElementById('correoAutor').appendChild(correoAutor);
        document.getElementById('telefonoAutor').appendChild(telefonoAutor);
        document.getElementById('dpiAutor').appendChild(dpiAutor);
        document.getElementById('direcAutor').appendChild(direcAutor);
        document.getElementById('biografiaAutor').appendChild(biografiaAutor);
    } else {
        removerHijos()
    }
}
function removerHijos() {
    const aa = document.createTextNode("");
    const Uno = document.getElementById('nombreAutor');
    Uno.replaceChildren(aa)

    const Dos = document.getElementById('correoAutor');
    Dos.replaceChildren(aa);

    const Tres = document.getElementById('telefonoAutor');
    Tres.replaceChildren(aa);

    const Cuatro = document.getElementById('dpiAutor');
    Cuatro.replaceChildren(aa);

    const Cinco = document.getElementById('direcAutor');
    Cinco.replaceChildren(aa);

    const Seis = document.getElementById('biografiaAutor');
    Seis.replaceChildren(aa);
}
// --------------------------------------------------------------------------------
function logout() {
    document.getElementById("adminDiv").style.display = "None"
    document.getElementById("loginDiv").style.display = "block"
}
function logoutDos() {
    document.getElementById("userDiv").style.display = "None"
    document.getElementById("loginDiv").style.display = "block"
    localStorage.removeItem('user');
}
// dfghjklñdfghjklñ{fghjklñ
function librosPedidos() {
    var Uno = document.getElementById('selectUno').value;
    var Dos = document.getElementById('cantidad').value;
    var compro = isNaN(Dos)
    var userEncontrado = localStorage.getItem('user');
    if (Uno == "Elija..." || Dos == "" || compro == true) {
        alert("Ingrese los valores correctos")
    } else {
        const { cantidad, librito, cupieron } = listaLib.comprarLibros(Uno, Dos)
        var libAux = new libro(librito.isbn, librito.autor, librito.nombre, cupieron, librito.fila, librito.columna, librito.paginas, librito.categoria)
        var libAuxDos = new libro(librito.isbn, librito.autor, librito.nombre, cantidad, librito.fila, librito.columna, librito.paginas, librito.categoria)
        if (cantidad == 0) {
            if(cupieron!= 0){
                listaUsuarios.compraLibros(userEncontrado, libAux, cupieron)
            }
            
        } else {
            if(cupieron!= 0){
                listaUsuarios.compraLibros(userEncontrado, libAux, cupieron)
            }
            pedidos.insertar(libAuxDos)
            pedidos.graficarUser()
            // metemos los libros en el user y en la lista de pedidos
        }
        listaUsuarios.graficarAdmin()
        listaLib.grafPilas()
        // listaUsuarios.ordenrTops()
        alert("Libro comprado")
    }

}