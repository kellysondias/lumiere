import styled from 'styled-components'

export const MovieSection = styled.main`
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

export const MovieList = styled.ul`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 90%;
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