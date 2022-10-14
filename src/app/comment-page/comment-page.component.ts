import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { MovieComment } from '../models/MovieComment';
import { Movie } from '../models/Movie';



@Component({
  selector: 'app-comment-page',
  templateUrl: './comment-page.component.html',
  styleUrls: ['./comment-page.component.css']
})
export class CommentPageComponent implements OnInit {

  constructor(private http:HttpClient, private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(data => {
      this.movieId = data['Id'];
    });
  }

  movie: Movie = {}as Movie;

  commentList: Array<MovieComment> = [];
  movieId: number = 0;
  commentInput: any;


  ngOnInit(): void {
    this.getMovieById();
  }

  getMovieById(){
  console.log(this.movieId);
  this.http.get<Movie>("http://localhost:80/movie/" + this.movieId)
  .subscribe(data=>{ 
    this.movie=data;
    console.log(data)
    this.commentList=this.movie.comments
  
  });
  }

  postComment(){
    let comment: MovieComment = {
      commentId: 0,
      message: this.commentInput,
      movieId: this.movieId,
      parentId: null,
      replies: []
    }
    this.http.post<MovieComment>("http://localhost:80/comment/", comment)

    .subscribe(data=>{
      this.commentList.push(data);
      
      this.commentInput = "";
    })
  }
}
