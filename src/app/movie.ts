import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Movie {
  id: string;
  title: string;
  year: number;
  rating: string;
  genre: string;
  description: string;
  poster?: string; 
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'https://freetestapi.com/api/v1/movies';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.apiUrl}/movies`);
  }

  getMovieById(id: string): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiUrl}/movies/${id}`);
  }
}
