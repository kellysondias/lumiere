import { getMovies, getMovieSearch } from '../../services/endpoints';
import { useState, useEffect } from 'react';
import { imgUrl } from '../../services/variables';
import { Link } from 'react-router-dom';
import { Footer } from '../footer/footer';
import { MoviesPage, MoviesSection, MovieCard } from './styles';
import { IMovies } from '../../interfaces/interfaces';
import Spinner from 'react-bootstrap/Spinner';
import '../../css/font-awesome-min.css';

export const Movies: React.FC = () => {
	const [movies, setMovies] = useState<IMovies[]>([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [search, setSearch] = useState('');

	useEffect(() => {
        async function fetchMovies() {
			const list = await getMovies(page);
			setMovies(list.results);
			setLoading(false);
			setTotalPages(list.total_pages);
		}

		async function fetchMovieSearch() {
			const searchResponse = await getMovieSearch(page, search);
			setMovies(searchResponse.results);
			setTotalPages(searchResponse.total_pages);
		}

		fetchMovies();
		if (search !== '') fetchMovieSearch();
		
        if(page > totalPages) setPage(1);
        
	}, [page, search]);

	return (
		<MoviesPage>
			{loading ? (
				<Spinner
					animation='border'
					role='status'
					className='spinner'>
					<span className='visually-hidden'>Loading...</span>
				</Spinner>
			) : (
				<>
					<h2>Featured Movies:</h2>

					<input
						type='text'
						placeholder='Search a movie...'
						id='search-bar'
						value={search}
						onChange={e => setSearch(e.target.value)}
					/>

					<div className='page-menu'>
						<i
							onClick={() => page > 1 && setPage(page - 1)}
							className='fa-solid fa-angle-left'></i>
						<span>{`Page ${page} of ${totalPages}`}</span>

						<i
							onClick={() => page < totalPages && setPage(page + 1)}
							className='fa-solid fa-angle-right'></i>
					</div>

					<MoviesSection>
						<ul>
							{movies.length === 0 ? (
								<span className='unfound'>No movies found 😥</span>
							) : (
								movies.map((movie, index) => (
									<Link
										key={index}
										to={`/movie/${movie.id}`}>
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
														<i className='fa-solid fa-star'></i>
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

					<div className='page-menu'>
						<i
							onClick={() => page > 1 && setPage(page - 1)}
							className='fa-solid fa-angle-left'></i>
						<span>{`Page ${page} of ${totalPages}`}</span>
						<i
							onClick={() => page < totalPages && setPage(page + 1)}
							className='fa-solid fa-angle-right'></i>
					</div>

					<Footer />
				</>
			)}
		</MoviesPage>
	);
};