import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PorfolioService } from 'src/app/services/porfolio.service';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
miPorfolio:any;
usuarioAutenticado: boolean =true;
form!:any;

  constructor(private datosPorfolio:PorfolioService, private formBuilder:FormBuilder ) {
    this.form=this.formBuilder.group({
   
    nombreBanner1:["",  [Validators.required]],
    apellidooBanner1:["", [Validators.required]],
    posicionBanner1:["", [Validators.required]],
    posicionBanner2:["", [Validators.required]],
    UrlDeLaImagen:["https://", [Validators.required, Validators.pattern('https?://.+')]],
  })
 
   }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.miPorfolio=data;
  })
  }
  guardarBanner(){
    if (this.form.valid){
      this.form.reset();
      document.getElementById("cerrarModalBanner")?.click();
    }
    else{
      alert("hay errores");
      this.form.markAllAsTouched();

    }
  }

  get nombreBanner1(){
    return this.form.get("nombreBanner1")
  }

  get apellidooBanner1(){
    return this.form.get("apellidooBanner1")
  }
  get posicionBanner1()
{
  return this.form.get("posicionBanner1")
}
 get posicionBanner2(){
   return this.form.get("posicionBanner2")
 }
 get UrlDeLaImagen(){
   return this.form.get("UrlDeLaImagen")
 }
}
