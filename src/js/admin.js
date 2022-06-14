import { listaAdmins } from './listaAdmins/listaAdmins.js';
import { listaUsuarios } from './listasUsuarios/listaCUsuarios.js';
import { usuario } from "./usuario.js";
import { listaCompras } from "./listaLibrosComprados/listaLibCom.js";
import { abb } from "./arbolAutores/arbolAutores.js"
import { autores } from "./autores.js"

document.getElementById('enviarUser').addEventListener("click", loadFile, false);
document.getElementById('enviarLibro').addEventListener("click", loadFileDos, false);
document.getElementById('enviarAutor').addEventListener("click", loadFileTres, false);
document.getElementById('viewUser').addEventListener("click", viewUser, false);
document.getElementById('viewAutors').addEventListener("click", viewAutors, false);
document.getElementById('logout').addEventListener("click", logout, false);
var arbolAutores = new abb()


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
function crearLibros(archivo) {
    console.log(archivo)
}
// -----------------------------------------------------------------------------------------------------------------------------
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
// --------------------------------------------------------------------------------
function logout() {
    document.getElementById("adminDiv").style.display = "None"
    document.getElementById("loginDiv").style.display = "block"
}