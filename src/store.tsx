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

    public async setMovies(movies: IMovies[]) {
        this.movies = movies
        /* const moviesResponse = await getMovies(this.page)
        return moviesResponse */
    }

    public setLoading(loading: boolean) {
        this.loading = loading
    }

    public fetch = async () => {
        if (this.loading) return

        this.loading = true

        try {
            const moviesResponse = await getMovies(this.page)
            this.setMovies(moviesResponse)
        } catch (e) {
            console.error(e)
        } finally {
            this.setLoading(false)
        }
    }
}