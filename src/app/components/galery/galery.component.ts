import { Component, OnInit } from '@angular/core';
 import * as AOS from 'aos';
@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css']
})
export class GaleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init({
      offset:400,
      duration: 1700,
     
    });
  }

}
