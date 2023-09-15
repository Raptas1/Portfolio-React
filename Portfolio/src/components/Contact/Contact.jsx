import SocialBar from "../SocialBar/Socialbar";
import emailjs from "@emailjs/browser"
import { useRef } from "react";
import "./Contact.css"
const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    console.log("SEnt")
    e.preventDefault();
    e.reset();

    emailjs.sendForm('service_z6eevit', 'template_4xw3o1r', form.current, 'A3pKjF7NnjMoPSedf')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
        <section id="contact">
            <div className="heading">
                Contact
            </div>
            <form onSubmit={sendEmail}>
                <div className="form-container">
                    <div className="form-section">
                        <h2 className="form-heading">Let's get in touch!</h2>
                        <p className="form-subheading">Send me a message! If you have a question, or concern please don't hesitate to reach out!</p>
                    </div>
                    <div className="form-section">
                        <input placeholder="Name" name="user_name"></input>
                        <input type="email" name="user_email" placeholder="Email"></input>
                        <p className="message-title">Your Message</p>
                        <textarea name="message"></textarea>
                        <button type="submit">Send Message</button>
                    </div>
                </div>
            </form>
            <SocialBar/>
        </section>
    )
}

export default Contact;