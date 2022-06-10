import { listaUsuarios } from "./main.js"
document.getElementById('sesion').addEventListener("click", logearse, false);
document.getElementById('volver').addEventListener("click", volver, false);
function logearse() {
    var usuario = document.getElementById('user').value
    var password = document.getElementById('pass').value
    if (usuario == "" || password == "") {
        alert("mete tus datos papito")
    } else {
        var Respuesta = listaUsuarios.logear(usuario, password)
        if (Respuesta[0] != "Nulo") {
            return
        } else {
            alert("Ese man ni existe")
        }
    }
}
function volver(){
    window.location.href = "index.html"
}