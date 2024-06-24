import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from './movie.service';

@Injectable({
  providedIn: 'root'
})
export class FavoriteMoviesService {
  private favoriteMovies: Movie[] = [];
  private favoriteMoviesSubject = new BehaviorSubject<Movie[]>(this.favoriteMovies);

  getFavoriteMovies() {
    return this.favoriteMoviesSubject.asObservable();
  }

  addToFavorites(movie: Movie) {
    this.favoriteMovies.push(movie);
    this.favoriteMoviesSubject.next(this.favoriteMovies);
  }

  removeFromFavorites(movie: Movie) {
    this.favoriteMovies = this.favoriteMovies.filter(m => m.id !== movie.id);
    this.favoriteMoviesSubject.next(this.favoriteMovies);
  }

  isMovieInFavorites(movie: Movie): boolean {
    return this.favoriteMovies.some(m => m.id === movie.id);
  }
}
