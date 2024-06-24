import { Component, OnInit } from '@angular/core';
import { MovieService, Movie } from '../movie.service';
import { FavoriteMoviesService } from '../favorite-movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  searchText: string = '';
  yearFilter: number | null = null;
  ratingFilter: number | null = null;
  noMoviesFound: boolean = false;
  noMoviesFoundMsg: string = 'No movies found.';
  alertMessage: string = '';
  alertVisible: boolean = false;

  constructor(private movieService: MovieService, private favoriteMoviesService: FavoriteMoviesService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((data: Movie[]) => {
      const posterUrls = [
        'https://media-cache.cinematerial.com/p/500x/b5v2e9jg/the-shawshank-redemption-movie-poster.jpg?v=1596989012',
        'https://i.pinimg.com/564x/7f/bf/39/7fbf396b1234209ed0c887b8b932476f.jpg',
        'https://media-cache.cinematerial.com/p/500x/udapnxr3/the-dark-knight-movie-poster.jpg?v=1456051180',
        'https://media-cache.cinematerial.com/p/500x/srmnoyxu/pulp-fiction-movie-poster.jpg?v=1668291848',
        'https://media-cache.cinematerial.com/p/500x/hncfztv7/forrest-gump-movie-poster.jpg?v=1602182137',
        'https://posters.movieposterdb.com/10_06/2010/1375666/l_1375666_07030c72.jpg',
        'https://media-cache.cinematerial.com/p/500x/sejtqyfp/the-matrix-movie-poster.jpg?v=1673723611',
        'https://image.tmdb.org/t/p/w600_and_h900_bestv2/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg',
        'https://media-cache.cinematerial.com/p/500x/zjyc3qu0/the-dark-knight-rises-movie-poster.jpg?v=1456632648',
        'https://media-cache.cinematerial.com/p/500x/ctpnz4mq/interstellar-movie-poster.jpg?v=1456424450',
        'https://media-cache.cinematerial.com/p/500x/mmionz4t/fight-club-movie-poster.jpg?v=1456852437',
        'https://posters.movieposterdb.com/08_12/2000/172495/l_172495_93f99923.jpg',
        'https://m.media-amazon.com/images/I/81wByEaQrlL._AC_SY679_.jpg',
        'https://media-cache.cinematerial.com/p/500x/fjsfwbn8/the-silence-of-the-lambs-movie-poster.jpg?v=1456232081',
        'https://media-cache.cinematerial.com/p/500x/emflvqyl/the-departed-movie-poster.jpg?v=1456221186',
        'https://image.tmdb.org/t/p/w600_and_h900_bestv2/uqx37cS8cpHg8U35f9U5IBlrCV3.jpg',
        'https://media-cache.cinematerial.com/p/500x/ueu3pzjs/the-prestige-movie-poster.jpg?v=1456264974',
        'https://media-cache.cinematerial.com/p/500x/gqig4hyw/glory-movie-poster.jpg?v=1456262952',
        'https://image.tmdb.org/t/p/original/qMxAmzGQO722q0UlssCOPhrXmvX.jpg',
        'https://posters.movieposterdb.com/22_11/1994/323073/l_the-lion-king-movie-poster_07016269.jpg'
      ];

      this.movies = data.map((movie, index) => ({
        ...movie,
        poster: posterUrls[index % posterUrls.length]
      }));

      this.checkNoMoviesFound();
    });
  }

  checkNoMoviesFound() {
    this.noMoviesFound = this.filteredMovies.length === 0;
  }

  get filteredMovies() {
    const filtered = this.movies.filter(movie =>
      movie.title.toLowerCase().includes(this.searchText.toLowerCase()) &&
      (this.yearFilter ? movie.year === this.yearFilter : true) &&
      (this.ratingFilter ? movie.rating === this.ratingFilter : true)
    );

    this.noMoviesFound = filtered.length === 0;
    return filtered;
  }

  addToFavorites(movie: Movie) {
    this.favoriteMoviesService.addToFavorites(movie);
    this.showAlert('Movie added to favorites');
  }

  showAlert(message: string) {
    this.alertMessage = message;
    this.alertVisible = true;
    setTimeout(() => {
      this.alertVisible = false;
    }, 3000); 
  }
}
