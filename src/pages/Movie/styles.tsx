import styled from 'styled-components'

export const MovieSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1.3rem auto;

    .spinner {
        margin: 5rem auto;
    }
`

export const MoviePage = styled.div`
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