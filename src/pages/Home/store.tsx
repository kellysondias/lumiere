import { makeAutoObservable } from "mobx";
import { PaginatedListShelf } from "@startapp/mobx-utils";
import { IMovies } from "../../interfaces/interfaces";
import { getMovies } from "../../services/endpoints";

export class Store {
	constructor() {
		makeAutoObservable(this);

		this.moviesShelf = new PaginatedListShelf(
			getMovies,
		)
	}

	public moviesShelf: PaginatedListShelf<IMovies>;
}
