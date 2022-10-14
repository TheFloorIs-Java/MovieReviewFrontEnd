import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MovieComment } from '../models/MovieComment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor(private http:HttpClient) { 
  }

  @Input()
  comment: MovieComment = {
    commentId: 0,
    message: 'Great Movie',
    movieId: 0,
    parentId: 0,
    replies: []
  };

  isreplying: boolean = false;
  hidebottom: boolean = false;
  commentInput: any;

  ngOnInit(): void {
  }

  replyButtonClicked() {
    this.isreplying = !this.isreplying;
  }

  hideButtonClicked() {
    this.hidebottom = !this.hidebottom;
  }


  postComment(){
    if (this.commentInput == "") return;
    let comment: MovieComment = {
      commentId: 0,
      message: this.commentInput,
      movieId: null,
      parentId: this.comment.commentId,
      replies: []
    }
    this.http.post<MovieComment>("http://localhost:80/comment/", comment)

    .subscribe(data=>{
      this.comment.replies.push(data);
      this.isreplying = false;

      this.commentInput = "";
    })
  }

}
