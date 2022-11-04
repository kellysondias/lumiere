import { makeAutoObservable } from "mobx";
import { IMovies } from "../../interfaces/interfaces";
import { getMovies } from "../../services/endpoints";

export class MoviesStates {
  constructor() {
    makeAutoObservable(this);
  }

  public movies: IMovies[] = [];
  public search = "";
  public page = 1;
  public totalPages = 1;
  public loading = false;

  public async setMovies(movies: IMovies[]) {
    this.movies = movies;
  }

  public setLoading(loading: boolean) {
    this.loading = loading;
  }

  public setPage() {
    if (this.page > this.totalPages) this.page = 1;
  }

  public fetch = async () => {
    if (this.loading) return;
    this.loading = true;

    try {
      const moviesResponse = await getMovies(this.page);
      this.setMovies(moviesResponse.results);
    } catch (e) {
      console.error(e);
    } finally {
      this.setLoading(false);
    }
  };
}
