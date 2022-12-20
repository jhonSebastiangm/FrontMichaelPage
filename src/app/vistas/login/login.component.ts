import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {  ApiService } from "../../servicios/api/api.service";
import { Ilogin } from "../../modelos/login.interface";
import {  IResponse } from "../../modelos/response.interface";
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = new FormGroup({
    usuario : new FormControl('',Validators.required),
    pass : new FormControl('',Validators.required)
  })

  constructor(private api:ApiService,private router:Router){}

  errorStatus: boolean = false;
  errorMsj:any="";
  
  onLogin(form: any){
 
    this.api.login(form).subscribe(data =>{
      let response : any;
      response = data;
   
      if (response['mensaje'].error) {
      
        this.errorStatus=true;
        this.errorMsj = response['mensaje'].mensaje;
      }else
      {
       
        localStorage.setItem("token",response['data'][0].identificador);
        this.router.navigate(['dashboard']);
      }
    })
  }
 
}
