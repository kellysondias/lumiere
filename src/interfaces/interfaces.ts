export interface IMovies {
    id: string;
    poster_path:string;
    title: string;
    vote_average:number;
}

export interface IMovie {
    genres:IGenres[];
    plot:string;
    posterLink:string;
    rate:number;
    releaseDate:string;
    tagLine: string;
    title:string;
}

export interface IGenres {
    id:string;
    name:string;
}