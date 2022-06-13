import { listaUsuarios } from "./listasUsuarios/listaCUsuarios.js"
import { listaAdmins } from "./listaAdmins/listaAdmins.js"

document.getElementById('volver').addEventListener("click", volver, false);
document.getElementById('log').addEventListener("click", logear, false);


function logear() {
    var user = String(document.getElementById('user').value)
    var password = String(document.getElementById('pass').value)
    var resUser = listaUsuarios.logear(user, password)
    var resAdmins = listaAdmins.logear(user, password)
    if (user != "" && password != "") {
        if (user == "Wilfred" && password == "123") {
            document.getElementById("adminDiv").style.display = "block"
            document.getElementById("loginDiv").style.display = "none"
        } else if (resUser == "Usuario") {
            alert("Ese chatio no existe o esta mal escrito")
        } else if (resAdmins == "Administrador") {
            alert("Admin")
        }
    } else {
        alert("Llena los campos papito")
    }
}

function volver() {
    document.getElementById("homeDiv").style.display = "block"
    document.getElementById("loginDiv").style.display = "none"
}