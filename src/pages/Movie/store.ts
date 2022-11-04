import { makeAutoObservable } from "mobx";
import { FetchModelShelf } from "@startapp/mobx-utils";
import { IMovie } from "../../interfaces/interfaces";
import { getMovie } from "../../services/endpoints";

export class Store {
	constructor(id?: string) {
		makeAutoObservable(this);

		this.fetchShelf = new FetchModelShelf(
			id,
			getMovie,
		)
	}

	public fetchShelf: FetchModelShelf<IMovie, string | undefined>;
}
