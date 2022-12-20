import { Component } from '@angular/core';
import {  Router,ActivatedRoute} from "@angular/router";
import { IPersona } from "../../modelos/persona.interface";
import { ApiService } from "../../servicios/api/api.service";
import { FormGroup,FormControl,Validators } from "@angular/forms";
import { formatCurrency } from '@angular/common';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {

  constructor(private router:Router,private activateRoute:ActivatedRoute,private api:ApiService){}
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
    identificador:0,
  }
  editarForm= new FormGroup({
    nombres:new FormControl(''),
    apellidos:new FormControl(''),
    numeroIdentificacion:new FormControl(''),
    email:new FormControl(''),
    tipoIdentificacion:new FormControl(''),
    fechaDeCreacion:new FormControl(''),
    tipoConIdentificacion:new FormControl(''),
    nombreCompleto:new FormControl(''),
    estado:new FormControl('')
  });
  

  ngOnInit():void{
    let identificador = this.activateRoute.snapshot.paramMap.get('identificador');
   
    this.api.getSinglePeople(identificador).subscribe(data =>{
      let response:any;
      response=data;
      this.DataPerson=response['data'][0];
      
    })
  }



  update(){
  
    this.api.UpdatePeople(this.DataPerson).subscribe(data=>{
   
      this.router.navigate(['dashboard']);
    });
  }

  Eliminar(){

    this.DataPerson.estado=1;
    this.api.DeletePeople(this.DataPerson).subscribe(data=>{
  
      this.router.navigate(['dashboard']);
    })
  }

}
