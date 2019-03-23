import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Movie from '../models/Movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input('movie')
  movie: Movie;

  constructor() { }

  ngOnInit() {
  }

}
