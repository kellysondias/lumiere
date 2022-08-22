import { getMovies } from '../../services/endpoints'
import { useState, useEffect } from 'react';
import { imgUrl } from '../../services/variables';
import { Link } from 'react-router-dom'
import { Footer } from '../footer/footer';
import { MovieSection, MovieList, MovieCard } from './styles';
import '../../css/font-awesome-min.css'
import Spinner from 'react-bootstrap/Spinner';

export const Movies:any = () => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState('')

    useEffect(() => {
      async function fetchData() {
          const list = await getMovies(page)
          setMovies(list.results)
          setLoading(false)
        }

      fetchData()  
    }, [page]) 

    const lowerSearch = search.toLowerCase()
    const movieSearch = movies.
        filter((movie:any) => movie.title.toLowerCase().includes(lowerSearch))

    return (
        <MovieSection>
            {loading ? <Spinner animation="border" role="status" className='spinner'>
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>  : 
                <>
                    <h2>Featured Movies:</h2>

                    <input 
                        type="text"
                        name="search"
                        placeholder="Search a trending movie..."
                        id="search-bar" 
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <div className='page'>
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
    
                    <MovieList>
                        {movieSearch.map((movie:any, index:number) =>  (
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
                    </MovieList>

                    <div className="page">
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
        </MovieSection>
    )
}