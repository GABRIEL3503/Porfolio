import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})
export class GraficosComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    AOS.init({
      offset:400,
      duration: 1700,
    });
  }

}
