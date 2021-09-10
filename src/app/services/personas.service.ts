import { Persona } from './../personas/persona.model';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class PersonasService{
  apiUrl='http://localhost:8000/api';
  constructor( private http: HttpClient){}
  getPersonas(): Observable<Persona[]>{
    return this.http.get<Persona[]>(`${this.apiUrl}/personas`);
  }
}
