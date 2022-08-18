const key = "6a9c98357ab56498a7776966dfadcfa5"
const baseUrl = "https://api.themoviedb.org/3"

export const getMovies = async () => {
    const url = await fetch(`${baseUrl}/trending/movie/week?api_key=${key}`)
    const json = await url.json();
    return json
}