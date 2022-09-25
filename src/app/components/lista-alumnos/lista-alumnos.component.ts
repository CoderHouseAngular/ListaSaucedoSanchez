import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/Alumno';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {

  listaAlumnos:Array<Alumno>=[
    {Nombre:"Angel",Edad:18,Genero:"Masculino",Resultados:[100,88,90,60]},
    {Nombre:"Juan",Edad:19,Genero:"Masculino",Resultados:[70,70,69,100]},
    {Nombre:"Ana",Edad:18,Genero:"Femenino",Resultados:[100,90,60,0]},
    {Nombre:"Luis",Edad:17,Genero:"Masculino",Resultados:[0,0,0,100]},
    {Nombre:"Abner",Edad:23,Genero:"Masculino",Resultados:[90,100,100,100]},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  
  calcularPromedio(resultados: Array<number>){

    let suma=0;
    resultados.forEach((num)=>{
        suma+=num;
    });

    return suma/resultados.length;

}

}
