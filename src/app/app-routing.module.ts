import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

import { MovieListComponent } from './movie-list/movie-list.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';

import { FavoriteMoviesComponent } from './favorite-movies/favorite-movies.component';





const routes: Routes = [



  { path: '', component: MovieListComponent }, 
  { path: 'home', component: HomeComponent }, 
  { path: 'movie-list', component: MovieListComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: 'terms-of-service', component: TermsOfServiceComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'navbar', component: NavbarComponent },
  {path: 'favorite-movies', component:FavoriteMoviesComponent},
  { path: '**', component: ErrorComponent },
 
   
   
  ];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
