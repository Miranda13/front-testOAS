import { Injectable } from '@angular/core';
import { Grupo } from "../interfaces/grupo";

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  private gruposUrl: string = 'http://localhost:4000/grupos';

  constructor( private http: HttpClient) { }

  getGrupos(): Observable<Grupo[]> {
    //return of(Grupos);
    return this.http.get<Grupo[]>(this.gruposUrl);
  }

  getGrupo(id: string): Observable<Grupo> {
    // TODO: send the message _after_ fetching the Grupo
    return this.http.get<Grupo>(this.gruposUrl + '/' + id);
  }

  updateGrupo(grupo: Grupo): Observable<Grupo> {
    return this.http.put<Grupo>(this.gruposUrl + '/' + grupo.id, grupo);
  }

  /** POST: add a new Grupo to the server */
  addGrupo(grupo: Grupo): Observable<Grupo> {
    return this.http.post<Grupo>(this.gruposUrl, grupo);
  }

  deleteGrupo(id:string): Observable<Grupo>{
    return this.http.delete<Grupo>(this.gruposUrl+ '/' + id);
  }
}
