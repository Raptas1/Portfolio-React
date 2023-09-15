import "./SocialBar.css"
import { Link } from "react-router-dom"
import {FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa"
const SocialBar = () => {
    return (
        <div className="socialbar">
            <div className="socials">
                <Link to="https://github.com/Raptas1" target="_blank" rel="noopener noreferrer" ><FaGithub/></Link>
                <Link to="https://www.linkedin.com/in/ivan-gudino-a2b942262" target="_blank" rel="noopener noreferrer" ><FaLinkedin/></Link>
                <Link to="https://twitter.com/igudino2002" target="_blank" rel="noopener noreferrer" ><FaTwitter/></Link>
            </div>
        </div>
    )
}

export default SocialBar