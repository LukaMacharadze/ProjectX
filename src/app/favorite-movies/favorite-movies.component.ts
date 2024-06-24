// favorite-movies.component.ts
import { Component, OnInit } from '@angular/core';
import { FavoriteMoviesService } from '../favorite-movies.service';
import { Movie } from '../movie.service';

@Component({
  selector: 'app-favorite-movies',
  templateUrl: './favorite-movies.component.html',
  styleUrls: ['./favorite-movies.component.css']
})
export class FavoriteMoviesComponent implements OnInit {
  favoriteMovies: Movie[] = [];

  constructor(private favoriteMoviesService: FavoriteMoviesService) { }

  ngOnInit(): void {
    this.favoriteMoviesService.getFavoriteMovies().subscribe((movies: Movie[]) => {
      this.favoriteMovies = movies;
    });
  }

  checkMovie(movie: Movie) {
    // Implement your logic for checking movie details
    alert(`Checking details for ${movie.title}`);
  }

  removeFromFavorites(movie: Movie) {
    this.favoriteMoviesService.removeFromFavorites(movie);
  }
}
