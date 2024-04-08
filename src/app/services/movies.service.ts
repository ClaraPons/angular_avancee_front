import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environement } from '../environement';
import { Movie } from '../movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(protected http: HttpClient) { }

  public ressourceUrl = environement.apiServerUrl + 'movies'

  fetchAll(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.ressourceUrl}`)
  }

  fetchById(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.ressourceUrl}/${id}`)
  }

  getActorsByMovieId(movieId: number): Observable<Movie> {
    return this.http.get<any>(`${this.ressourceUrl}/${movieId}/actors`)
  }

  create(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(`${this.ressourceUrl}`, movie)
  }

}
