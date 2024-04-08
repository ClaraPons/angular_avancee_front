import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environement } from '../environement';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DirectorsService {

  constructor(protected http: HttpClient) { }

  public ressourceUrl = environement.apiServerUrl + 'directors'

  fetchAll(): Observable<any> {
    return this.http.get<any>(`${this.ressourceUrl}`)
  }

  fetchById(id: number): Observable<any> {
    return this.http.get<any>(`${this.ressourceUrl}/${id}`)
  }
}
