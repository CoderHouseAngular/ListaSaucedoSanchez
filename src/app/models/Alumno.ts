import { Persona } from "./Persona";


export class Alumno implements Persona{
    Nombre: string;
    Edad: number;
    Genero: string;
    Resultados: Array<number>
    
    /**
     *
     */
    constructor(nombre:string,edad:number,genero:string,resultados: Array<number>) {

        this.Nombre=nombre;
        this.Edad=edad;
        this.Resultados=resultados;
        this.Genero=genero;
    }



}