import icon from "../../assets/img/portfolio-icon.png"
import { HeaderSection } from "./styles"
import { Link } from "react-router-dom"

export const Header:React.FC = () => {
    return (
        <HeaderSection>
            <Link to="/">
                <h1>Lumière</h1>
            </Link>
            <div>
                <a 
                href="https://meu-portfolio-dusky.vercel.app/"
                target="_blank">
                    <img 
                        src={icon} 
                        alt="Go to Kellyson Dias's portfolio" >
                    </img>
                </a>
            </div>
        </HeaderSection>
    )
}