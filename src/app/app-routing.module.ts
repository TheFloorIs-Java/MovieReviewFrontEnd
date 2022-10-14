import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { CommentPageComponent } from './comment-page/comment-page.component';

const routes: Routes = [ 
  {path: '', redirectTo: "Movie", pathMatch: "full"},
  {path: 'Movie', component: MoviePageComponent},
  {path: 'Comment', component: CommentPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
