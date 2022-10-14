import { MovieComment } from "./MovieComment";

export interface Movie{
    
    movieId: number;
    movieTitle: string;
    comments: Array<MovieComment>

}