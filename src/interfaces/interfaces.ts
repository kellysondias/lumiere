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
    genres: {
        id:string;
        name:string;
    }
}