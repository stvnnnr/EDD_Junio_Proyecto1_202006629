// import { listaUsuarios } from "./main.js"
console.log("JAJAJAJAJ")
import {listaUsuarios} from './main.js'

document.getElementById('volver').addEventListener("click", volver, false);
document.getElementById('log').addEventListener("click", logear, false);
function logear(){
    alert("Intenta logearte")
}
function volver(){
    window.location.href = "../../index.html"
}