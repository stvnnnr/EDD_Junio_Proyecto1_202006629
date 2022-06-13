import { listaCompras } from "./listaLibrosComprados/listaLibCom.js";
export class usuario{
    constructor(dpi, nombre, usuario, correo, rol, contra, telefono){
        this.dpi=dpi
        this.nombre=nombre
        this.usuario=usuario
        this.correo=correo
        this.rol = rol
        this.contra=contra
        this.telefono=telefono
        self.listaLibros = listaCompras
    }

    setLibros(listaLibros){
        self.listaLibros=listaLibros
    }
    getLibros(){
        return self.listaLibros
    }
}