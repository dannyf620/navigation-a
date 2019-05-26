import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Sala } from '../models/sala';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalasService {

  private url = environment.baseUrl + 'salas/';
  constructor(private http: HttpClient) { }

  getSalas(): Observable<Sala[]> {
    return this.http.get<Sala[]>(this.url);
  }

  postSalas(sala: Sala): Observable<Sala> {
    return this.http.post<Sala>(this.url, sala);
  }

  getSala(salaId): Observable<Sala> {
    return this.http.get<Sala>(this.url + salaId + '/');
  }
}
