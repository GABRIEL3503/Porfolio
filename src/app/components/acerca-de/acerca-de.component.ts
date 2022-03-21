import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PorfolioService } from 'src/app/services/porfolio.service';
import * as AOS from 'aos';
@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit{
miPorfolio:any={};
usuarioAutenticado: boolean =true;
form:any;


  constructor(private datosPorfolio:PorfolioService,private formBuilder:FormBuilder ) {
    this.form=this.formBuilder.group({
      posicionAcercaDe:["", [Validators.required]],
      name:["", [Validators.required]],
      age:["", [Validators.required]],
      nationality:["",[Validators.required]],
      residence:["",[Validators.required]],
    mail:["",[Validators.required]],
    tel:["",[Validators.required]],
    disponibilidad:["",[Validators.required]]

    })
   }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe((data: any) =>{
      this.miPorfolio=data;
    });
    AOS.init({
      offset:400,
      duration: 1500,
    });
  }

  guardarAcerca(){
    if (this.form.valid){
      this.form.reset();
      document.getElementById("cerrarModalAcerca")?.click();
    }
    else{
      alert("Hay errores");
      this.form.markAllAsTouched();

    }
  }
  get name(){
    return this.form.get("name")
  }
  
  get posicionAcercaDe(){
    return this.form.get("posicionAcercaDe")
  }
  get age(){
    return this.form.get("age")
  }
 get nationality(){
   return this.form.get("nationality")
 }

 get residence(){
  return this.form.get("residence")
}
get mail(){
  return this.form.get("mail")
}
get tel(){
  return this.form.get("tel")
}
get disponibilidad(){
  return this.form.get("disponibilidad")
}
}
