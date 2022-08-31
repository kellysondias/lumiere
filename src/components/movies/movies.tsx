import { getMovies, getMovieSearch } from '../../services/endpoints'
import { useState, useEffect } from 'react';
import { imgUrl } from '../../services/variables';
import { Link } from 'react-router-dom'
import { Footer } from '../footer/footer';
import { MoviesPage, MoviesSection, MovieCard } from './styles';
import { IMovies } from "../../interfaces/interfaces"
import Spinner from 'react-bootstrap/Spinner';
import '../../css/font-awesome-min.css'

export const Movies:React.FC = () => {
    const [movies, setMovies] = useState<IMovies[]>([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState('')
    const [movieSearch, setMovieSearch] = useState<IMovies[]>([])

    useEffect(() => {
      async function fetchMovies() {
          const list = await getMovies(page)
          setMovies(list.results)
          setLoading(false)
        }

      async function fetchMovieSearch() {
          const searchResponse = await getMovieSearch(page, search)
          setMovieSearch(searchResponse.results)
        }

      fetchMovies()
      fetchMovieSearch()
    }, [page, search]) 

    console.log("MOVIE SEARCH", movieSearch)

    const lowerSearch = search.toLowerCase()
    const movieSearchh = movies.
        filter((movie) => movie.title.toLowerCase().includes(lowerSearch))

    return (
        <MoviesPage>
            {loading ? <Spinner animation="border" role="status" className='spinner'>
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>  : 
                <>
                    <h2>Featured Movies:</h2>

                    <input 
                        type="text"
                        name="search"
                        placeholder="Search a movie..."
                        id="search-bar" 
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <div className='page-menu'>
                        <i 
                            onClick={() => page > 1 && setPage(page - 1)} 
                            className="fa-solid fa-angle-left">
                        </i>
                        <span>{`Page ${page} of 10`}</span>
                        <i 
                            onClick={() => page < 10 && setPage(page + 1)} 
                            className="fa-solid fa-angle-right">
                        </i>
                    </div>

                    <MoviesSection>
                        {movieSearch === undefined ? 
                            <>

                                <ul>
                                    {movies.map((movie, index) =>  (
                                    <Link key={index} to={`/movie/${movie.id}`}>
                                        <MovieCard>
                                            <div>
                                                <div className='poster'>
                                                    <img src={`${imgUrl}${movie.poster_path}`} alt={`${movie.title}'s poster`} />
                                                </div>
                                                <div className='info'>
                                                    <div className='rate'>
                                                        <i className='fa-solid fa-star'></i>
                                                        <span>{movie.vote_average}</span>
                                                    </div>
                                                    <span className='title'>{movie.title}</span>
                                                </div>
                                            </div>
                                        </MovieCard>
                                    </Link>
                                    ))}
                                </ul>


                            </>
                             : <ul>
                                    {
                                        movieSearch.map((movie, index) =>  (
                                                movie === undefined ? <span>Lel</span> :     <Link key={index} to={`/movie/${movie.id}`}>
                                                <MovieCard>
                                                    <div>
                                                        <div className='poster'>
                                                            <img src={`${imgUrl}${movie.poster_path}`} alt={`${movie.title}'s poster`} />
                                                        </div>
                                                        <div className='info'>
                                                            <div className='rate'>
                                                                <i className='fa-solid fa-star'></i>
                                                                <span>{movie.vote_average}</span>
                                                            </div>
                                                            <span className='title'>{movie.title}</span>
                                                        </div>
                                                    </div>
                                                </MovieCard>
                                            </Link>
                                            ))
                                    }
                              </ul>
                        }
                    </MoviesSection>

                    <div className='page-menu'>
                        <i 
                            onClick={() => page > 1 && setPage(page - 1)} 
                            className="fa-solid fa-angle-left">
                        </i>
                        <span>{`Page ${page} of 10`}</span>
                        <i 
                            onClick={() => page < 10 && setPage(page + 1)} 
                            className="fa-solid fa-angle-right">
                        </i>
                    </div>

                    <Footer />
                </>
            }
        </MoviesPage>
    )
}