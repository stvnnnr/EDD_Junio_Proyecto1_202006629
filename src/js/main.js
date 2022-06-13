import {listaUsuarios} from "./listasUsuarios/listaCUsuarios.js";
import { usuario } from "./usuario.js";

document.getElementById('iniciar').addEventListener("click", movLogin, false);
function movLogin() {
    document.getElementById("homeDiv").style.display = "None"
    document.getElementById("loginDiv").style.display = "block"
}



