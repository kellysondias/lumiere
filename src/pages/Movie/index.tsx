import * as React from "react";
import { useParams } from "react-router-dom";
import { imgUrl } from "../../services/variables";
import { Footer } from "../../components/footer/footer";
import { MovieSection, MoviePage } from "./styles";
import Spinner from 'react-bootstrap/Spinner';
import '../../css/font-awesome-min.css'
import { observer, useLocalObservable } from "mobx-react-lite";
import { Store } from "./store";

const Movie: React.FC = () => {
	const { id } = useParams()

	const store = useLocalObservable(() => new Store(id));

	React.useEffect(
		() => {
			store.fetchShelf.fetchModel();
		},
		[],
	)

	return (
		<MovieSection>
			{
				store.fetchShelf.loader.isLoading
					? (
						<Spinner animation="border" role="status" className='spinner'>
							<span className="visually-hidden">Loading...</span>
						</Spinner>
					) : (
						!store.fetchShelf.hasModel
							? <span className="unfound">Movie not found 😥</span>
							: (
								<>
									<MoviePage>
										<div className="poster">
											<img
												src={`${imgUrl}${store.fetchShelf.fetchedModel.posterLink}`}
												alt={`${store.fetchShelf.fetchedModel.title}'s poster`}>
											</img>
										</div>

										<div className="info">
											<header>
												<div>
													<h1>{store.fetchShelf.fetchedModel.title}</h1>
													<span><i className="release-date">({store.fetchShelf.fetchedModel.releaseDate})</i></span>
												</div>

												<div className="rate">
													<i className='fa-solid fa-star'></i>
													<span>{store.fetchShelf.fetchedModel.rate}</span>
												</div>
											</header>

											<main className="synopsis">
												<span><i>{store.fetchShelf.fetchedModel.tagLine}</i></span>
												<p>{store.fetchShelf.fetchedModel.plot}</p>
											</main>

											<div className="genres">
												<h2>Genres:</h2>
												<ul>
													{store.fetchShelf.fetchedModel.genres.map((genre, index) => (
														<li key={index}>{genre.name}</li>
													))}
												</ul>
											</div>
										</div>
									</MoviePage>
									<Footer/>
								</>
							)
					)
			}
		</MovieSection>
	)
}

export default observer(Movie);
