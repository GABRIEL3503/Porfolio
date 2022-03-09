import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/services/porfolio.service';
import * as AOS from 'aos';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent implements OnInit {
  usuarioAutenticado: boolean =true;
educacionList: any;
  form: FormGroup;
  constructor(private datosPorfolio:PorfolioService,private formBuilder:FormBuilder) {
    this.form=this.formBuilder.group({
      career: ['',[Validators.required]],
      school: ['', [Validators.required]],
      start:['', [Validators.required]],
      end:['', [Validators.required]],
      img:['https://', [Validators.required ,Validators.pattern('https?://.+')]]
    })
   }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.educacionList=data.education;
    });
    AOS.init({
      offset:400,
      duration: 1500,
    });
  }
  guardarFormacion(){
    if(this.form.valid){
      this.form.reset();
      document.getElementById("cerrarModalFormacion")?.click();
    }
    else{
    alert("hay errores")
    this.form.markAllAsTouched()
  }}
  get school(){
    return this.form.get("school");
  }
  get career(){
    return this.form.get("career");
  }
  get start(){
    return this.form.get("start")
  }
  get end(){
    return this.form.get("end")
  }
  get img(){
    return this.form.get("img")
  }
}
