import { makeAutoObservable } from "mobx";
import { IMovies } from '../src/interfaces/interfaces'
import { getMovies } from "./services/endpoints";

export class Store {
    constructor () {
        makeAutoObservable(this)
    }

    public movies: IMovies[] = []
    public search = ''
    public page = 1
    public totalPages = 1
    public loading = false

    async setMovies() {
        const moviesResponse = await getMovies(this.page)
        this.movies = moviesResponse.results
    }

    setLoading() {
        if (this.movies.length !== 0) this.loading = false
        return this.loading = true
    }

    setPage() {
        if (this.page > this.totalPages) this.page = 1
    }
}