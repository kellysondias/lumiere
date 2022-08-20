import { useEffect, useState } from "react";
import { getMovie, imgUrl } from "../../services/endpoints";
import { useParams } from "react-router-dom";
import '../../css/font-awesome-min.css'
import Spinner from 'react-bootstrap/Spinner';
import styled from 'styled-components'

export const Movie = () => {
    interface movieTypes {
        genres:any;
        plot:string;
        posterLink:string;
        rate:any;
        releaseDate:string;
        tagLine: string;
        title:string;
    }
    
    const [movie, setMovie] = useState<movieTypes>({
                genres: '',
                plot: '',
                posterLink: '',
                rate: '',
                releaseDate: '',
                tagLine: '',
                title: '',
    })
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        async function fetchData () {
            const movieData = await getMovie(id)
            setMovie({
                genres: movieData.genres,
                plot: movieData.overview,
                posterLink: movieData.poster_path,
                rate: movieData.vote_average,
                releaseDate: movieData.release_date,
                tagLine: movieData.tagline,
                title: movieData.title,
            })
            setLoading(false)
        }

        fetchData()
    }, [])

    return (
        <MovieSection>
            {loading ? <Spinner animation="border" role="status" className='spinner'>
                            <span className="visually-hidden">Loading...</span>
                        </Spinner> : 
                        
                        <MoviePage>
                            <div className="poster">
                                <img 
                                    src={`${imgUrl}${movie.posterLink}`} 
                                    alt={`${movie.title}'s poster`} >
                                </img>
                            </div>

                            <div className="info">
                                <header>
                                    <div>
                                        <h1>{movie.title}</h1>
                                        <span><i className="release-date">({movie.releaseDate})</i></span>
                                    </div>
    
                                    <div className="rate">
                                        <i className='fa-solid fa-star'></i>
                                        <span>{movie.rate}</span>
                                    </div>
                                </header>

                                <main className="synopsis">
                                    <span><i>{movie.tagLine}</i></span>
                                    <p>{movie.plot}</p>
                                </main>

                                <div className="genres">
                                    <h2>Genres:</h2>
                                    <ul>
                                        {movie.genres.map((genre:any) => (
                                            <li>{genre.name}</li>
                                         ))}
                                    </ul>
                                </div>
                            </div>
                        </MoviePage> }
        </MovieSection>
    )
}

const MovieSection = styled.section`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    margin: 1.3rem auto;

    .spinner {
        margin: 5rem auto;
    }
`

const MoviePage = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
    
    h1,h2 {
        color: #f5c518;
        font-weight: 500;
    }

    .info {
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 50%;
    }

    .info div:first-child {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
    }

    .info div:first-child h1 {
        font-size: 3.5rem;
        margin-right: 1rem;
    }

    .release-date {
        font-size: 1.4rem;
    }
    
    .rate {
        margin: 0.5rem auto;
        font-size: 1.5rem;
        align-self: flex-start:
    }

    .rate i {
       color: #f5c518;
       margin-right: 0.5rem;
    }

    .rate span {
        margin-bottom: 5px;
    }

    .synopsis {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
    }

    .synopsis span i {
        font-size: 2.5rem;
        font-weight: 500;
    }

    .synopsis p {
        margin: 1rem auto;
        text-align: center;
        font-size: 2rem;
    }

    .genres {
        align-self: flex-start;
        margin-top: 1rem;
        text-align: left;
        background-color: #323131;
        border-radius: 7%;
        padding: 1.1rem;
    }

    .genres ul {
        padding: 0;
        margin: 0;
    }

    @media (max-width: 599px) {
        .info {
            margin-top: 1rem;
        }

        .synopsis span {
            text-align: center;
        }

        .info, .synopsis p {
            text-align: left;
        }

        .genres {
            margin: 1.5rem auto;
            align-self: center;
        }
    }

    @media (max-width: 335px) {
        .poster {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
            text-align: center;
        }

        img {
            width: 80%;
        }

        .info, .synopsis p {
            text-align: center;
        }
    }

`