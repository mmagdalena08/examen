import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AnimalserviceService {
  url:string="http://127.0.0.1:8000/api/v1/usuario/";
  headers=new HttpHeaders();


  constructor(private http:HttpClient) { 
    
  }


  show()
  {
    const header=new HttpHeaders()
    .set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    let dir= this.url+"mostrartipos";
    return this.http.get<any>(dir, {headers:header});
  }

  registipo(_form:any)
  {
    const header=new HttpHeaders()
    .set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    let dir= this.url+"registrartipos";
    return this.http.post<any>(dir,_form,{headers:header});
  }

  edittipo(_id:any):Observable<any>
  {
    const header=new HttpHeaders()
    .set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    let dir= this.url+"actualizartipos"+_id;
    return this.http.get<any>(dir,{headers:header});
  }

  updateEquipo(_form:any,_id:any)
  {
    const header=new HttpHeaders()
    .set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    let dir= this.url+"actualizartipos"+_id;
    return this.http.post<any>(dir,_form,{headers:header});
  }



  destroyEquipo(_id:any)
  {
    const header=new HttpHeaders()
    .set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    let dir= this.url+"eliminartipos"+_id;
   return this.http.post<any>(dir,_id,{headers:header});
  }

  //servicios para jugadores

  showanimales()
  {
    const header=new HttpHeaders()
    .set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    let dir= this.url+"mostraranimales";
    return this.http.get<any>(dir,{headers:header});
  }

  regisanimaled(_form:any)
  {
    const header=new HttpHeaders()
    .set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    let dir= this.url+"registraranimales";
    return this.http.post<any>(dir,_form,{headers:header});
  }

  editanimales(_id:any):Observable<any>
  {
    const header=new HttpHeaders()
    .set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    let dir= this.url+"actualizaranimales"+_id;
    return this.http.get<any>(dir,{headers:header});
  }

  updateanimales(_form:any,_id:any)
  {
    const header=new HttpHeaders()
    .set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    let dir= this.url+"actualizaranimales"+_id;
    return this.http.post<any>(dir,_form,{headers:header});
  }

  destroyanimales(_id:any)
  {
    const header=new HttpHeaders()
    .set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    let dir= this.url+"eliminaranimales"+_id;
   return this.http.post<any>(dir,_id,{headers:header});
  }
}
