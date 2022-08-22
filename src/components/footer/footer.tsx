import '../../css/font-awesome-min.css'
import { FooterSection, Icons } from './styles'

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