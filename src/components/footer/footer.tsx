import '../../css/font-awesome-min.css'
import styled from 'styled-components'

export const Footer = () => {
    return (
        <FooterSection>
            <Icons>
                <li>
                    <a target="_blank" href="https://www.linkedin.com/in/kellysondias/">
                        <i className='fab fa-linkedin-in'></i>
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://wa.me/5543999702430">
                        <i className='fab fa-whatsapp'></i>
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://github.com/kellysondias">
                        <i className='fab fa-github'></i>
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://www.instagram.com/kellysondias/">
                        <i className='fab fa-instagram'></i>
                    </a>
                </li>
            </Icons>
            <div>
                <span>All rights reserved to <a target="_blank" href="https://www.themoviedb.org/">TMDB</a></span>
            </div>
        </FooterSection>
    )
}

const FooterSection = styled.footer`
    display: flex;
    position: relative;
    flex-flow: column nowrap:
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0.7rem auto;

    div {
        position: absolute;
        left: 0;
        right: 0;
        top: 4rem;
        margin: 10px auto;
    }

    div span {
        padding: 1.2rem auto;
    }

    div span a {
        color: #f6c600;
        text-decoration: none;
    }
`

const Icons = styled.ul`
    display: flex;
    flex-flow: row wrap:
    justify-content: center;
    align-content: center;
    align-items: center;
    text-align: center;
    margin: 10px auto;
    padding: 0;

    li {
        display: inline;
    }

    li a {
        margin: 1.5rem;
        align-items: center;
        text-align: center;
        color: #fff;
        font-size: 2.5rem;
        transition: 0.2s ease-in-out;
    }

    li:first-child a:first-child {
        margin-left: 0;
    }

    li:last-child a:last-child {
        margin-right: 0;
    }

    li a:hover {
        color: #f6c600;
    }
`