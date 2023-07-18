import { ContactFormStyle } from "./ContactForm.style.js";
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from "../globalComponents/navBar/NavBar.js";
import yellowTwitter from "../../assets/yellowTwitterIcon.png";
import yellowLinkedin from "../../assets/yellowLinkedinIcon.png";
import yellowGithub from "../../assets/yellowGithubIcon.png";
import yellowInsta from "../../assets/ynaInstagramIcon.png";
import ynalogocircle from "../../assets/ynaLogoCirlce.png";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ContactForm() {
    return (
        <>
            <NavBar />
            <ContactFormStyle>

                <div className="container  ">
                    <div className="row ">
                        <div className="contact col-xl ">
                            <h1>Contact Us</h1>
                            <div className="row ">
                                <img className="mb-3" src={ynalogocircle} alt="YNA Logo Circle" />

                                <svg className="mb-3" width="223" height="1" viewBox="0 0 223 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line y1="0.5" x2="223" y2="0.5" stroke="white" />
                                </svg>

                                <a href="https://www.linkedin.com/company/yna-consult-group" target="_blank" rel="noreferrer">
                                    {" "}
                                    <img src={yellowLinkedin} alt="LinkedIn" />
                                </a>
                                <h3>Linkedin</h3>
                                <a href="https://twitter.com/YNA_Squad" target="_blank" rel="noreferrer">
                                    {" "}
                                    <img src={yellowTwitter} alt="Twitter" />
                                </a>
                                <h3>Twittter</h3>
                                <a href="https://github.com/Young-N-Ambitious" target="_blank" rel="noreferrer">
                                    {" "}
                                    <img src={yellowGithub} alt="Github" />{" "}
                                </a>
                                <h3>Github</h3>
                                <a href="https://www.instagram.com/yna.squad/" target="_blank" rel="noreferrer">
                                    {" "}
                                    <img src={yellowInsta} alt="Instagram" />{" "}
                                </a>
                                <h3>Instagram</h3>
                                <svg className="mb-3" width="223" height="1" viewBox="0 0 223 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line y1="0.5" x2="223" y2="0.5" stroke="white" />
                                </svg>

                                <h2>Get in touch with the @yna_squad today!</h2>
                            </div>
                        </div>


                        <div className="contact col-xl ">

                            <Form >
                                <Form.Group className="mb-3 text-left" controlId="formBasicName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="name" placeholder="Name" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicMessage">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control type="message" placeholder="Message" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>



                        </div>
                    </div>
                </div>
            </ContactFormStyle>
        </>
    );
}
export default ContactForm;
