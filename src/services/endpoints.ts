const key = "6a9c98357ab56498a7776966dfadcfa5"
const baseUrl = "https://api.themoviedb.org/3"
export const imgUrl = "https://image.tmdb.org/t/p/w300"

export const getMovies = async (page:any) => {
    const url = await fetch(`${baseUrl}/trending/movie/week?api_key=${key}&page=${page}`)
    const json = await url.json()
    return json
}

export const getMovie = async (id:any) => {
    const url = await fetch(`${baseUrl}/movie/${id}?api_key=${key}`)
    const json = await url.json()
    return json
}