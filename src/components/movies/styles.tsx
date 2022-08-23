import styled from 'styled-components'

export const MoviesSection = styled.main`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    background-color: #000;
    color: #fff;

    h2 {
        color: #f5c518;
        margin: 2rem auto;
        font-size: 3.2rem;
        font-weight: 500;
    }

    #search-bar {
        outline: none;
        max-width: 300px;
        width: 80%;
        margin-left: 1.1rem;
        margin-bottom: 1rem;
        font-size: 1.5rem;
        padding: 0.5rem 1.5rem;
        transition: 0.2s ease-in-out;
        border: 0.2rem solid #000;
        border-radius: 5px;
    }

    #search-bar:focus {
        border-color: #f5c518;
    }
    
    .page-menu {
        margin-bottom: 1rem;
        margin-left: 2.1rem;
        font-size: 1.5rem;
    }

    .page-menu i {
        cursor: pointer;
        transition: 0.2s ease-in-out;
    }

    .page-menu i:hover {
        color: #f5c518;
    }

    .page-menu span {
        margin: 0 1rem;
    }

    .spinner {
        margin: 5rem auto;
    }

    @media (max-width: 375px) {
        h2 {
            font-size: 2.5rem;
        }
    }
`

export const MovieList = styled.ul`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`

export const MovieCard = styled.li`
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