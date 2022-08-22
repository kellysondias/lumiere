import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from '../components/header/header'
import { Movies } from '../components/movies/movies'
import { Movie } from '../components/movie/movie'

export const AppRoutes = () => (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Movies />}></Route>
            <Route path="/movie/:id" element={<Movie />}></Route>
        </Routes>
    </BrowserRouter>
)