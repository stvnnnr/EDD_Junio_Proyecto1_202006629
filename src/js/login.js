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
            alert("Bienvenido Administrador")
            document.getElementById("adminDiv").style.display = "block"
            document.getElementById("loginDiv").style.display = "none"
        } else if (resUser == "Usuario") {
            alert("Bienvenido usuario")
            listaUsuarios.graficarLlegando(user)
            document.getElementById("userDiv").style.display = "block"
            document.getElementById("loginDiv").style.display = "none"
            localStorage.setItem("user",user);
            document.getElementById('name-user-login').innerHTML=user
        } else if (resAdmins == "Administrador") {
            alert("Bienvenido Administrador")
            document.getElementById("adminDiv").style.display = "block"
            document.getElementById("loginDiv").style.display = "none"
        }else{
            alert("Usuario no encontrado")
        }
    } else {
        alert("Llena los campos papito")
    }
}

function volver() {
    listaUsuarios.grafTops()
    document.getElementById("homeDiv").style.display = "block"
    document.getElementById("loginDiv").style.display = "none"
}