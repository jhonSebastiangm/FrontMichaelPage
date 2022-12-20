import { Injectable } from '@angular/core';
import {  Ilogin} from "../../modelos/login.interface";
import {  IResponse} from "../../modelos/response.interface";
import {  HttpClient,HttpHeaders} from "@angular/common/http";
import {  ListapersonasI} from "../../modelos/listapersonas.interface";
import {  Observable} from "rxjs";
import {  IPersona} from "../../modelos/persona.interface";
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string="https://localhost:7229/";
  constructor(private http:HttpClient) { }


  login(form:Ilogin):Observable<Response>
  {
    let direccion = this.url+"api/Login/Login";
    return this.http.post<Response>(direccion,form);
  }

  getAllPeople():Observable<ListapersonasI[]>{
    
    let direccion = this.url+"api/Persona/ConsultarPersonas";
    return this.http.get<ListapersonasI[]>(direccion);
  }


  getSinglePeople(identificador: any):Observable<IPersona>{
    let direccion = this.url+"api/Persona/"+identificador;
    return this.http.get<IPersona>(direccion);
  }


  postPeople(form:IPersona):Observable<IResponse>{
    console.log(form);
    let direccion = this.url+"api/Persona/crearPersona";
    return this.http.post<IResponse>(direccion,form);
  }

  UpdatePeople(form:IPersona):Observable<IResponse>{
    let direccion = this.url+"api/Persona/actualizarPersona";
    return this.http.put<IResponse>(direccion,form);
  }



  DeletePeople(form:IPersona):Observable<IResponse>{
    let direccion = this.url+"api/Persona/actualizarPersona";
    return this.http.put<IResponse>(direccion,form);
  }

}
