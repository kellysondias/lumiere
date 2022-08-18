import { getMovies } from '../../services/endpoints'
import { useState, useEffect } from 'react';
import '../../css/font-awesome-min.css'

export const Movies = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
      async function fetchData() {
        const list = await getMovies()
        setMovies(list.results)
      }
  
      fetchData()
    }, [])

    return (
        <main>
            <h2>Filmes em Destaque:</h2>

            {movies.map( (movie:any, index) => (
                <ul>
                    <li>
                        <div>
                            <div>
                                <img src={movie.poster_path} alt={`${movie.title}'s poster`} />
                            </div>
                            <div>
                                <div>
                                    <i className='fa-solid fa-star'></i>
                                    <span>{movie.vote_average}</span>
                                </div>
                                <span>{movie.title}</span>
                            </div>
                        </div>
                    </li>
                </ul>
            ))}
        </main>
    )
}