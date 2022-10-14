export interface MovieComment {

    commentId: number;
    message: string;
    movieId: number | null;
    parentId: number | null;
    replies: Array<MovieComment>;

}