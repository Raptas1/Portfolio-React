import "./Home.css"
import SocialBar from "../SocialBar/Socialbar"
import {BsArrowDown} from "react-icons/bs"
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
const Home = () => {

    return (
        <section id="home">
            <div className="socials-desktop">
                <SocialBar/>
            </div>
            <div className="introduction">
                <p className="intro">Hi there,</p>
                <h1 className="name">I'm Ivan</h1>
                <h2 className="desc">I develop application that live on the cloud.</h2>
                <p className="bio">I am a Software Engineer that focuses on developing, and planning applications with great user experience. I Enjoy turning ideas into realities and learning new skills to add onto my toolbox.</p>
                <HashLink to={"#contact"}><button className="resume-button"><span>Contact Me</span></button></HashLink>
            </div>
            <p className="scroll">Scroll <BsArrowDown/></p>
        </section>
    )
}

export default Home;