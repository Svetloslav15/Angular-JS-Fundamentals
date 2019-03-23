import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import Movie from '../models/Movie';
import {Observable} from 'rxjs';

const BASE_URL = 'https://api.themoviedb.org/3/movie';
const API_KEY = '1d1c68c7d378bcebdf958faec63b5eac';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http: HttpClient) {
  }

  getAllMovies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(BASE_URL + '/popular?api_key=' + API_KEY);
  }
}
