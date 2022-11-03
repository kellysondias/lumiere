import { makeAutoObservable } from "mobx";
import { IMovies } from '../src/interfaces/interfaces'
import { getMovies } from "./services/endpoints";

export class Store {
    constructor () {
        makeAutoObservable(this)
    }

    public movies: IMovies[] = []
    public page = 1

    async setMovies() {
        const moviesResponse = await getMovies(this.page)
        this.movies = moviesResponse.results
    }
}