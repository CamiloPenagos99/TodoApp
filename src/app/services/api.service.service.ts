import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Task} from '../model/task'; 
import {global} from './global';
import { Glob } from 'glob';

@Injectable({
  providedIn: 'root'
})
export class Service {
  public url:string;

  constructor(public _http: HttpClient) { 
    this.url=global.url;
  }


  testService(){
      let msg = "Prueba del servicio";

    return msg; 
  }

  //Consumir la api, usando cadena de consulta
  getGatFacts(num:string):Observable<any>{
    let header = new HttpHeaders().set('Content-Type','application/json');

    return this._http.get(this.url+num , {headers:header})
  }

  


}
