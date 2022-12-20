import { Component } from '@angular/core';
import {  ApiService} from "../../servicios/api/api.service";
import {  Router} from "@angular/router";
import {  ListapersonasI} from "../../modelos/listapersonas.interface";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  personas!:ListapersonasI[];

  constructor(private api:ApiService,private router:Router){}
  
  ngOnInit():void{

    this.api.getAllPeople().subscribe(data=>{
      let response : any;
      response=data;
      this.personas=response['data'];
    })
  }

  editarPersona(identificador: any){
    
    this.router.navigate(['editar',identificador]);
  }

  nuevaPersona(){
  
    this.router.navigate(['nuevo']);
  }
}
