import "./About.css"
import portrait from "../../assets/portrait.jpeg"

const About = () => {
    return (
        <section id="about">
            <p className="heading">
                About Me
            </p>

            <div className="card">
                <div className="card-section">
                    <p className="card-text">Hello! My name is <span className="blue">Ivan Gudino</span> and I have been creating coding projects since <span className="blue">2016</span> where I started with Discord bots in Javascript. I spent most of my time work in Javascript until recently where I have expanded my tech stack to more options.</p>
                    <p className="card-text">I currently am a Senior majoring in <span className="blue">Software Development</span> looking for opportunities to learn and grow as an <span className="blue">Engineer</span>. I am open for new technologies I can add to my stack!</p>
                    <div className="techStack">
                        <h2 className="card-title">Below are technologies I have used:</h2>
                        <ul className="techStack-list card-text">
                            <li>Java</li>
                                <li>Spring Boot</li>
                            <li>C#</li>
                                <li>.NET</li>
                            <li>Javascript</li>
                                <li>React</li>
                                <li>Next.Js</li>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>
                    </div>
                </div>
                <div className="card-section">
                    <div className="image-container">
                        <img src={portrait} height={300} width={400}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;