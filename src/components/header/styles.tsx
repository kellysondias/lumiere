import styled from 'styled-components'

export const HeaderSection = styled.header`
display: flex;
flex-flow: row wrap;
justify-content: space-between;
align-items: center;
padding: 1.7rem;
background-color: #121212;

h1 {
    font-family: 'Bebas Neue', monospace;
    padding: 0.4rem 0.8rem;
    font-size: 3rem;
    border-radius: 10%;
    color: #000;
    background-color: #f6c600;
}

img {
    width: 40px;
}

@media (max-width: 375px) {
    flex-direction: column;
    align-items: flex-start;
    position: relative;

    h1 {
        padding: 0.4rem 0.8rem;
        font-size: 2.3rem;
    }

    img {
        width: 30px;
        position: absolute;
        right: 10px;
        bottom: 10px;
    }
}
`