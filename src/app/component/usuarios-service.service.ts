import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosServiceService {

  constructor(private _http:HttpClient) { }

  getUsuarios(page){
   return  this._http.get('https://reqres.in/api/users?page='+page);
  }
  addEmployee(body){
   return  this._http.post('https://reqres.in/api/users',body)
  }
  getSingleUsuarios(id){
    return  this._http.get('https://reqres.in/api/users/'+id)
  }
  editEmployee(body,id){
   return  this._http.put('https://reqres.in/api/users/'+id,body)
  }
  deletEmployee(id){
    return  this._http.delete('https://reqres.in/api/users/'+id)
  }
}
