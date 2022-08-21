import { getMovies, imgUrl } from '../../services/endpoints'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import '../../css/font-awesome-min.css'
import styled from 'styled-components'
import Spinner from 'react-bootstrap/Spinner';

export const Movies:any = () => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    
    const pageNumber = page >= 1 ? page : 1

    useEffect(() => {
      async function fetchData() {
          const list = await getMovies(page)
          setMovies(list.results)
          setLoading(false)
        }

      fetchData()  
    }, [page])

    console.log("PAGE:", page)

    return (
        <MovieSection>
            {loading ? <Spinner animation="border" role="status" className='spinner'>
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>  : 
                <>
                    <h2>Featured Movies:</h2>

                    <div className='page'>
                        <i onClick={() => page > 1 && setPage(page - 1)} className="fa-solid fa-angle-left"></i>
                        <span>{`Página ${pageNumber} de 10`}</span>
                        <i onClick={() => page < 10 && setPage(page + 1)} className="fa-solid fa-angle-right"></i>
                    </div>
    
                    <MovieList>
                        {movies.map((movie:any, index:number) =>  (
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

                    <div className='page'>
                        <i onClick={() => page > 1 && setPage(page - 1)} className="fa-solid fa-angle-left"></i>
                        <span>{`Página ${pageNumber} de 10`}</span>
                        <i onClick={() => page < 10 && setPage(page + 1)} className="fa-solid fa-angle-right"></i>
                    </div>
                </>
            }
        </MovieSection>
    )
}

const MovieSection = styled.main`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    background-color: #000;
    color: #fff;

    h2 {
        color: #f5c518;
        margin: 2rem auto;
        font-size: 3.2rem;
        font-weight: 500;
    }

    .spinner {
        margin: 5rem auto;
    }

    .page {
        margin-bottom: 1rem;
        font-size: 1.5rem;
    }

    .page i {
        cursor: pointer;
        transition: 0.2s ease-in-out;
    }

    .page i:hover {
        color: #f5c518;
    }

    .page span {
        margin: 0 1rem;
    }

    @media (max-width: 375px) {
        h2 {
            font-size: 2.5rem;
        }

        .page {
            font.size: 1.7rem;
        }
    }
`

const MovieList = styled.ul`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 90%;
`

const MovieCard = styled.li`
    width: 200px;
    margin: 0 1rem 1rem 1rem;
    background-color: #1a1a1a;

    .poster img {
        width: 100%;
    }

    .info {
        padding: 10px;
    }

    .info .rate {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
    }

    .info .rate i {
        color: #f5c518;
        margin-right: 0.5rem;
    }

    .info .title {
        font-size: 1.6rem;
    }

    @media (max-width: 375px) {
        margin-bottom: 1.5rem;
    }
`