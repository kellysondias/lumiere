import { getMovies, getMovieSearch } from '../../services/endpoints'
import { useState, useEffect } from 'react'
import { imgUrl } from '../../services/variables'
import { Link } from 'react-router-dom'
import { Footer } from '../footer/footer'
import { MoviesPage, MoviesSection, MovieCard } from './styles'
import { IMovies } from '../../interfaces/interfaces'
import Spinner from 'react-bootstrap/Spinner'
import '../../css/font-awesome-min.css'
import { PageMenu } from '../page-menu/page-menu'

export const Movies: React.FC = () => {
	const [movies, setMovies] = useState<IMovies[]>([])
	const [loading, setLoading] = useState(true)
	const [page, setPage] = useState(1)
	const [totalPages, setTotalPages] = useState(1)
	const [search, setSearch] = useState('')

	useEffect(() => {
        async function fetchMovies() {
			const list = await getMovies(page)
			setMovies(list.results)
			setLoading(false)
			setTotalPages(list.total_pages)
		}

		async function fetchMovieSearch() {
			const searchResponse = await getMovieSearch(page, search)
			setMovies(searchResponse.results)
			setTotalPages(searchResponse.total_pages)
		}

		fetchMovies()
		if (search !== '') fetchMovieSearch()
		
        if(page > totalPages) setPage(1)
        
	}, [page, search])

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

					<p>Here you can find all of the movies in our database organized by what's recently trending among movie goers 😉 .</p>

					<input
						type='text'
						placeholder='Search a movie...'
						id='search-bar'
						value={search}
						onChange={e => setSearch(e.target.value)}
					/>

					<MoviesSection>
						<ul>
							{movies.length === 0 ? (
								<span className='unfound'>No movies found 😥</span>
							) : (
								movies.map((movie, index) => (
									<Link
										key={index}
										to={`/movie/${movie.id}`}
										style={{
											width:"200px",
											margin:"0 0.5rem"
										}}
									>
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
														<span>{movie.vote_average.toFixed(1)}</span>
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
						page={page} 
						setPage={setPage} 
						totalPages={totalPages} 
					/>

					<Footer />
				</>
			)}
		</MoviesPage>
	)
}