import { Sala } from './../models/sala';
import { Component, OnInit } from '@angular/core';
import { SalasService } from '../services/salas.service';

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.css']
})
export class SalasComponent implements OnInit {

  salas: Sala[];
  sendSuccess: boolean;

  Fecha_Creacion: string;
  Tipo: string;
  Ubicacion: string;
  Sede: string;
  constructor(private salasService: SalasService) { }

  ngOnInit() {
    this.salasService.getSalas().subscribe(data => this.salas = data);
  }

  enviarFormulario() {


    console.log({
      Fecha_Creacion: this.Fecha_Creacion,
      Tipo: this.Tipo,
      Ubicacion: this.Ubicacion,
      Sede: this.Sede
    });

    this.salasService.postSalas({
      Fecha_Creacion: this.Fecha_Creacion,
      Tipo: this.Tipo,
      Ubicacion: this.Ubicacion,
      Sede: this.Sede
    }).subscribe(
      data => this.sendSuccess = true
    );
  }

}
