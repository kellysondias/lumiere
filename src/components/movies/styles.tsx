import styled from 'styled-components'

export const MoviesPage = styled.main`
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
        margin-bottom: 1rem;
        width: 80%;
        margin-left: 1.1rem;
        font-size: 1.5rem;
        padding: 0.5rem 1.5rem;
        border: 0.2rem solid #000;
        border-radius: 5px;
    }

    #search-bar:focus {
        border-color: #f5c518;
    }

    .page-menu {
        margin: 0 auto 1rem auto;
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

    @media (max-width: 511px) {
        #search-bar {
            text-align: center;
        }
    }

    @media (max-width: 375px) {
        h2 {
            font-size: 2.5rem;
        }
    }
`

export const MoviesSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;

    ul {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
    }
`

export const MovieCard = styled.li`
    width: 200px;
    margin: 0 1rem 1rem 1rem;
    background-color: #1a1a1a;
    list-style: none;

    img {
        width: 100%;
    }

    div div:last-child {
        padding: 10px;
    }

    div div:last-child div {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
    }

    i {
        color: #f5c518;
        margin-right: 0.5rem;
    }

    div div:last-child span {
        font-size: 1.6rem;
    }

    @media (max-width: 375px) {
        margin-bottom: 1.5rem;
    }
`