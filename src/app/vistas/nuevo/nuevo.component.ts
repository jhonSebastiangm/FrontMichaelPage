import { Component } from '@angular/core';
import { IPersona } from "../../modelos/persona.interface";
import { ApiService } from "../../servicios/api/api.service";
import {  Router} from "@angular/router";

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent {

  constructor(private api:ApiService, private router:Router){}

  DataPerson: IPersona = {
    nombres:'',
    apellidos:'',
    numeroIdentificacion:'',
    email:'',
    tipoIdentificacion:'',
    fechaDeCreacion:'',
    tipoConIdentificacion:'',
    nombreCompleto:'',
    estado:0,
    identificador: 0
  }


  save(){
    this.DataPerson.estado=0;
    this.DataPerson.nombreCompleto = this.DataPerson.nombres + this.DataPerson.apellidos;
    this.DataPerson.tipoConIdentificacion = this.DataPerson.tipoConIdentificacion + this.DataPerson.identificador;
    this.api.postPeople(this.DataPerson).subscribe(data=>{
      this.router.navigate(['dashboard']);
    });
  }
}
