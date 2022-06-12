// import { listaUsuarios } from "./main.js"
console.log("JAJAJAJAJ")
import {listaUsuarios} from './main.js'

document.getElementById('volver').addEventListener("click", volver, false);
document.getElementById('log').addEventListener("click", logear, false);
function logear(){
    var user = String(document.getElementById('user').value)
    var password = String(document.getElementById('pass').value)
    if(user!="" && password!=""){
        if(user=="Wilfred" && password=="123"){
            window.location.href = "./admin.html"
        }else{
            alert("Ese chatio no existe o esta mal escrito")
        }
    }else{
        alert("Llena los campos papito")
    }
}
function volver(){
    window.location.href = "../../index.html"
}