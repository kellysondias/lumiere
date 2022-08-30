import { useEffect, useState } from "react";
import { getMovie } from "../../services/endpoints";
import { useParams } from "react-router-dom";
import { imgUrl } from "../../services/variables";
import { Footer } from "../footer/footer";
import { MovieSection, MoviePage } from "./styles";
import { IMovie } from "../../interfaces/interfaces"
import Spinner from 'react-bootstrap/Spinner';
import '../../css/font-awesome-min.css'

export const Movie:React.FC = () => { 
    const [movie, setMovie] = useState<IMovie>({
                genres: [],
                plot: '',
                posterLink: '',
                rate: 0,
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

    console.log("GENRES:",movie.genres)

    return (
        <MovieSection>
            {loading ? <Spinner animation="border" role="status" className='spinner'>
                            <span className="visually-hidden">Loading...</span>
                        </Spinner> : 
                        
                        <>
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
                                            {movie.genres.map((genre, index) => (
                                                <li key={index}>{genre.name}</li>
                                             ))}
                                        </ul>
                                    </div>
                                </div>
                            </MoviePage>
                            
                            <Footer />
                        </>
                            }
        </MovieSection>
    )
}