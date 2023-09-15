import springBootProject from "../../assets/SpringBoot.gif"
import gudinosRepairProject from "../../assets/GudinosRepair.gif"
import adminPortal from "../../assets/AdminPortal.png"
import portfolio from "../../assets/Portfolio.gif"
import "./Projects.css"
const Project = () => {
    return (
        <section id="projects">
            <div className="heading">
                Projects
            </div>
            <p className="project-heading">I have created a variety of projects from personal projects for practice, to private projects for local companies. I have used multiple technologies for different projects.</p>
            <p className="project-subheading">Below are some of the projects I've made.</p>
            <div className="project-list">
                <div className="project">
                    <img src={springBootProject} height={250} width={400}/>
                    <h2 className="project-title">Inventory Management Application</h2>
                    <ul className="project-tech">
                        <li>Spring Boot</li>
                        <li>Thymeleaf</li>
                        <li>MySQL</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
                <div className="project">
                    <img src={gudinosRepairProject} height={250} width={400}/>
                    <h2 className="project-title">Gudino's Repair Portal</h2>
                    <ul className="project-tech">
                        <li>React</li>
                        <li>HTML/CSS</li>
                        <li>Express.js</li>
                        <li>Node.js</li>
                        <li>MySQL</li>
                    </ul>
                </div>
                <div className="project">
                    <img src={portfolio} height={250} width={400}/>
                    <h2 className="project-title">Personal Portfolio</h2>
                    <ul className="project-tech">
                        <li>React</li>
                        <li>HTML/CSS</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                    </ul>
                </div>
                <div className="project">
                    <img src={adminPortal} height={250} width={400}/>
                    <h2 className="project-title">Admin Portal</h2>
                    <ul className="project-tech">
                        <li>Next.js</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Project;