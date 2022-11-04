import * as React from "react";
import { imgUrl } from "../../services/variables";
import { Link } from "react-router-dom";
import { Footer } from "../../components/footer/footer";
import { MoviesPage, MoviesSection, MovieCard } from "./styles";
import Spinner from "react-bootstrap/Spinner";
import "../../css/font-awesome-min.css";
import { PageMenu } from "../../components/page-menu/page-menu";
import { useLocalObservable, observer } from "mobx-react-lite";
import { Store } from "./store";

const Home: React.FC = () => {
	const store = useLocalObservable(() => new Store());
	const [search, setSearch] = React.useState("");

	React.useEffect(() => {
		store.moviesShelf.fetchPage(0);
	}, [store]);

	return (
		<MoviesPage>
			{
				store.moviesShelf.loader.isLoading
					? (
						<Spinner animation="border" role="status" className="spinner">
							<span className="visually-hidden">Loading...</span>
						</Spinner>
					) : (
						<>
							<h2>Featured Movies:</h2>
							<p>
								Here you can find all the movies in our database organized by what's
								recently trending among movie goers 😉 .
							</p>

							<input
								type="text"
								placeholder="Search a movie..."
								id="search-bar"
								value={search}
								onChange={(e) => setSearch(e.target.value)}
							/>

							<PageMenu
								page={store.moviesShelf.page}
								onNextPage={store.moviesShelf.nextPage}
								onPreviousPage={store.moviesShelf.previousPage}
								totalPages={0}
							/>

							<MoviesSection>
								<ul>
									{store.moviesShelf.items.length === 0 ? (
										<span className="unfound">No movies found 😥</span>
									) : (
										store.moviesShelf.items.map((movie, index) => (
											<Link key={index} to={`/movie/${movie.id}`}>
												<MovieCard>
													<div>
														<div>
															<img
																src={`${imgUrl}${movie.poster_path}`}
																alt={`${movie.title}'s poster`}
															/>
														</div>
														<div>
															<div>
																<i className="fa-solid fa-star"></i>
																<span>{movie.vote_average}</span>
															</div>
															<span>{movie.title}</span>
														</div>
													</div>
												</MovieCard>
											</Link>
										))
									)}
								</ul>
							</MoviesSection>
							<PageMenu
								page={store.moviesShelf.page}
								onNextPage={store.moviesShelf.nextPage}
								onPreviousPage={store.moviesShelf.previousPage}
								totalPages={0}
							/>
							<Footer/>
						</>
					)}
		</MoviesPage>
	);
};

export default observer(Home);
