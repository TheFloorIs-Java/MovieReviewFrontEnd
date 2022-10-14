import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { CommentPageComponent } from './comment-page/comment-page.component';
import { HttpClient, HttpClientModule, HttpResponse} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommentComponent } from './comment/comment.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviePageComponent,
    CommentPageComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClient, HttpClientModule, HttpResponse],
  bootstrap: [AppComponent]
})
export class AppModule { }
