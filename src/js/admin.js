import { listaAdmins } from './listaAdmins/listaAdmins.js';
import { listaUsuarios } from './listasUsuarios/listaCUsuarios.js';
import { usuario } from "./usuario.js";
document.getElementById('enviarUser').addEventListener("click", loadFile, false);
document.getElementById('viewUser').addEventListener("click", viewUser, false);
document.getElementById('logout').addEventListener("click", logout, false);


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
        console.log(x.dpi);
        listaUsuarios.insertar(userNew)
    }
    listaUsuarios.recorrer()
}
function viewUser(){
    listaUsuarios.graficarAdmin()
}
function logout(){
    document.getElementById("adminDiv").style.display = "None"
    document.getElementById("loginDiv").style.display = "block"
}