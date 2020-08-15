import { Injectable } from '@angular/core';
import { Partido } from "../interfaces/partido";

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PartidoService {

  private partidosUrl: string = 'http://localhost:4000/partidos';

  constructor(private http: HttpClient) { }

  getPartidos(): Observable<Partido[]> {
    //return of(Partidos);
    return this.http.get<Partido[]>(this.partidosUrl);
  }

  getPartido(id: string): Observable<Partido> {
    // TODO: send the message _after_ fetching the Partido
    return this.http.get<Partido>(this.partidosUrl + '/' + id);
  }

  updatePartido(partido: Partido): Observable<Partido> {
    return this.http.put<Partido>(this.partidosUrl + '/' + partido.id, partido);
  }

  /** POST: add a new Partido to the server */
  addPartido(partido: Partido): Observable<Partido> {
    return this.http.post<Partido>(this.partidosUrl, partido);
  }
}
