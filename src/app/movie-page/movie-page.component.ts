import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/Movie';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})

export class MoviePageComponent implements OnInit {

  constructor(private http:HttpClient) {

  }

  movieList: Array<Movie> = [];
  movieInput: any = "";


  ngOnInit(): void {
    this.getAllMovies();
  }

  getAllMovies(){
  this.http.get<Array<Movie>>("http://localhost:80/movie").subscribe(data=>this.movieList=data);
  }

  postMovie(){
  let movie: Movie = {
    movieId: 0,
    movieTitle: this.movieInput,
    comments: []

  }
  this.http.post<Movie>("http://localhost:80/movie",movie).subscribe(data=>{console.log(data); this.getAllMovies()});

  }

}
