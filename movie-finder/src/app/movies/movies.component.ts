import { Component, OnInit } from '@angular/core';
import {MovieService} from '../services/movie.service';
import Movie from '../models/Movie';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popularMovies: Array<Movie>;
  constructor(private moviesService: MovieService) { }

  ngOnInit() {
    this.moviesService.getAllMovies()
      .subscribe((data) => {
        this.popularMovies = data['results'];
        console.log(this.popularMovies);
      });
  }

}
