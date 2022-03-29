import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/services/porfolio.service';
import * as AOS from 'aos';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  usuarioAutenticado: boolean =true;
  experienciaList: any;
    form: FormGroup;
    constructor(private datosPorfolio:PorfolioService,private formBuilder:FormBuilder) {
      this.form=this.formBuilder.group({
        puesto: ['',[Validators.required]],
        empresa: ['', [Validators.required]],
        desde:['', [Validators.required]],
        hasta:['', [Validators.required]],
        img:['https://', [Validators.required ,Validators.pattern('https?://.+')]]
      })
     }
  
    ngOnInit(): void {
      this.datosPorfolio.obtenerDatos().subscribe(data =>{
        this.experienciaList=data.experiencia;
      });
      AOS.init({
        offset:400,
        duration: 1500,
      });
    }
    guardarExperiencia(){
      if(this.form.valid){
        this.form.reset();
        document.getElementById("cerrarModalExperiencia")?.click();
      }
      else{
      alert("hay errores")
      this.form.markAllAsTouched()
    }}
    get puesto(){
      return this.form.get("puesto");
    }
    get empresa(){
      return this.form.get("empresa");
    }
    get desde(){
      return this.form.get("desde")
    }
    get hasta(){
      return this.form.get("hasta")
    }
    get img(){
      return this.form.get("img")
    }
  }
  