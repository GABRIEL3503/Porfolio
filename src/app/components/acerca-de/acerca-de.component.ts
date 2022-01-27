import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PorfolioService } from 'src/app/services/porfolio.service';
@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit{
miPorfolio:any;
usuarioAutenticado: boolean =true;
form!:any;


  constructor(private datosPorfolio:PorfolioService,private formBuilder:FormBuilder ) {
    this.form=this.formBuilder.group({
      posicionAcercaDe:[""],
      name:["", [Validators.required]],
      lastName:["",[Validators.required]],
      age:[""],
      nationality:["",[Validators.required]],
      residence:["",[Validators.required]],
    })
   }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.miPorfolio=data;
    });
  }

  guardarAcerca(){
    alert("se esta ejecutando");
  }
  
}
