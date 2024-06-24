import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

interface Movie {
  id: number;
  title: string;
  year: string;
  rating: string;
  genre: string;
  poster: string;
  trailer: string;
  plot: string;
  runtime: string;
  awards: string;
  country: string;
  language: string;
  boxOffice: string;
  production: string;
  website: string;
}

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  
  movie: Movie | undefined;
  posterUrls: { [key: number]: string } = {
    1: 'https://xl.movieposterdb.com/11_08/1994/111161/xl_111161_e9ccda65.jpg',
    2: 'https://i.pinimg.com/564x/7f/bf/39/7fbf396b1234209ed0c887b8b932476f.jpg',
    3: 'https://media-cache.cinematerial.com/p/500x/udapnxr3/the-dark-knight-movie-poster.jpg?v=1456051180',
    4: 'https://media-cache.cinematerial.com/p/500x/srmnoyxu/pulp-fiction-movie-poster.jpg?v=1668291848',
    5: 'https://media-cache.cinematerial.com/p/500x/hncfztv7/forrest-gump-movie-poster.jpg?v=1602182137',
    6: 'https://xl.movieposterdb.com/10_08/2010/1375666/xl_1375666_b8d03866.jpg',
    7: 'https://xl.movieposterdb.com/10_08/2010/1375666/xl_1375666_b8d03866.jpg',
    8: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg',
    9: 'https://media-cache.cinematerial.com/p/500x/zjyc3qu0/the-dark-knight-rises-movie-poster.jpg?v=1456632648',
    10: 'https://media-cache.cinematerial.com/p/500x/ctpnz4mq/interstellar-movie-poster.jpg?v=1456424450',
    11: 'https://media-cache.cinematerial.com/p/500x/mmionz4t/fight-club-movie-poster.jpg?v=1456852437',
    12: 'https://xl.movieposterdb.com/08_12/2000/172495/xl_172495_93f99923.jpg',
    13: 'https://m.media-amazon.com/images/I/81wByEaQrlL._AC_SY679_.jpg',
    14: 'https://media-cache.cinematerial.com/p/500x/fjsfwbn8/the-silence-of-the-lambs-movie-poster.jpg?v=1456232081',
    15: 'https://media-cache.cinematerial.com/p/500x/emflvqyl/the-departed-movie-poster.jpg?v=1456221186',
    16: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/uqx37cS8cpHg8U35f9U5IBlrCV3.jpg',
    17: 'https://media-cache.cinematerial.com/p/500x/ueu3pzjs/the-prestige-movie-poster.jpg?v=1456264974',
    18: 'https://media-cache.cinematerial.com/p/500x/gqig4hyw/glory-movie-poster.jpg?v=1456262952',
    19: 'https://image.tmdb.org/t/p/original/qMxAmzGQO722q0UlssCOPhrXmvX.jpg',
    20: 'https://posters.movieposterdb.com/22_11/1994/323073/l_the-lion-king-movie-poster_07016269.jpg',
    
  };

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id');
    this.getMovieDetails(movieId);
  }

  getMovieDetails(id: string | null): void {
    if (id) {
      this.http.get<Movie>(`https://freetestapi.com/api/v1/movies/${id}`).subscribe((data: Movie) => {
        this.movie = data;
        this.movie.poster = this.getPosterUrl();
      });
    }
  }

  getPosterUrl(): string {
    return this.movie && this.posterUrls[this.movie.id] ? this.posterUrls[this.movie.id] : 'default-poster-url';
  }
}
