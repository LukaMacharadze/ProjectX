import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-movies',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {




  public movieList:any[] = [];
  


  constructor(public service: HttpService) {

    this.service.getAllMovies().subscribe(data => { 
      
      console.log (data);
      this.movieList = data

  })


}
  }















