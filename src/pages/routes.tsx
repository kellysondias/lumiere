import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MoviesRoute } from './movies-route'
import { MovieRoute } from './movie-route'
import { Header } from '../components/header/header'
import { Footer } from '../components/footer/footer'

export const AppRoutes = () => (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<MoviesRoute />}></Route>
            <Route path="/movie/:id" element={<MovieRoute />}></Route>
        </Routes>
        <Footer />
    </BrowserRouter>
)