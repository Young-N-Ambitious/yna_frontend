import { ContactFormStyle } from "./ContactForm.style.js";
import NavBar from "../globalComponents/navBar/NavBar.js";
import yellowTwitter from "../../assets/yellowTwitterIcon.png";
import yellowLinkedin from "../../assets/yellowLinkedinIcon.png";
import yellowGithub from "../../assets/yellowGithubIcon.png";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ContactForm() {
    return (
        <>
            <NavBar />
            <ContactFormStyle>

                <div className="container ">
                    <div className="row ">
                        <div className="contact col-xl ">
                            <h1>Contact Us</h1>
                            <div className="row ">
                                <h2>Get in touch with the @yna_squad today!</h2>
                                <a href="https://www.linkedin.com/company/yna-consult-group" target="_blank" rel="noreferrer">
                                    {" "}
                                    <img src={yellowLinkedin} alt="LinkedIn" />
                                </a>
                                <a href="https://twitter.com/YNA_Squad" target="_blank" rel="noreferrer">
                                    {" "}
                                    <img src={yellowTwitter} alt="Twitter" />
                                </a>
                                <a href="https://github.com/Young-N-Ambitious" target="_blank" rel="noreferrer">
                                    {" "}
                                    <img src={yellowGithub} alt="Github" />{" "}
                                </a>
                            </div>
                        </div>


                        <div className="contact col-xl ">
                            <h1>Form</h1>
                            <Form>
                            <Form.Group className="mb-3" controlId="formBasicName">
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
